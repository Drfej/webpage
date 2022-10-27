import React from 'react'
import img2 from '../Icon.png';
import img3 from '../slack.png';

//Social icons of Slack and Github with github having a link added to it
function Social() {
  return (
    <section2 className='Social-icon'>
        <div>
            <a href='https://app.slack.com/client/T042F7V19Q8/C041V6WKAUS' target = '_blank' rel = 'noreferrer'><img src={img3} alt=''/></a>
            <a href='https://github.com/Drfej/webpage' target='_blank' rel='noreferrer'><img src={img2} alt=''/></a>
        </div>

    </section2>  
  )
}

export default Social
