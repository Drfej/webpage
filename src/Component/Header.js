import React from 'react'
import img1 from '../profile__img.png';
import logo from '../Button.jpg';


// My profile section that covers the profile image and twitter id
function Header() {
  return (
    <main>
      <div className='image'>
        <img src={logo} alt=""/>
      </div>

      <div className='Profile'>
        <img src={img1} alt=""/>
        <h2>Jamesfunsho3</h2>
      </div>

    </main>
  )
}

export default Header
