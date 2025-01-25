


import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';



function Navbar() {

    return(
        <nav className="flex-row  text-white  items-center justify-center bg-gray-900">
        <ul>
          <li className='float-left p-3'>
            <Link to="/">Home</Link>
          </li>
          <li className='p-3 float-left'>
            <Link to="/calculator">Calculator</Link>
          </li>
          <li className='p-3'>
            <Link to="/history">History</Link>
          </li>
          
        </ul>
      </nav>
    )
 }



export default Navbar;