
import React from 'react';
import img from "./icode.png"
import vision from "./homeLogo.png"
import './Header.css'; 
import AddEmpForm from './AddEmployeeForm';

import { Link } from 'react-router-dom';


function Home() {
  

  return (
    <div className="App">
      <header className="header">
        <div>
         <img src={vision} className='vision'></img>
          <img src={img} className='icode'></img>
        </div>
        
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <AddEmpForm className="addForm" />
        <Link to="/nextPage" ><button className="cta-button">Next..</button></Link>
        

 
        
      
      </main>
    </div>
  );
}

export default Home;
