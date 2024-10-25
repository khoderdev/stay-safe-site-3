import { useState, useEffect } from 'react';

const useScreeningMessages = ({ age, gender, smoker, packsPerDay, yearsSmoked }) => {
  const [monthlyScreening, setMonthlyScreening] = useState([]);
  const [yearlyScreening, setYearlyScreening] = useState([]);
  const [onceAYear, setOnceAYear] = useState([]);
  const [otherScreening, setOtherScreening] = useState([]);

  useEffect(() => {
    const determineScreeningMessages = () => {
      const ageNum = parseInt(age, 10);
      const monthlyMessages = [];
      const yearlyMessages = [];
      const onceAYearMessages = [];
      const otherMessages = [];

      if (isNaN(ageNum) || !gender) return;

      // Early return for age 76 and above
      if (ageNum >= 76) {
        otherMessages.push(`Recommendations are only applicable to adults aged between 20 to 75`);
        setMonthlyScreening(monthlyMessages);
        setYearlyScreening(yearlyMessages);
        setOnceAYear(onceAYearMessages);
        setOtherScreening(otherMessages);
        return;
      }

      // General health screening recommendations
      monthlyMessages.push(`Skin Self-Exam`);
      yearlyMessages.push(`Complete Blood Count`, `Basic or Complete Metabolic Panel`, `Lipid Panel`, `Blood Pressure Screening`, `BMI, Height, Weight`, `Cardiovascular Evaluation`, `Comprehensive Physical Exam`, `Depression Screening`);

      // Add gender-specific exams
      if (gender === 'male') {
        monthlyMessages.push(`Testicular Self-Exam`);
        yearlyMessages.push(`Testicular Cancer Screening`);
      } else if (gender === 'female') {
        monthlyMessages.push(`Breast Self-Exam`);
      }

      // Age-based screenings
      if (ageNum >= 30 && ageNum <= 64 && gender === 'female') {
        otherMessages.push(`Every 5 Years Cervical Cancer Screening`);
      }
      if (ageNum >= 40 && ageNum <= 75 && gender === 'female') {
        onceAYearMessages.push(`Mammography`);
      }
      if (ageNum >= 40 && ageNum <= 75) {
        onceAYearMessages.push(`FIT Test for Colon Cancer Screening`);
        otherMessages.push(`Every 2-5 Years Full Body Skin Exam`, `Every 10 Years Colonoscopy (if normal results)`);
      }

      // Calculate pack years for screening recommendations
      const totalPackYears = parseFloat(packsPerDay) * parseFloat(yearsSmoked);

      if (ageNum >= 50 && ageNum <= 69) {
        otherMessages.push(`Every 10 Years Hearing Test`);
        yearlyMessages.push(`Prostate Cancer Screening: PSA and Physical Test`);
        if (smoker && totalPackYears >= 20) {
          onceAYearMessages.push(`Low-Dose Chest CT Scan Lung Cancer Screening`);
        }
      }

      if (ageNum >= 50 && ageNum <= 75 && gender === 'female') {
        otherMessages.push(`Every 5 Years DEXA Bone Scan (Osteoporosis Screening)`, `Every 5 Years Thyroid Panel`);
      }

      if (ageNum >= 50 && ageNum <= 75 && gender === 'male') {
        otherMessages.push(`Every 10 Years Cardiac Calcium Scoring`);
      }

      if (ageNum >= 65 && smoker && ageNum <= 75) {
        otherMessages.push(`Abdominal Aortic Aneurysm Screening (One-Time)`);
      }

      if (ageNum >= 60 && ageNum <= 75) {
        yearlyMessages.push(`Dementia & Alzheimer’s Screening`);
      }

      setMonthlyScreening(monthlyMessages);
      setYearlyScreening(yearlyMessages);
      setOnceAYear(onceAYearMessages);
      setOtherScreening(otherMessages);
    };

    determineScreeningMessages();
  }, [age, gender, smoker, packsPerDay, yearsSmoked]);

  return { monthlyScreening, yearlyScreening, onceAYear, otherScreening };
};

export default useScreeningMessages;
