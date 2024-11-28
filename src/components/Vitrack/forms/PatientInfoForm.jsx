import React from 'react';
import { useAtom } from 'jotai';
import InputField from '../inputs/InputField';
import Dropdown from '../inputs/Dropdown';
import DateInput from '../inputs/DateInput';
import {
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
    hasFoodAllergieAtom,
    specificAllergiesMedAtom,
    specificFoodAllergieAtom,
    vitrackKitAtom
} from '../../../atoms/store'; 
import { countriesOptions, nationalitiesOptions, diseasesOptions } from '../data';

const PatientInfoForm = () => {
    const [firstName, setFirstName] = useAtom(firstNameAtom);
    const [lastName, setLastName] = useAtom(lastNameAtom);
    const [dateOfBirth, setDateOfBirth] = useAtom(dateOfBirthAtom);
    const [gender, setGender] = useAtom(genderAtom);
    const [nationality, setNationality] = useAtom(nationalityAtom);
    const [country, setCountry] = useAtom(countryAtom);
    const [address, setAddress] = useAtom(addressAtom);
    const [healthCondition, setHealthCondition] = useAtom(healthConditionAtom);
    const [otherHealthCondition, setOtherHealthCondition] = useAtom(otherHealthConditionAtom);
    const [allergiesMed, setAllergiesMed] = useAtom(allergiesMedAtom);
    const [hasFoodAllergie, setHasFoodAllergie] = useAtom(hasFoodAllergieAtom);
    const [specificAllergiesMed, setSpecificAllergiesMed] = useAtom(specificAllergiesMedAtom);
    const [specificFoodAllergie, setSpecificFoodAllergie] = useAtom(specificFoodAllergieAtom);
    const [vitrackKit, setVitrackKit] = useAtom(vitrackKitAtom);

    const handleChange = (e) => {
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
            case 'specificAllergiesMed':
                setSpecificAllergiesMed(value);
                break;
            case 'specificFoodAllergie':
                setSpecificFoodAllergie(value);
                break;
            case 'vitrackKit':
                setVitrackKit(value);
                break;
            default:
                break;
        }
    };

    return (
        <form autoComplete="off">
            <div className="xsm:p-3 sm:p-7 rounded-lg !bg-white-bg2 dark:!bg-[#000] grid grid-cols-1 sm:grid-cols-2 gap-x-14 gap-y-8">
                <InputField
                    label="First Name"
                    name="firstName"
                    value={firstName || ''}
                    onChange={handleChange}
                />
                <InputField
                    label="Last Name"
                    name="lastName"
                    value={lastName || ''}
                    onChange={handleChange}
                />
                <DateInput
                    label="Date of Birth"
                    name="dateOfBirth"
                    value={dateOfBirth || ''}
                    onChange={handleChange}
                />
                <Dropdown
                    label="Gender"
                    name="gender"
                    value={gender || ''}
                    onChange={handleChange}
                    options={['Male', 'Female', 'Other']}
                />

                <Dropdown
                    label="Nationality"
                    name="nationality"
                    value={nationality || ''}
                    onChange={handleChange}
                    options={nationalitiesOptions}
                />
                <Dropdown
                    label="Country"
                    name="country"
                    value={country || ''}
                    onChange={handleChange}
                    options={countriesOptions}
                />
                <InputField
                    label="Address"
                    name="address"
                    value={address || ''}
                    onChange={handleChange}
                />
                <Dropdown
                    label="Health Condition"
                    name="healthCondition"
                    value={healthCondition || ''}
                    onChange={handleChange}
                    options={[...diseasesOptions, 'Others']}
                />

                {/* Only show the 'otherHealthCondition' input if 'healthCondition' is 'Others' */}
                {healthCondition === 'Others' && (
                    <InputField
                        label="Specify Your Health Condition"
                        name="otherHealthCondition"
                        value={otherHealthCondition || ''}
                        onChange={handleChange}
                        placeholder="Specify your health condition"
                    />
                )}

                {/* Known Allergies to Medications */}
                <div>
                    <label className="block text-sm text-black dark:text-white-bg mb-2 font-semibold">
                        Any known Allergies to medications?
                    </label>
                    <div className="flex justify-center items-center space-x-6 mb-4">
                        <label className="flex items-center space-x-2 text-black dark:text-white-bg cursor-pointer">
                            <input
                                type="radio"
                                name="allergiesMed"
                                value="Yes"
                                onChange={handleChange}
                                checked={allergiesMed === 'Yes'}
                                className="hidden peer"
                            />
                            <span className="w-5 h-5 border-2 border-gray-300 rounded-full peer-checked:border-blue-500 peer-checked:ring-2 peer-checked:ring-blue-500">
                                <span className="w-3 h-3 bg-blue-500 rounded-full opacity-0 peer-checked:opacity-100"></span>
                            </span>
                            <span>Yes</span>
                        </label>
                        <label className="flex items-center space-x-2 text-black dark:text-white-bg cursor-pointer">
                            <input
                                type="radio"
                                name="allergiesMed"
                                value="No"
                                onChange={handleChange}
                                checked={allergiesMed === 'No'}
                                className="hidden peer"
                            />
                            <span className="w-5 h-5 border-2 border-gray-300 rounded-full peer-checked:border-blue-500 peer-checked:ring-2 peer-checked:ring-blue-500">
                                <span className="w-3 h-3 bg-blue-500 rounded-full opacity-0 peer-checked:opacity-100"></span>
                            </span>
                            <span>No</span>
                        </label>
                    </div>
                    {allergiesMed === 'Yes' && (
                        <div className="p-2 rounded-md border-2 border-black">
                            <InputField
                                label="Please specify your medication allergies"
                                name="specificAllergiesMed"
                                value={specificAllergiesMed || ''}
                                onChange={handleChange}
                            />
                        </div>
                    )}
                </div>

                {/* Known Food Allergies */}
                <div>
                    <label className="block text-sm text-black dark:text-white-bg mb-2 font-semibold">
                        Any Known Food Allergies?
                    </label>
                    <div className="flex justify-center items-center space-x-6 mb-4">
                        <label className="flex items-center space-x-2 text-black dark:text-white-bg cursor-pointer">
                            <input
                                type="radio"
                                name="hasFoodAllergie"
                                value="Yes"
                                onChange={handleChange}
                                checked={hasFoodAllergie === 'Yes'}
                                className="hidden peer"
                            />
                            <span className="w-5 h-5 border-2 border-gray-300 rounded-full peer-checked:border-blue-500 peer-checked:ring-2 peer-checked:ring-blue-500">
                                <span className="w-3 h-3 bg-blue-500 rounded-full opacity-0 peer-checked:opacity-100"></span>
                            </span>
                            <span>Yes</span>
                        </label>
                        <label className="flex items-center space-x-2 text-black dark:text-white-bg cursor-pointer">
                            <input
                                type="radio"
                                name="hasFoodAllergie"
                                value="No"
                                onChange={handleChange}
                                checked={hasFoodAllergie === 'No'}
                                className="hidden peer"
                            />
                            <span className="w-5 h-5 border-2 border-gray-300 rounded-full peer-checked:border-blue-500 peer-checked:ring-2 peer-checked:ring-blue-500">
                                <span className="w-3 h-3 bg-blue-500 rounded-full opacity-0 peer-checked:opacity-100"></span>
                            </span>
                            <span>No</span>
                        </label>
                    </div>
                    {hasFoodAllergie === 'Yes' && (
                        <div className="p-2 rounded-md border-2 border-black">
                            <Dropdown
                                label="Please specify your food allergies"
                                name="specificFoodAllergie"
                                value={specificFoodAllergie || ''}
                                onChange={handleChange}
                                options={[
                                    'Milk',
                                    'Eggs',
                                    'Fish',
                                    'Shellfish',
                                    'Tree Nuts',
                                    'Peanuts',
                                    'Wheat',
                                    'Soybeans',
                                    'Sesame'
                                ]}
                                className="w-full p-2 border rounded"
                            />
                        </div>
                    )}
                </div>

                <Dropdown
                    label="Vitrack Kit"
                    name="vitrackKit"
                    value={vitrackKit || ''}
                    onChange={handleChange}
                    options={['Granted', 'I have my Own Tools']}
                />
            </div>
        </form>
    );
};

export default PatientInfoForm;
