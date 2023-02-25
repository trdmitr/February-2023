import React, { Component, Fragment } from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from './Components/HomePage/HomePage';
import CaverPage from './Components/CaverPage/CaverPage';
import Papa from "papaparse";
import SinglPage from './Components/singlPage/SinglPage';
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
    this.setState({ isLoading: true });
    Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vRBQ847ey_0J68AbS-jSJD8LwtsxtFK3tbX5lSoNxhgqwKy6R9gz2ITVOJXzAT-IPkPoNIZBgPcrDC_/pub?output=csv",
      {
        download: true,
        header: true,
        worker: true,
        skipEmptyLines: true,
        complete: this.updateData,
        error: (error) => {
          console.error(error);
          this.setState(error)
        }
      }
    );
  }
    updateData = (result) => {
      // console.log(this.data);
      const data = result.data
      this.setState({ ...this.state, songs: data, isLoading: false });
      
    }
  
  componentDidMount() {
    this.fetchData();
  }
  render() {
    const { songs, isLoading } = this.state
    if (songs.length === 0) {
      return  null
    }
    console.log(songs);
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
