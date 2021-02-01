import React,{useState} from 'react'
import Row from './Row';
import request from "./api";
import Banner from './Banner';
import Payment from './Payment';
import "./App.css";
import Nav from './Nav';
import Login from './Login';
import { useSelector } from 'react-redux';
function App() {
  const [user, setUser] = useState("")

  const users = useSelector(state => state.users)
  
  return (
    <div className="app">
    
    {users ?
    (
      <>
              <Nav name={users}/>
      <Banner></Banner>
      <Row title="Netflix" fetchURL={request.fetchNetflixOriginals}></Row>
      <Row title="Trending now" fetchURL={request.fetchTrending} isLargeRow></Row>
      <Row title="Top Rated" fetchURL={request.fetchTopRated}></Row>
      <Row title="Romance Movies" fetchURL={request.fetchRomanceMovies}></Row>
      <Row title="Horror Movies" fetchURL={request.fetchHorrorMovies}></Row>
      <Row title="Documentries" fetchURL={request.fetchDocumentaries}></Row>
      <Row title="Comedy Movies" fetchURL={request.fetchComedyMovies}></Row>
      <Row title="Actions Movies" fetchURL={request.fetchActionMovies}></Row>
      </>
    ):
    (<Login/>)}
   
    

    
     
      
    
 
     
    </div>
  )
}

export default App
