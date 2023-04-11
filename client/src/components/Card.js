import React from 'react'
import { useState } from 'react'
import './Card.css'
import { Link } from 'react-router-dom'
import more from './more.png'


const Card = (props) =>  {


  return (
      <div className="Card">
          <Link to={'/edit/'+ props.id}><img className="moreButton" alt="edit button" src = {more}/></Link>
          <h2 className="name">{props.name}</h2>
          <h3 className="speed">{"Speed: " + props.speed}</h3>
          <p className="candy">{"Favorite candy: " + props.candy}</p>

      </div>
  );
};

export default Card;