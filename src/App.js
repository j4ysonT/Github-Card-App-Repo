import React, { useState } from 'react';
import Form from './components/Form';
import CardList from './components/CardList';
import './App.css';

const App = ({ title }) => {
  const [profiles, setProfiles] = useState([]);

  const addNewProfile = profileData => {
    setProfiles(prevProfiles => [...prevProfiles, profileData]);
  };

  return (
    <div>
      <div className="header">{title}</div>
      <Form onSubmit={addNewProfile} />
      <CardList profiles={profiles} />
    </div>
  );
};

export default App;
