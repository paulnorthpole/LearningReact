import React from 'react'

function ContactCard (props) {
  return (
  <div className='contact-card'>
    <h1>{props.contact.name}</h1>
    <h3>{props.contact.city}</h3>
    <p>{props.contact.state}</p>
  </div>
  )
}

export default ContactCard