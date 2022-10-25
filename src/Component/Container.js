import React from 'react';
import img4 from '../Zuri-logo.png';
import img5 from '../I4G.png';


//A footer container containing the zuri websites.
function Container() {
  return (
    <footer className='Content'>
        <div className='Content-line'></div>
        
        <div className='Content-info'>
            <img src={img4} alt=''/>
            <span>HNG Internship 9 Frontend Task</span>
            <img src={img5} alt=''/>
        </div>
    </footer>
  )
}

export default Container
