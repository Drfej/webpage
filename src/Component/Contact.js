import React from 'react'

const Contact = () => {

  return (
    <div className='contact-1'>
      <div className='con-1'>
        <h1>Contact me</h1>
        <h3>Hi there, contact me to ask me about anything you have in mind.</h3>
      </div>

      <form className='contact-info1'>
        <div className='user-name'>
          <div className='user-name2'>
            <div className='user-first'>
              <label><strong>First name</strong></label>
              <input type='text' placeholder='Enter your first name' 
              id = 'first_name' name='first-name' required/>
              
            </div>

            <div className='user-last'>
              <label><strong>Last name</strong></label>
              <input type='text' placeholder='Enter your last name' 
              id = 'last_name' name='last-name' required/>
            </div>
          </div>
        </div>

        <div className='user-mail'>
          <label><strong>Email</strong></label>
          <input type='email' placeholder='yourname@email.com' 
          id = 'email' name='email' required/>
        </div>

        <div className='message'>
          <label><strong>Message</strong></label>
          <textarea id='message' placeholder='Send me a message and I will reply you as soon as possible...' 
          name='message' required/>
        </div>

        <div className='checkBox'>
          <div className='check'>
            <input type='checkbox' />
            <label>You agree to providing your data to the people who may contact you</label>
          </div>
        </div>

        <button id='btn__submit' type='submit' className='btn' required><strong>Send message</strong></button>
        
      </form>

    </div>
  )
}

export default Contact
