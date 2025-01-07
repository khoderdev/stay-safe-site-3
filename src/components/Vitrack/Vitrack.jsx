import React, { useState } from 'react';
import { useAtom } from 'jotai';
import Stepper from './Stepper';
import PatientInfoForm from './forms/PatientInfoForm';
import HealthMetricsForm from './forms/HealthMetricsForm';
import ReviewResults from './ReviewSection';
import {
	bloodPressureSetsAtom,
	firstNameAtom,
	lastNameAtom,
	dateOfBirthAtom,
	genderAtom,
	nationalityAtom,
	countryAtom,
	addressAtom,
	healthConditionAtom,
	otherHealthConditionAtom,
	allergiesMedAtom,
	vitrackKitAtom,
	leftHandOxygenAtom,
	rightHandOxygenAtom,
	heartRateAtom,
	respiratoryRateAtom,
	temperatureAtom,
	painScaleAtom,
	symptomsAtom,
	specificAllergiesMedAtom,
	specificFoodAllergieAtom,
	hasFoodAllergieAtom,
} from '../../atoms/store';
import Symptoms from './forms/Symptoms';

const Vitrack = () => {
	const [currentStep, setCurrentStep] = useState(0);

	const [firstName, setFirstName] = useAtom(firstNameAtom);
	const [lastName, setLastName] = useAtom(lastNameAtom);
	const [dateOfBirth, setDateOfBirth] = useAtom(dateOfBirthAtom);
	const [gender, setGender] = useAtom(genderAtom);
	const [nationality, setNationality] = useAtom(nationalityAtom);
	const [country, setCountry] = useAtom(countryAtom);
	const [address, setAddress] = useAtom(addressAtom);
	const [healthCondition, setHealthCondition] = useAtom(healthConditionAtom);
	const [otherHealthCondition, setOtherHealthCondition] = useAtom(
		otherHealthConditionAtom
	);

	const [allergiesMed, setAllergiesMed] = useAtom(allergiesMedAtom);
	const [hasFoodAllergie, setHasFoodAllergie] = useAtom(hasFoodAllergieAtom);
	const [vitrackKit, setVitrackKit] = useAtom(vitrackKitAtom);
	const [bloodPressureSets, setBloodPressureSets] = useAtom(
		bloodPressureSetsAtom
	);
	const [leftHandOxygen, setLeftHandOxygen] = useAtom(leftHandOxygenAtom);
	const [rightHandOxygen, setRightHandOxygen] = useAtom(rightHandOxygenAtom);
	const [heartRate, setHeartRate] = useAtom(heartRateAtom);
	const [respiratoryRate, setRespiratoryRate] = useAtom(respiratoryRateAtom);
	const [temperature, setTemperature] = useAtom(temperatureAtom);
	const [painScale, setPainScale] = useAtom(painScaleAtom);
	const [symptoms, setSymptoms] = useAtom(symptomsAtom);
	const [specificAllergiesMed, setSpecificAllergiesMed] = useAtom(
		specificAllergiesMedAtom
	); // Added
	const [specificFoodAllergie, setSpecificFoodAllergie] = useAtom(
		specificFoodAllergieAtom
	); // Added

	// Update the handleChange function to handle blood pressure changes
	const handleChange = (e) => {
		const { name, value } = e.target;

		switch (name) {
			// Blood pressure logic
			case 'leftHandBloodPressureSystolic':
			case 'leftHandBloodPressureDiastolic':
			case 'rightHandBloodPressureSystolic':
			case 'rightHandBloodPressureDiastolic': {
				const updatedBloodPressureSets = [...bloodPressureSets];
				const isLeft = name.includes('leftHand');
				const handType = isLeft ? 'leftHand' : 'rightHand';
				const pressureType = name.includes('Systolic')
					? 'systolic'
					: 'diastolic';

				// Ensure we update the correct blood pressure set based on hand and pressure type
				updatedBloodPressureSets[0] = {
					...updatedBloodPressureSets[0],
					[handType]: {
						...updatedBloodPressureSets[0][handType],
						[pressureType]: value,
					},
				};

				setBloodPressureSets(updatedBloodPressureSets);
				break;
			}

			// Other form fields
			case 'firstName':
				setFirstName(value);
				break;
			case 'lastName':
				setLastName(value);
				break;
			case 'dateOfBirth':
				setDateOfBirth(value);
				break;
			case 'gender':
				setGender(value);
				break;
			case 'nationality':
				setNationality(value);
				break;
			case 'country':
				setCountry(value);
				break;
			case 'address':
				setAddress(value);
				break;
			case 'healthCondition':
				setHealthCondition(value);
				break;
			case 'otherHealthCondition':
				setOtherHealthCondition(value);
				break;

			case 'allergiesMed':
				setAllergiesMed(value);
				break;
			case 'hasFoodAllergie':
				setHasFoodAllergie(value);
				break;
			case 'vitrackKit':
				setVitrackKit(value);
				break;
			case 'leftHandOxygen':
				setLeftHandOxygen(value);
				break;
			case 'rightHandOxygen':
				setRightHandOxygen(value);
				break;
			case 'heartRate':
				setHeartRate(value);
				break;
			case 'respiratoryRate':
				setRespiratoryRate(value);
				break;
			case 'temperature':
				setTemperature(value);
				break;
			case 'painScale':
				setPainScale(value);
				break;
			case 'symptoms':
				setSymptoms(value);
				break;

			// Specific allergies/medications
			case 'specificAllergiesMed':
				setSpecificAllergiesMed(value);
				break;
			case 'specificFoodAllergie':
				setSpecificFoodAllergie(value);
				break;

			default:
				break;
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Submitted Data:', {
			firstName,
			lastName,
			dateOfBirth,
			gender,
			nationality,
			country,
			address,
			healthCondition,
			otherHealthCondition,
			hasFoodAllergie,
			allergiesMed,
			specificAllergiesMed,
			specificFoodAllergie,
			vitrackKit,
			bloodPressureSets,
			leftHandOxygen,
			rightHandOxygen,
			heartRate,
			respiratoryRate,
			temperature,
			painScale,
			symptoms,
		});
	};

	return (
		<div className='md:w-2/3 md:mx-auto space-y-6 !overflow-hidden'>
			<Stepper
				steps={['Patient Info', 'Health Metrics', 'Review & Submit']}
				currentStep={currentStep}
				setCurrentStep={setCurrentStep}
				handleSubmit={handleSubmit}
			>
				{currentStep === 0 && (
					<PatientInfoForm
						formData={{
							firstName,
							lastName,
							dateOfBirth,
							gender,
							nationality,
							country,
							address,
							healthCondition,
							otherHealthCondition,
							specificAllergiesMed,
							specificFoodAllergie,
						}}
						handleChange={handleChange}
					/>
				)}
				{currentStep === 1 && (
					<Symptoms
						formData={{
							symptoms,
						}}
						handleChange={handleChange}
					/>
				)}
				{currentStep === 2 && (
					<HealthMetricsForm
						formData={{
							leftHandBloodPressure: bloodPressureSets[0]?.leftHand,
							rightHandBloodPressure: bloodPressureSets[0]?.rightHand,
							heartRate,
							respiratoryRate,
							painScale,
							leftHandOxygen,
							rightHandOxygen,
						}}
						handleChange={handleChange}
					/>
				)}
				{currentStep === 3 && (
					<ReviewResults
						formData={{
							firstName,
							lastName,
							dateOfBirth,
							gender,
							nationality,
							country,
							address,
							healthCondition,
							otherHealthCondition,
							hasFoodAllergie,
							specificAllergiesMed,
							specificFoodAllergie,
							allergiesMed,
							vitrackKit,
							bloodPressureSets,
							leftHandOxygen,
							rightHandOxygen,
							heartRate,
							respiratoryRate,
							temperature,
							painScale,
							symptoms,
						}}
					/>
				)}
			</Stepper>
		</div>
	);
};

export default Vitrack;
