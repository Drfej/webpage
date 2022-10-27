import React from 'react';
import img4 from '../Zuri-logo.png';
import img5 from '../I4G.png';


//A footer container containing the zuri websites.
function Container() {
  return (
    <footer className='Content'>
        <div className='Content-line'></div>
        
        <div className='Content-info'>
            <div className='Zuri-img'><img src={img4} alt=''/></div>
            <span>HNG Internship 9 Frontend Task</span>
            <div className='Zuri-icon'><img src={img5} alt=''/></div>
        </div>
    </footer>
  )
}

export default Container
