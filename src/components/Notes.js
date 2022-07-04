import React from 'react';

function Arrays() {
  const [thingsArray, setThingsArray] = React.useState(['Thing 1', 'Thing 2']);

  function addItem() {
    setThingsArray((prevThingsArray) => {
      return [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`];
    });
  }

  const thingsElements = thingsArray.map((thing) => <p>{thing}</p>);

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      {thingsElements}
    </div>
  );
}

function Objects() {
  const [contact, setContact] = React.useState({
    firstName: 'John',
    lastName: 'Doe',
    phone: '+1 (719) 555-1212',
    email: 'itsmyrealname@example.com',
    isFavorite: false,
  });

  let starIcon = contact.isFavorite
    ? './images/.......png'
    : './images/.......2.png';
  function toggleFavorite() {
    setContact((prevContact) => {
      return {
        ...prevContact,
        isFavorite: !prevContact.isFavorite,
      };
    });
  }

  return (
    <main>
      <img src={starIcon} onClick={toggleFavorite} />
    </main>
  );
}
