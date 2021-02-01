import axios from './axios'
import React, { useEffect, useState } from 'react'
import request from "./api"
import "./Banner.css";
const baseURL="https://image.tmdb.org/t/p/original/";
function Banner() {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        async function fetchData(){
            const result=await axios.get(request.fetchNetflixOriginals)
            setMovies(result.data.results[Math.floor(Math.random(result.data.results.length -1)*10)])
            console.table(Math.ceil(Math.random(result.data.results.length - 1)))
            console.log(Math.random(result.data.results.length - 1))
        }
        fetchData()

    }, [])
    function truncate(str,n){
        return str?.length > n ? str.substr(0,n-1) +" ..." : str;
    }
    return (
        
            <header className="banner"
            style={{
                backgroundSize:"cover",
                backgroundImage:`url(https://image.tmdb.org/t/p/original/${movies?.backdrop_path})`,
                backgroundPosition:"center center",
                
                }}>
            <div className="banner_contents">
                
            <h1 className="banner_title">{movies.name}</h1>

                
            <div className="banner_buttons">
            <button className="banner_button">Play</button>
            <button className="banner_button">My List</button>
            </div>
            <div className="banner_description">
                <h1>{truncate(movies?.overview,150)}</h1>
            </div>
            </div>
            {/* <img src={ `${baseURL}${movies.poster_path}`}></img> */}
            </header>
        
    )
}
export default Banner
