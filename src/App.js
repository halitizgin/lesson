import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ArticleItem from './ArticleItem';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ArticleItem title="Kod Evreni" description="Kod Evreni'nde Ready ile React.js öğreniyoruz."/>
      </div>
    );
  }
}

export default App;