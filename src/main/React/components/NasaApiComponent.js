// src/React/component/NasaApiComponent.js

import React, { useState, useEffect } from 'react';
import './NasaApiComponent.css'; // Import CSS file for styling
import useNASAStore from '../store/NASAStore';

const NasaApiComponent = () => {
  const [date, setDate] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [count, setCount] = useState(0);
  const { data, loading, error, fetchData } = useNASAStore();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    fetchData(date, startDate, endDate, count); // Pass parameters to fetchData function
  };

  const handleClear = () => {
    setDate('');
    setStartDate('');
    setEndDate('');
    setCount(0);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="container">
    <h1>NasaApi</h1>
    <form onSubmit={handleFormSubmit}>
      <div className="center">
        <label htmlFor="date">Select Date:</label>
        <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <div className="center">
        <label htmlFor="startDate">From Date:</label>
        <input type="date" id="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      </div>
      <div className="center">
        <label htmlFor="endDate">To Date:</label>
        <input type="date" id="endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      </div>
      <div className="center">
        <label htmlFor="count">Count:</label>
        <input type="number" id="count" value={count} onChange={(e) => setCount(e.target.value)} />
      </div>
      <div className="center">
        <button type="submit">Fetch Data</button>
        <button type="button" onClick={handleClear}>Clear</button>
      </div>
    </form>

    <ul>
      {data && data.map((item, index) => (
        <li key={index}>
          <h2>{item.title}</h2>
          <p>Date: {item.date}</p>
          <p>Explanation: {item.explanation}</p>
          <img src={item.url} alt={item.title} style={{ maxWidth: '100%' }} />
        </li>
      ))}
    </ul>
  </div>
);
};

export default NasaApiComponent;
