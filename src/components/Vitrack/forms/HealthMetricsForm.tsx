import React, { useState } from 'react';
import { handleBloodPressure, BP_THRESHOLDS, getWarnings } from '../conditions';
import { symptomsList } from '../data';
import './styles.css';



const HealthMonitor = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    systolicBP: '',
    diastolicBP: '',
    heartRate: '',
    symptoms: [],
  });

  // State to hold warnings
  const [warnings, setWarnings] = useState([]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle symptom selection
  const handleSymptomChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        symptoms: [...formData.symptoms, value],
      });
    } else {
      setFormData({
        ...formData,
        symptoms: formData.symptoms.filter((symptom) => symptom !== value),
      });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const messages = [];

    const addMessage = (text, color) => messages.push({ text, color });

    const hasSymptoms = (symptomsArray) =>
      symptomsArray.some((symptom) => formData.symptoms.includes(symptom));

    handleBloodPressure(
      formData.systolicBP,
      formData.diastolicBP,
      addMessage,
      hasSymptoms,
      formData.heartRate
    );

    setWarnings(messages);
  };

  return (
    <div className="health-monitor">
      <h2>Health Monitoring</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Systolic BP (mmHg):</label>
          <input
            type="number"
            name="systolicBP"
            value={formData.systolicBP}
            onChange={handleInputChange}
            placeholder="Enter systolic BP"
          />
        </div>
        <div>
          <label>Diastolic BP (mmHg):</label>
          <input
            type="number"
            name="diastolicBP"
            value={formData.diastolicBP}
            onChange={handleInputChange}
            placeholder="Enter diastolic BP"
          />
        </div>
        {/* <div>
          <label>Heart Rate (bpm):</label>
          <input
            type="number"
            name="heartRate"
            value={formData.heartRate}
            onChange={handleInputChange}
            placeholder="Enter heart rate"
          />
        </div> */}
        {/* <div>
          <label>Symptoms:</label>
          {symptomsList.map((symptom) => (
            <div key={symptom}>
              <label>
                <input
                  type="checkbox"
                  value={symptom}
                  checked={formData.symptoms.includes(symptom)}
                  onChange={handleSymptomChange}
                />
                {symptom}
              </label>
            </div>
          ))}
        </div> */}
        <button type="submit">Check Health</button>
      </form>

      <div className="warnings">
        <h3>Warnings:</h3>
        {warnings.length > 0 ? (
          warnings.map((warning, index) => (
            <div key={index} className={`warning ${warning.color}`}>
              <p>{warning.text}</p>
            </div>
          ))
        ) : (
          <p>No warnings to display. Your health metrics are within normal ranges.</p>
        )}
      </div>
    </div>
  );
};

export default HealthMonitor;