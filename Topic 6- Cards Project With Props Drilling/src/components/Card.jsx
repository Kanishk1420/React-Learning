import React from 'react'
import '../index.css'
import {Bookmark} from 'lucide-react'

const Card = () => {
  return (
    <div>
      <div className='card'>
       <div>
         <div className='top'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg" alt="Amazon"/>
          <button>Save <Bookmark size={14}/></button>
        </div>
          <div className='center'>
            <h3>Amazon <span>5 days ago</span></h3>
            <h2>Senior UI/UX Designer</h2>
            <div className="tag">
              <h4>Part Time</h4>
              <h4>Senior Level</h4>
            </div>
          </div>
       </div>
          <div className='bottom'>
            <div>
                <h3>$120/hr</h3>
                <p>Mumbai, India</p>
            </div>
            <button>Apply Now</button>
          </div>
      </div>
    </div>
  )
}

export default Card
