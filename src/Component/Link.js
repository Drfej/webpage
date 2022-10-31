import React from 'react'

// The Link section that covers the different buttons with different id.
function Link() {
  return (
    <section className='Link-section'>
        <a href='http://twitter/jamesfunsho3' target="_blank" rel="noreferrer" id='twitter'><button>Twitter Link</button></a>
        <a href='https://training.zuri.team' target="_blank" rel="noreferrer" id='btn__zuri'><button>Zuri Team</button></a>
        <a href='http://books.zuri.team' target="_blank" rel="noreferrer" id='books'><button>Zuri Books</button></a>
        <a href='https://books.zuri.team/python-for-beginners?ref_id=<Fej>' target="_blank" rel="noreferrer" id='book__python'><button>Python Books</button></a>
        <a href='https://background.zuri.team' target="_blank" rel="noreferrer" id='pitch'><button>Background Checks for Coders</button></a>
        <a href='https://books.zuri.team/design-rules' target="_blank" rel="noreferrer" id='book__design'><button>Design Books</button></a>
    </section>
  )
}

export default Link
