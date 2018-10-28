import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      quote: "",
      author: "",
      allQuotes: []
    } 
    this.handleClick = this.handleClick.bind(this);     
    this.tweetQuote = this.tweetQuote.bind(this);
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

  tweetQuote(){
    window.open('https://twitter.com/intent/tweet?hashtags=RandomQuotes&text='+this.state.quote, '_blank');
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
            {this.state.quote}
          </div>
          <div id="author">
            - {this.state.author}
          </div>
          <div id="clickable">
            <button className="button"><a id='tweet-quote' href={'https://twitter.com/intent/tweet?hashtags=RandomQuotes&text='+this.state.quote+' -- '+this.state.author} 
            target='_blank'>Twitter</a></button>
            <button className="button" id="new-quote" onClick={this.handleClick}>New Quote</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
