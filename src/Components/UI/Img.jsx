import React from 'react'
import Loader from "../Loader/Loader";
import { useEffect, useState  } from "react"
export default class Img extends React.Component{

   constructor(props) {
    super(props);
    this.state = { 
    url: ""
	};
    
  }
 componentDidMount() { 
  const app = async () => {
    
     fetch(this.props.imgUrl)
     .then(function (response) {
      if (response.status !== 200) {
        return Promise.reject(new Error(response.statusText))
      }
      return Promise.resolve(response)
      
    })
    .then(response =>  response.blob())
    .then((image) => {
      this.setState({url: URL.createObjectURL(image)});     
     });
     if (!this.state.imgUrl){
             return (
          setTimeout(() =>
            <Loader />, 5000)
        ) }
  }
  app()
}
    render() {
    //   if (!this.state.url) {
    //     return (
    //       setTimeout(() =>
    //         <Loader />, 1000)
    //     )
    //   }
  // console.log(this.state.url)
	return <img src = {this.state.url} alt={this.props.imgAlt}/>;
	}   
}
