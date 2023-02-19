import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
class CaverPage extends Component {
    render() {
      return (
        <div>
          <h1>CaverPage</h1>
          <span><Link to="/">HomePage</Link></span>
        </div>
      )
    }
  }
  export default CaverPage