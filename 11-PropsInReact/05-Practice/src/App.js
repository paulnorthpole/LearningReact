import React from 'react';
import ContactCard from './ContactCard'

function App () {
  return  (
    <div className='contacts'>
      <ContactCard
        contact={{
          name: "paul",
          city: "goshen"
        }}
      />

      <ContactCard
        contact={{
          name: "Fawn",
          city: "Fremont"
        }}
      />
    </div>
  )
}

export default App