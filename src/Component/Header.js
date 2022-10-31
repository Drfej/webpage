import React from 'react'
import img1 from '../profile__img.png';
import logo from '../Button.jpg';
import icon2 from '../Share.jpg';


// My profile section that covers the profile image and twitter id
function Header() {
  return (
    <main>
      <div className='image'>
        <img src={logo} alt=""/>
      </div>
      <div className='shareButton'><img src={icon2} alt=""/></div>

      <div className='Profile'>
        <img src={img1} alt="" id='profile__img'/>
        <h2>James Funsho</h2>
      </div>

      <div className='slackName' id='slack'><p>Fej</p></div>

    </main>
  )
}

export default Header
