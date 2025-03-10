import React, { useState } from 'react';

const AdminPage = () => {
  const [adminData, setAdminData] = useState('Admin dashboard initialized.');

  const handleAdminAction = () => {
    setAdminData('Admin data has been updated!');
  };

  return (
    <div className="admin-page">
      <h2>Admin Page</h2>
      <p>{adminData}</p>
      <button onClick={handleAdminAction}>Update Data</button>
    </div>
  );
};

export default AdminPage;

