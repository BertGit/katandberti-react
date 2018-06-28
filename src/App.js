import React, { Component } from 'react';
import './App.css';

import Layout from './hoc/Layout/Layout'
import WelcomePage from './containers/WelcomePage/WelcomePage'
import styles from './App.css'

class App extends Component {
  render() {
    return (
      <div className='content'>
        <Layout>
          <WelcomePage />
        </Layout>
      </div>
    );
  }
}

export default App;
