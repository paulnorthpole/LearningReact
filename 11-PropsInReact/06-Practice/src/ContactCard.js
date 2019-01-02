import React from 'react'

function ContactCard (props) {
  return  (
    <div className='contact'>
      <h1>{props.contact.name}</h1>
      <p>{props.contact.city}</p>
    </div>
  )
}

export default ContactCard