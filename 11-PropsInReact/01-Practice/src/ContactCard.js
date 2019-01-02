import React from 'react'

function ContactCard (props) {
  return (
    <div className='contact-card'>
      <h3>{props.contact.name}</h3>
      <p>{props.contact.city}</p>
      <p>{props.contact.state}</p>
    </div>
  )
}

export default ContactCard