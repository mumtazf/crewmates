import React from 'react';
import { Link } from 'react-router-dom'

const SideNav = () => (
  <div className="sidenavi">
    <h1>Adventure Buddy!</h1>
    <Link to = "/"> <button> Home 🏠 </button></Link>
    <Link to="/gallery"><button> Buddy Gallery 🖼️ </button></Link>
    <Link to="/new"><button> Create a new adventure buddy! 🆕 </button></Link>
  </div>
);

export default SideNav;