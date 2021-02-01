import React, { useEffect, useState } from 'react'
import "./Nav.css";
function Nav({name}) {
    const [handleShow, setHandleShow] = useState(false)
    
    useEffect(()=>{
      
    
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                setHandleShow(true);
            }
            else setHandleShow(false);
        });
        return ()=>{
            window.removeEventListener("scroll");
        }
    },[])
    return (
        <div className={`nav ${handleShow && "nav-black" }`}>
            <img className="nav-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png" alt="Netflix Logo"></img>
            <p className="welcome"> Welcome {name} !</p>
            <img className="nav-avtar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Avtar"></img>
        </div>
    )
}

export default Nav
 