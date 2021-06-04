import './App.css';
import {Route, Routes} from "react-router-dom";
import { Movie } from "./Components/Videos"
import { useEffect, useState } from 'react';
import axios from 'axios';
import {Player} from "./Reactplayer"
import {VideosPage} from "./VideosPage"
import {SideBarMenu} from './Components/Sidebar.js';
import {Navbar} from "./Components/Navbar"


const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"

export default function App() {
  const [movies, setMovies] = useState([]);
  
  // useEffect(() => {
  //   (async function () {
  //     try {
  //       const response = await axios.get(FEATURED_API)
  //       console.log(response);
  //       setMovies(response)
  //     }
  //     catch (e) {
  //       console.log("The error is ", e);
  //     }
  //   })();
  //   }, []);

  useEffect(() => {
        fetch(FEATURED_API)
        .then((res) => res.json())
        .then(data => {
          console.log(data);
          setMovies(data.results);
        });
    }, []);

  return (
    <div className="App" id="outer-container">
    <Navbar />
    <SideBarMenu pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
    <Routes>
        <Route path="/" element={<VideosPage />} />
        <Route path="/videos" element={<Player />} />

      </Routes>
    </div>
  );
}


