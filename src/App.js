import React, { Component } from 'react';
import './App.css';

import { BrowserRouter } from 'react-router-dom'

import Layout from './hoc/Layout/Layout'

import { configureAnchors } from 'react-scrollable-anchor'
configureAnchors({ scrollDuration: 1000 })

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='content'>
          <Layout />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
