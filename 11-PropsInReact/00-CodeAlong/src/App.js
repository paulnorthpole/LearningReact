import React       from "react";
import ContactCard from './ContactCard';

function App () {
  return (
    <div className='contacts'>
      <ContactCard
        contact={ {
          name:   "MrWilkerson",
          imgurl: 'http://placekitten.com/300/200',
          phone:  '(555) 574-8847',
          email:  'Wilkerson@catnap.meow'
        } }
      />

      <ContactCard
        contact={ {
          name:   'FluffyKins',
          imgurl: 'http://placekitten.com/400/200',
          phone:  '(555) 574-6645',
          email:  'Fluffy@me.com'
        } }
      />
      <ContactCard
        contact={ {
          name:   'Destroyer',
          imgurl: 'http://placekitten.com/400/300',
          phone:  '(555) 574-3465',
          email:  'Dis@google.com'
        } }
      />
      <ContactCard
        contact={ {
          name:   'Felix',
          imgurl: 'http://placekitten.com/200/100',
          phone:  '(555) 832-9985',
          email:  'Felix@YourHouse.hide'
        } }
      />
    </div>
  );
}

export default App;
