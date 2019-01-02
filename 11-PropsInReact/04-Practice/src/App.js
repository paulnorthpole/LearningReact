import React from 'react'
import ContactCard from './ContactCard'

function App () {
  return (
    <div className='contacts'>
      <ContactCard
        contact={{
          name: "Paul",
          city: "Goshen",
          state: "IN"
        }}
      />

      <ContactCard
        contact={{
          name: "Fawn",
          city: "Fremont",
          state: "OH"
        }}
      />
    </div>
  )
}

export default App