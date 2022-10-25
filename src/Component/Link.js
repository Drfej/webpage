import React from 'react'

// The Link section that covers the different buttons with different id.
function Link() {
  return (
    <section className='Link-section'>
        <a href='https://training.zuri.team' target="_blank" rel="noreferrer"><button>btn__zuri</button></a>
        <a href='http://books.zuri.team' target="_blank" rel="noreferrer"><button>books</button></a>
        <a href='https://books.zuri.team/' target="_blank" rel="noreferrer"><button>book__python</button></a>
        <a href='https://background.zuri.team' target="_blank" rel="noreferrer"><button>pitch</button></a>
        <a href='https://books.zuri.team/design-rules' target="_blank" rel="noreferrer"><button>book__design</button></a>
    </section>
  )
}

export default Link
