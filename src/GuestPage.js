import React, { useState } from 'react';

const GuestPage = () => {
  const [guestData, setGuestData] = useState('Welcome, guest!');

  const handleGuestAction = () => {
    setGuestData('You have interacted with the page!');
  };

  return (
    <div className="guest-page">
      <h2>Guest Page</h2>
      <p>{guestData}</p>
      <button onClick={handleGuestAction}>Interact</button>
    </div>
  );
};

export default GuestPage;