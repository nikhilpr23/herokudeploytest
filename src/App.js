import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      quote: "",
      author: "",
      allQuotes: [],
      color: "black"
    } 
    this.handleClick = this.handleClick.bind(this);     
  //  this.tweetQuote = this.tweetQuote.bind(this);
    this.postQuote = this.postQuote.bind(this);
    this.forkCode = this.forkCode.bind(this);
  } 

  componentDidMount(){
    const quotesAPI = "https://gist.githubusercontent.com/nikhilpr23/23bdc3609388724207b04de2a7c8b1eb/raw/28c0ec3c21cb6de0ca6aa6a56970289c783fbebf/randomQuotes.json";
    let randomNum;
    fetch(quotesAPI).
      then(response => response.json()).
      then(quotes => this.setState({allQuotes: quotes})).
      then(() => randomNum = Math.floor(Math.random()*(this.state.allQuotes.length))).
      then(() => this.setState({ 
                      quote: this.state.allQuotes[randomNum].quote, 
                      author: this.state.allQuotes[randomNum].author}));
  }
  // used <a> tag for tweet quotes to pass the tests, else if we'd used a <button>, then this function will be onClick 
  /*tweetQuote(){
    window.open('https://twitter.com/intent/tweet?hashtags=RandomQuotes&text='+this.state.quote, '_blank');
  }*/

  postQuote(){
    alert('This feature is in development. Not available at the moment.');
  }

  forkCode(){
    window.open('https://github.com/nikhilpr23/randomQuoteMachine','_blank');
  }

  handleClick(){
    let randomNum = Math.floor(Math.random()*(this.state.allQuotes.length));
    this.setState({
      quote: this.state.allQuotes[randomNum].quote,
      author: this.state.allQuotes[randomNum].author
    })
  }

  render() {   
    return (
      <div className="container">
        <div id="quote-box">
          <div id="text">
            <span className="quotes">"</span>{this.state.quote}<span className="quotes">"</span>
          </div>
          <div id="author">
            - {this.state.author}
          </div>
          <div id="clickable">
            <button className="button" title="Tweet this Quote"><a id='tweet-quote' href={'https://twitter.com/intent/tweet?hashtags=RandomQuotes&text='+encodeURIComponent(this.state.quote+' -- '+this.state.author)} 
            target='_blank'><i class="fa fa-twitter"></i></a></button>
            <button className="button" title="Post this quote on Facebook" onClick={this.postQuote}><i class="fa fa-facebook-square"></i></button>
            <button className="button" title="Fork this Github repo" onClick={this.forkCode}><i class="fa fa-github"></i></button>
            <button className="button" id="new-quote" onClick={this.handleClick}>New Quote</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
