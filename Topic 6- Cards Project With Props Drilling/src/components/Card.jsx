import React from 'react'
import '../index.css'
import {Bookmark} from 'lucide-react'

const Card = (props) => {
  return (
    <div>
      <div className='card'>
       <div>
         <div className='top'>
          <img src={props.brand} alt={props.companyname}/>
          <button>Save<Bookmark size={14}/></button>
        </div>
          <div className='center'>
            <h3>{props.companyname}<span>5 days ago</span></h3>
            <h2>{props.post}</h2>
            <div className="tag">
              <h4>{props.tag1}</h4>
              <h4>{props.tag2}</h4>
            </div>
          </div>
       </div>
          <div className='bottom'>
            <div>
                <h3>{props.pay}</h3>
                <p>{props.location}</p>
            </div>
            <button>Apply Now</button>
          </div>
      </div>
    </div>
  )
}

export default Card
