import React       from 'react';
import ContactCard from './ContactCard';

function App () {
  return (
    <div className='contacts'>
      <ContactCard
        contact={ {
          name:  'Paul',
          city:  'North Pole',
          state: 'Alaska'
        } }
      />

      <ContactCard
        contact={ {
          name:  'Fawn',
          city:  'Fremont',
          state: 'Ohio'
        } }
      />
    </div>
  );
}

export default App;