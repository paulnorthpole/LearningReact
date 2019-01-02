import React from 'react'

function ContactCard (props) {
  return (
    <div className='contact'>
      <h3>{props.contact.name}</h3>
      <h4>{props.contact.city}</h4>
      <p>{props.contact.state}</p>
    </div>
  )
}

export default ContactCard