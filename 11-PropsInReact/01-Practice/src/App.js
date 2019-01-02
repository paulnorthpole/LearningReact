import React       from 'react';
import ContactCard from './ContactCard';

function App () {
  return (
    <div className='contacts'>
      <ContactCard
        contact={ {
          name:    'Paul',
          address: 'North Pole',
          state:   'Alaska'
        } }
      />

      <ContactCard
        contact={ {
          name:    'Fawn',
          address: 'North Pole',
          state:   'Alaska'
        } }
      />
    </div>
  );
}

export default App;