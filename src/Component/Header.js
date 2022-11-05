import React from 'react'
import img1 from '../profile__img.png';
import logo from '../Button.jpg';
import icon2 from '../Share.jpg';
import img2 from '../Icon.png';
import img3 from '../slack.png';
import { Link } from 'react-router-dom';


// My profile section that covers the profile image and twitter id
function Header() {
  return (
    <div className='profile-page'>
      <main className='main'>
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

      <section className='Link-section'>
        <a href='http://twitter.com/jamesfunsho3' target="_blank" rel="noreferrer" id='twitter'><button>Twitter Link</button></a>
        <a href='https://training.zuri.team' target="_blank" rel="noreferrer" id='btn__zuri'><button>Zuri Team</button></a>
        <a href='http://books.zuri.team' target="_blank" rel="noreferrer" id='books'><button>Zuri Books</button></a>
        <a href='https://books.zuri.team/python-for-beginners?ref_id=<Fej>' target="_blank" rel="noreferrer" id='book__python'><button>Python Books</button></a>
        <a href='https://background.zuri.team' target="_blank" rel="noreferrer" id='pitch'><button>Background Checks for Coders</button></a>
        <a href='https://books.zuri.team/design-rules' target="_blank" rel="noreferrer" id='book__design'><button>Design Books</button></a>
        <Link to="/contact"><button>Contact me</button></Link>        
      </section>

      <section2 className='Social-icon'>
          <div>
              <a href='https://app.slack.com/client/T042F7V19Q8/C041V6WKAUS' target = '_blank' rel = 'noreferrer'><img src={img3} alt=''/></a>
              <a href='https://github.com/Drfej/webpage' target='_blank' rel='noreferrer'><img src={img2} alt=''/></a>
          </div>

      </section2>  
    </div>
    
  )
}

export default Header
