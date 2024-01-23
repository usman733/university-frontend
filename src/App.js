import React, { useState } from 'react';
import UniversityList from './UniversityiesList';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
function App() {

  const [country, setCountry] = useState('');
  const [province, setProvince] = useState('');

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleProvinceChange = (event) => {
    setProvince(event.target.value);
  };

  return (
    <div className="App">
      <h1>List of Universities</h1>
      <label htmlFor="country">Enter Country Name: </label>
      <input type="text" id="country" value={country} onChange={handleCountryChange} />
      <div>
        <label htmlFor="country">Enter State/Province Name: </label>
        <input type="text" id="province" value={province} onChange={handleProvinceChange} />
      </div>
      <UniversityList country={country} province={province} />
      <ToastContainer />
    </div>
  );
}

export default App;
