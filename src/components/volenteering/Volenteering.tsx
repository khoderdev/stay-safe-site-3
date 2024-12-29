import React, { useState } from 'react';
import { useAtom } from 'jotai';
import InputField from '../Vitrack/inputs/InputField';
import Dropdown from '../Vitrack/inputs/Dropdown';
import DateInput from '../Vitrack/inputs/DateInput';
import {
	firstNameAtom,
	lastNameAtom,
	dateOfBirthAtom,
	genderAtom,
	nationalityAtom,
	countryAtom,
	addressAtom,
	phoneAtom,
	emergencyPhoneAtom,
	contactPersonAtom,
	languageAtom,
	tShirtSizeAtom,
	bloodGroupAtom,
	educationAtom,
	isOtherLanguageAtom,
	manualLanguageAtom,
	selectedSkillsAtom,
	selfDescriptionAtom,
	volunteerInterestAtom,
	imageConsentAtom,
} from '../../atoms/store';
import { countriesOptions, nationalitiesOptions, skillsOptions } from '../Vitrack/data';
import Modal from './Modal';

const Volunteering = () => {
	// Personal Information States
	const [firstName, setFirstName] = useAtom(firstNameAtom);
	const [lastName, setLastName] = useAtom(lastNameAtom);
	const [dateOfBirth, setDateOfBirth] = useAtom(dateOfBirthAtom);
	const [gender, setGender] = useAtom(genderAtom);
	const [nationality, setNationality] = useAtom(nationalityAtom);
	const [country, setCountry] = useAtom(countryAtom);
	const [address, setAddress] = useAtom(addressAtom);
	const [phone, setPhone] = useAtom(phoneAtom);
	const [emergencyPhone, setEmergencyPhone] = useAtom(emergencyPhoneAtom);
	const [contactPerson, setContactPerson] = useAtom(contactPersonAtom);
	const [language, setLanguage] = useAtom(languageAtom);
	const [tShirtSize, setTShirtSize] = useAtom(tShirtSizeAtom);
	const [bloodGroup, setBloodGroup] = useAtom(bloodGroupAtom);
	const [education, setEducation] = useAtom(educationAtom);
	const [isOtherLanguage, setIsOtherLanguage] = useAtom(isOtherLanguageAtom);
	const [manualLanguage, setManualLanguage] = useAtom(manualLanguageAtom);
	const [selectedSkills, setSelectedSkills] = useAtom(selectedSkillsAtom);
	const [selfDescription, setSelfDescription] = useAtom(selfDescriptionAtom);
	const [volunteerInterest, setVolunteerInterest] = useAtom(volunteerInterestAtom);
	const [imageConsent, setImageConsent] = useAtom(imageConsentAtom);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [agreedToTerms, setAgreedToTerms] = useState(false);

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	const handleSkillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value, checked } = e.target;
		setSelectedSkills((prevSkills) =>
			checked ? [...prevSkills, value] : prevSkills.filter((skill) => skill !== value)
		);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = e.target;

		switch (name) {
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
			case 'phone':
				setPhone(value);
				break;
			case 'emergencyPhone':
				setEmergencyPhone(value);
				break;
			case 'contactPerson':
				setContactPerson(value);
				break;
			case 'language':
				setLanguage(value);
				if (value === 'Other') {
					setIsOtherLanguage(true);
				} else {
					setIsOtherLanguage(false);
					setManualLanguage(''); // Reset the manual language field if another option is selected
				}
				break;
			case 'manualLanguage':  // Handle the manual language input
				setManualLanguage(value);
				break;
			case 'tShirtSize':
				setTShirtSize(value);
				break;
			case 'bloodGroup':
				setBloodGroup(value);
				break;
			case 'education':
				setEducation(value);
				break;
			case 'imageConsent': // Handle image consent
				setImageConsent(e.target.checked);
				break;
			default:
				break;
		}
	};

	return (
		<form className='container mx-auto h-screen py-8' autoComplete='off'>
			<div className='xsm:p-3 sm:p-7 rounded-lg bg-white-bg2! dark:bg-[#000]! grid grid-cols-1 sm:grid-cols-2 gap-x-14 gap-y-8'>
				<InputField
					label='First Name'
					name='firstName'
					value={firstName || ''}
					onChange={handleChange} max={undefined} />
				<InputField
					label='Last Name'
					name='lastName'
					value={lastName || ''}
					onChange={handleChange} max={undefined} />
				<DateInput
					label='Date of Birth'
					name='dateOfBirth'
					value={dateOfBirth || ''}
					onChange={handleChange}
				/>
				<Dropdown
					label='Gender'
					name='gender'
					value={gender || ''}
					onChange={handleChange}
					options={['Male', 'Female', 'Other']}
				/>
				<Dropdown
					label='Nationality'
					name='nationality'
					value={nationality || ''}
					onChange={handleChange}
					options={nationalitiesOptions}
				/>
				<Dropdown
					label='Country'
					name='country'
					value={country || ''}
					onChange={handleChange}
					options={countriesOptions}
				/>
				<InputField
					label='Address'
					name='address'
					value={address || ''}
					onChange={handleChange} max={undefined} />
				<InputField
					label='Phone Number'
					name='phone'
					value={phone || ''}
					onChange={handleChange} max={undefined} />
				<InputField
					label='Emergency Contact Number'
					name='emergencyPhone'
					value={emergencyPhone || ''}
					onChange={handleChange} max={undefined} />
				<InputField
					label='Contact Person (Relation)'
					name='contactPerson'
					value={contactPerson || ''}
					onChange={handleChange} max={undefined} />
				<Dropdown
					label='Language'
					name='language'
					value={language || ''}
					onChange={handleChange}
					options={['Arabic', 'English', 'Other']}
				/>
				<Dropdown
					label='Education'
					name='education'
					value={education || ''}
					onChange={handleChange}
					options={[
						'No Formal Education',
						'Diploma',
						'Some Primary Education',
						'Completed Primary Education',
						'Some Secondary Education',
						'Completed Secondary Education (High School Diploma or Equivalent)',
						'Some Post-Secondary Education (College/University)',
						'Completed Post-Secondary Education (Associate Degree or Equivalent)',
						'Bachelor\'s Degree',
						'Master\'s Degree',
						'Doctorate (PhD or Equivalent)'
					]}
				/>
				{/* Conditionally render the manual language input if "Other" is selected */}
				{isOtherLanguage && (
					<InputField
						label='Please specify your language'
						name='manualLanguage'
						value={manualLanguage || ''}
						onChange={handleChange} max={undefined} />
				)}
				<InputField
					label='T-Shirt Size'
					name='tShirtSize'
					value={tShirtSize || ''}
					onChange={handleChange} max={undefined} />
				<Dropdown
					label='Blood Group'
					name='bloodGroup'
					value={bloodGroup || ''}
					onChange={handleChange}
					options={[
						'A positive (A+)', 'A negative (A-)', 'B positive (B+)',
						'B negative (B-)', 'AB positive (AB+)', 'AB negative (AB-)',
						'O positive (O+)', 'O negative (O-)'
					]}
				/>


				{/* Skills Checkboxes Section */}
				<div className="col-span-2">
					<h3 className="text-sm mb-4">Do you possess any of the following skills?</h3>
					<div className="grid grid-cols-2 gap-4">
						{skillsOptions.map((skill, index) => (
							<div key={index} className="flex items-center">
								<input
									type="checkbox"
									id={`skill-${index}`}
									value={skill}
									checked={selectedSkills.includes(skill)}
									onChange={handleSkillChange}
									className="mr-2"
								/>
								<label htmlFor={`skill-${index}`} className="text-sm">{skill}</label>
							</div>
						))}
					</div>
				</div>

				{/* Self Description and Volunteer Interest Section */}
				<div className='col-span-full'>
					<InputField
						label='Can you tell us about yourself and your goals in life? What motivates you to become a volunteer at Stay Safe? '
						name='selfDescription'
						value={selfDescription}
						onChange={(e) => setSelfDescription(e.target.value)}
						textarea
					/>
				</div>

				<div className='flex flex-col col-span-2'>
					<p className=" text-sm mb-2">
						I hereby declare that all the information provided in this form is true, complete, and accurate to the best of my knowledge.
					</p>
					<div className=" flex items-center">
						<input
							type="checkbox"
							checked={agreedToTerms}
							onChange={() => setAgreedToTerms(!agreedToTerms)}
							id="agreeToTerms"
							className="mr-2"
						/>
						<label htmlFor="agreeToTerms" className="text-sm">
							I agree to the
							<a
								href="#"
								className="ml-2 text-blue-600 text-sm"
								onClick={openModal}
							>
								Terms of Service
							</a>
						</label>
					</div>
				</div>
				{/* Send Button */}
				<div className="col-span-2 text-center">
					<button
						type="submit"
						className="px-6 py-2 bg-blue-600 text-white rounded-md"
						disabled={!agreedToTerms}
					>
						Send
					</button>
				</div>
				<Modal isOpen={isModalOpen} onClose={closeModal} />
			</div>
		</form>
	);
};

export default Volunteering;