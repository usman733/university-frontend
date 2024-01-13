import React, { useState } from 'react';
import UniversityList from './UniversityiesList';
import './App.css';

function App() {

  const [country, setCountry] = useState('');

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <div className="App">
      <h1>List of Universities</h1>
      <label htmlFor="country">Enter Country Name: </label>
      <input type="text" id="country" value={country} onChange={handleCountryChange} />
      {country && <UniversityList country={country} />}
    </div>
  );
}

export default App;
