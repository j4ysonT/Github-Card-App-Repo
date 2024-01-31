import React, { useState } from 'react';
import axios from 'axios';

const Form = ({ onSubmit }) => {
  const [userName, setUserName] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const resp = await axios.get(`https://api.github.com/users/${userName}`);
      
      if (resp.data.message && resp.data.message === 'Not Found') {
        // User not found, display an error message
        setError(`User "${userName}" not found on GitHub.`);
      } else {
        // User found, clear any previous error and submit data
        setError(null);
        onSubmit(resp.data);
      }
      
      setUserName('');
    } catch (error) {
      console.error('Error fetching user data', error);
      setError('Error fetching user data. Please try again.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
          placeholder=" Enter GitHub username"
          required
        />
        <button>Add card</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Form;
