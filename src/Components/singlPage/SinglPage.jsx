import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import {audioSource, tzitata} from "../Utils/singContent"
import {videoSource} from "../Utils/singContent"
import classes from "./singlPage.module.css"
import "../UI/Mobile.css"
// import {playList} from "../Utils/singContent"
function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}
class SinglPage extends Component {

  // componentDidMount() {
    // const { id } = this.props.match.params;
    // this.fetchData(id);
    // const { id } = this.props.match.params;
    // {console.log("одна страницв", this.props.params.id)}

// }
    render() {
      const { songs} = this.props
      // console.log(songs)
      const singls =  songs.filter(songs => songs.id === this.props.params.id);
      // console.log(singls)
      const outSing = singls.map((song) => {
        return (
          <div className={classes.mediaSong} key={song.id}>
          <img className={classes.mediaImage_modal} src={song.photo} width={80} alt={song.name} />
          <div className={classes.headerSong}>
            <p>{song.name}</p></div>
          <a className={[classes.linkTo, song.linkTo ? '' : classes.mediaHidden].join(' ')} href={song.linkTo} target="_blank" rel="noopener noreferrer"> Канал исполнителя </a>
          <div className=
            {
              classes.audioBlock
            }>
            {audioSource(song.audio1, song.audio_name1)}
            {audioSource(song.audio2, song.audio_name2)}
            {audioSource(song.audio3, song.audio_name3)}
            {audioSource(song.rezAudio2, song.rezAudio1)}
          </div>
          <div className=
            {
              classes.videoBlock
            }>
            {videoSource(song.video1, song.video_name1)}
            {videoSource(song.video2, song.video_name2)}
            {videoSource(song.video3, song.video_name3)}
          </div>
          {tzitata(song.picture)}  
          <Link to="/cavers"><button className={classes.bTnSing}>Назад</button></Link>                    
        </div>
          
        )
        
      })
      // const { id } = this.props.params.id;
      // const { id } = this.id;
        // const singls = this.props.songs.filter(song => song.name === this.props.selId)
      return (
        <>
          <div className="device device-iphone-x">
            <div className="device-frame">
              <div className="device-content">
                {outSing}
                
              </div>
            </div>
          </div>
          <div className="device-stripe"></div>
        <div className="device-header">
          <div className="device-sensors"></div>
        </div>
        <div className="device-btns"></div>
        <div className="device-power"></div>  
        </>
        //  <div>
        //   <h1>singlPage № {this.props.params.id} </h1>
          
        // </div>
        
      )
    }
  }
  export default withParams(SinglPage);