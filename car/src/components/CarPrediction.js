import React, { useState } from 'react';
import axios from 'axios';

const CarPrediction = () => {
  const [carModel, setCarModel] = useState('');
  const [carCompany, setCarCompany] = useState('');
  const [year, setYear] = useState('');
  const [kmDriven, setKmDriven] = useState('');
  const [fuelType, setFuelType] = useState('petrol');
  const [predictedPrice, setPredictedPrice] = useState(null);

  const handlePrediction = async () => {
    try {
      const response = await axios.post('http://localhost:5000/predict', {
        carModel,
        carCompany,
        year,
        kmDriven,
        fuelType,
      });
      setPredictedPrice(response.data.price);
    } catch (error) {
      alert('Prediction failed! Please try again.');
    }
  };

  return (
    <div className="prediction-page">
      <h2>Predict Car Price</h2>
      <form>
        <input
          type="text"
          placeholder="Car Model"
          value={carModel}
          onChange={(e) => setCarModel(e.target.value)}
        />
        <input
          type="text"
          placeholder="Car Company"
          value={carCompany}
          onChange={(e) => setCarCompany(e.target.value)}
        />
        <input
          type="number"
          placeholder="Year of Manufacture"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <input
          type="number"
          placeholder="Kilometers Driven"
          value={kmDriven}
          onChange={(e) => setKmDriven(e.target.value)}
        />
        <select value={fuelType} onChange={(e) => setFuelType(e.target.value)}>
          <option value="electric">Electric</option>
          <option value="petrol">Petrol</option>
          <option value="diesel">Diesel</option>
          <option value="cng">CNG</option>
        </select>
        <button type="button" onClick={handlePrediction}>
          Predict Price
        </button>
      </form>
      {predictedPrice && (
        <div className="price-result">
          <h3>Predicted Price: ₹{predictedPrice}</h3>
        </div>
      )}
    </div>
  );
};

export default CarPrediction;
