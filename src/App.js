import React, { Component, Fragment } from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from './Components/HomePage/HomePage';
import CaverPage from './Components/CaverPage/CaverPage';
import Papa from "papaparse";
import SinglPage from './Components/singlPage/SinglPage';
// import Loader from './Components/Loader/Loader';
function Notfound() {
  return (
    <div>
      <h2>404 ресурс не найден!</h2>
    </div>
  );
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      songs: [],
      songsEror: "",
      isLoading: false
    }
    this.updateData = this.updateData.bind(this);

  }
  fetchData = () => {
    // this.setState({ isLoading: true });
    Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vRdRsGjcKM2QQe9uQkh3Xy82BN-KbN7I9x-N8YBEmzW-OmGswsJjHQxvAa67f6XxZWEZEbjL32D9gHE/pub?output=csv",
      {
        download: true,
        header: true,
        worker: true,
        skipEmptyLines: true,
        complete: this.updateData,
        // complete: function(results) { 
        //   return (
        //     this.setState({ ...this.state, songs: results.data })
        //   )
          
        // }.bind(this),
        error: (error) => {
          console.error(error);
          // this.setState({songsEror: error.message})
          // this.setState({ isLoading: true });
        }

      }
    );
  }
    updateData = (result) => {
      
      if(!result) {
        return null
      }
      const data = result.data
      // console.log(this.data);
      this.setState({ ...this.state, songs: data });
    }
  
    componentDidMount() {
    this.fetchData();
  }
  render() {
    const { songs, isLoading } = this.state
    // if (isLoading) {
    //   return <Loader/>
    // }
    // isLoading ? <Loader/> : ""
    if (songs.length === 0) {
      return  null
    }
    // console.log(songs);
    return (
      <Fragment>
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/cavers" element={<CaverPage songs={songs} isLoading={isLoading} />} />
            <Route path="/cavers/:id" element={<SinglPage songs = {songs} />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </Router>
      </Fragment>
    );
  }
}

export default App;
