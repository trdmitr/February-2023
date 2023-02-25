import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class CaverPage extends Component {
    render() {
        const { songs, isLoading } = this.props
      return ( 
        <div>{isLoading ?  <h2>Load...</h2>:console.log("PROPS",songs)}
          <h1>CaverPage</h1>
          <span><Link to="/">HomePage</Link></span>
          <div>
             {songs.map((song, key) => (
              <li>
                <Link to={`/cavers/${song.id}`}>
                 {song.name} 
                </Link>
                </li>
              // console.log(song.name)
                // <p>{song.name}</p>
          ) )}
          </div>
         
        </div>
      )
    }
  }
  export default CaverPage