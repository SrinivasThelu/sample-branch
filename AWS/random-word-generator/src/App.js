import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { API } from "aws-amplify";





class App extends Component {
  constructor(props) {
    super(props);
    this.state = { word: 'inititial' };
  }

  componentDidMount() {
    try {
      this.poll = setInterval(async () => {
        const response = await this.getWord()
        this.setState({ word : response.word })
      }

        , 1000);
    } catch (e) {
      alert(e);
    }
    this.setState({ isLoading: false });
  }

  async componentWillUnmount() {
    try {
      clearInterval(this.poll)
    } catch (e) {
      alert(e);
    }
  }

  getWord() {
    return API.get("pickWord", "/random", {
      headers: {
        'x-api-key': 'pH50ieDZSV8D7f72ZHBZw9Z9IKdDaWjSal3zbdDY'
      }
    });

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            You {this.state.word}
          </p>
        </header>
      </div>
    );
  }
}

export default App;
