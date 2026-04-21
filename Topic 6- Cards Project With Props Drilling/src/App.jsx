import React from 'react'
import './index.css'
import {Bookmark} from 'lucide-react'
const App = () => {
  return (
    <div className='parent'>
      <div className='card'>
       <div>
         <div className='top'>
          <img src="https://pngimg.com/uploads/meta/meta_PNG12.png" alt="Meta"/>
          <button>Save <Bookmark size={10}/></button>
        </div>
          <div className='center'>
            <h3>Meta <span>5 days ago</span></h3>
            <h2>Ai Lead Engineer</h2>
            <div>
              <h4>Full Time</h4>
              <h4>Senior Level</h4>
            </div>
          </div>
       </div>
          <div className='bottom'>
            <div>
                <h3>70,000₹ per anum</h3>
                <p>Remote</p>
            </div>
            <button>Apply Now</button>
          </div>
      </div>
    </div>
  )
}

export default App
