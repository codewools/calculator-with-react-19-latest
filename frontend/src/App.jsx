import { useState ,useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Calculatorbody from './components/calculatorbody';
import History from './components/History';
import Home from './components/Home';
import Navbar from './navbar';
function App() {
 return(
  <div>
 <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculatorbody />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </div>
    </Router>
  </div>
 )
}

export default App