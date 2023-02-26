import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}
class SinglPage extends Component {

  componentDidMount() {
    // const { id } = this.props.match.params;
    // this.fetchData(id);
    // const { id } = this.props.match.params;
    {console.log("одна страницв", this.props.params.id)}

}
    render() {
      const { songs, isLoading } = this.props
      console.log(songs)
      const singls =  songs.filter(songs => songs.id === this.props.params.id);
      console.log(singls)
      const outSing = singls.map((sing) => {
        return (
          <div  >
            <p>{sing.name} </p>
          <button onClick={()=>(console.log("uss"))}>HHH</button>
          <audio controls 
              src={sing.audio1} type="audio/mpeg" />
          </div>
          
        )
        
      })
      // const { id } = this.props.params.id;
      // const { id } = this.id;
        // const singls = this.props.songs.filter(song => song.name === this.props.selId)
      return (
        <div>
          <h1>singlPage № {this.props.params.id} </h1>
          {outSing}
          <span><Link to="/cavers">cavers</Link></span>
          
        </div>
      )
    }
  }
  export default withParams(SinglPage);