import React from 'react'

function ContactCard (props) {
  return (
    <div className='contact'>
      <h1>{props.contact.name}</h1>
      <h2>{props.contact.city}</h2>
      <h3>{props.contact.state}</h3>
    </div>
  )
}

export default ContactCard