import React from 'react'
import { RiBookmarkLine } from "react-icons/ri";

const Card = (props) => {
  return (
    <div>
      <div className="Child">
      <div className="top">
        <img src={props.brandLogo} alt="" id="img1" />
        <button id="button1">Save <RiBookmarkLine size={10} /></button>
      </div>
      <div className="center">
        <p id="p3">{props.company}<span>{props.datePosted}</span></p>
        <p id="p4">{props.post}</p>
      <div>
      <div className="box">
        <p id='p5'>{props.tag1}</p>
        <p id='p5'>{props.tag2}</p>
      </div>
      </div>
      <hr></hr>
      <div className="bottom">
        <div>
          <p id="p1">{props.pay}</p>
          <p id="p2">{props.location}</p>
        </div>
          <button id="button2">Apply Now</button>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Card
