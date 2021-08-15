import React,{useState} from 'react';
import './App.css';
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';
import {Link} from 'react-router-dom';
function Header() {
	const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };
  const ch = () => {
  	setActive(true);
  }
  
  return (
    <>
        <div className="nav">
            <div className="navbar">
            <h2>My Blog</h2>
            <button onClick={handleToggle}>{isActive ? <MenuIcon /> : <ClearIcon />}</button>
            
        </div>
        <div className={isActive ? "app" : "container"}>
          <ul className="navlink">
             <li><Link to="/" onClick={ch}>Home</Link></li>
             <li><Link to="/About" onClick={ch}>About</Link></li>
             <li><Link to="/Section" onClick={ch}>Section</Link></li>
             <li><Link to="/Accordion" onClick={ch}>Accordion</Link></li>
             <li><Link to="/Contact" onClick={ch}>Contact Us</Link></li>
          </ul>
        </div>
        </div>
    </>
  );
}

export default Header;

 