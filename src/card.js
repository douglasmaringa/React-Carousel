import React from 'react'
import "./card.css"

function card({name,image}) {
  return (
    <div className="card">
  <img src={image} alt="John" style={{"width":"100%","height":"220px"}}/>
  <h1>{name}</h1>
  <p className="title">CEO & Founder, Example</p>
  <p>Harvard University</p>
  <a href="www.facebook.com"><i className="fa fa-dribbble"></i></a>
  <a href="www.facebook.com"><i className="fa fa-twitter"></i></a>
  <a href="www.facebook.com"><i className="fa fa-linkedin"></i></a>
  <a href="www.facebook.com"><i className="fa fa-facebook"></i></a>
  <p><button>Contact</button></p>
</div>
  )
}

export default card