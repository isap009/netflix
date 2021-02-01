import React, { useState,useEffect } from 'react'
import axios from "./axios"
import "./Row.css";
import Youtube from "react-youtube"
import movieTrailer from "movie-trailer"
const baseURL="https://image.tmdb.org/t/p/original/";
function Row({title,fetchURL,isLargeRow}) {
    const [movies, setMovies] = useState([])
    const [trailerURL, setTrailerURL] = useState("")
     useEffect(() => {
       async function fetchData(){
           const request=await axios.get(fetchURL)
        //    console.log(request)
           setMovies(request.data.results)
           return request
       }
       fetchData()
      
    }, [fetchURL])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      const handleClick=(movie)=>{
          
          if(trailerURL){
              setTrailerURL("")
          }
          else{
              movieTrailer(movie?.name || "")
              .then((url)=>{
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerURL(urlParams.get('v'));
                console.log(urlParams)
              })
              .catch(err=>console.log(err))
          }
      };
    return (
        <div className="row">
            <h1>{title}</h1>
            <div className={`row_posters ${isLargeRow && "row_poster_large"}`}>
                {movies.map(movie=>(
                    <img className="row-poster" onClick={()=>{handleClick(movie)}} src={`${baseURL}${isLargeRow ?  movie.poster_path : movie.backdrop_path}`} alt={movie.name}></img>
                ))}
            </div>
         {trailerURL &&   <Youtube videoId={trailerURL} opts={opts}></Youtube>}
        </div>
    )
}

export default Row
