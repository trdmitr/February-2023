import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {

    render() {
      return (
        <div>
          <h1>HomePage</h1>
          <span><Link to="/cavers">cavers</Link></span>
        </div>
      )
    }
  }
  export default HomePage