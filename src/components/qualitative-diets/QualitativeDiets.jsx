import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DynamicDropdown from '../inputs/SearchSelect';
import './styles.css';

const qualitativeDietsOptions = [
  { key: '1', value: 'anemia', text: 'Anemia' },
  { key: '2', value: 'constipation', text: 'Constipation' },
  { key: '3', value: 'diarrhea', text: 'Diarrhea' },
  { key: '4', value: 'diabetes', text: 'Diabetes' },
  { key: '5', value: 'gerd', text: 'GERD' },
  { key: '6', value: 'heartHealthyList', text: 'Heart Healthy List' },
  { key: '7', value: 'hypertension', text: 'Hypertension' },
];

function QualitativeDiets() {
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();

  const handleOptionChange = (e, { value }) => {
    setSelectedOption(value);
    navigate(`/${value}`);
  };

  
  const styleLink = document.createElement("link");
  styleLink.rel = "stylesheet";
  styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
  document.head.appendChild(styleLink);


  return (
    <div className="p-5">
      <div className="qualitative-diets-container">
        <h2 className="title dark:text-white-bg">Select a Qualitative Diet</h2>
        <DynamicDropdown
          options={qualitativeDietsOptions}
          placeholder="Search diets..."
          onChange={handleOptionChange}
          value={selectedOption}
          aria-label="Qualitative Diets Selection"
        />
      </div>
    </div>
  );
}

export default QualitativeDiets;