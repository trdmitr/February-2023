import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Img from '../UI/Img';
import "../UI/Mobile.css"
// import Loader from "../Loader/Loader";
import classes from "./CaverPage.module.css"

class CaverPage extends Component {
    render() {
        const { songs, isLoading } = this.props
      return ( 
        <div className="device device-iphone-x">
          <div className="device-frame">
            <div className="device-content">
              <div className={classes.row}>

                <div className={classes.column50}>
                  {isLoading ? <h2>Load...</h2> : console.log("PROPS", songs)}
                  <h1>CaverPage</h1>
                  <span><Link to="/">HomePage</Link></span>
                  {songs.map((song, key) => (
                      <Link to={`/cavers/${song.id}`}> 
                    <div key={song.id} className={classes.media}>
                    <div className={classes.mediaImage}>
                        {/* <img src={song.photo} width={100} alt={song.name} /> */}
                        <Img imgUrl={song.photo} imgAlt={song.name} />
                      </div>  
                      <div>
                        <p> {song.name} </p>
                      </div>
                    </div>
                    </Link>
                  ))}

          
                </div>
              </div>

            </div>
          </div>
          <div className="device-stripe"></div>
        <div className="device-header">
          <div className="device-sensors"></div>
        </div>
        <div className="device-btns"></div>
        <div className="device-power"></div>  
        </div>
              
      )
    }
  }
  export default CaverPage