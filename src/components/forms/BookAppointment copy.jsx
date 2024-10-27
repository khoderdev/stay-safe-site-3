import { useForm } from 'react-hook-form';

export default function BookAppointment() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="email" placeholder="Email" {...register("Email", { required: true })} />
      <input type="text" placeholder="Full Name" {...register("Full Name", { required: true })} />
      <input type="datetime-local" placeholder="Date of Birth" {...register("Date of Birth", {})} />
      <input type="number" placeholder="Mobile Phone" {...register("Mobile Phone", { required: true })} />

      <input type="text" placeholder="Address" {...register("Address", { required: true })} />

      <input {...register("Marital status", { required: true })} type="radio" value="Married" />
      <input {...register("Marital status", { required: true })} type="radio" value=" Single" />
      <input {...register("Marital status", { required: true })} type="radio" value=" Divorced" />
      <input type="number" placeholder="Number of kids" {...register("Number of kids", {})} />

      <input {...register("Work status")} type="radio" value="Employed" />
      <input {...register("Work status")} type="radio" value=" Unemployed" />
      <input {...register("Work status")} type="radio" value=" Retired" />

      <input {...register("How would you describe your current work status?")} type="radio" value="Location-based" />
      <input {...register("How would you describe your current work status?")} type="radio" value=" Online" />
      <input {...register("How would you describe your current work status?")} type="radio" value=" Office setting" />
      <input {...register("How would you describe your current work status?")} type="radio" value=" Outdoor" />
      <input {...register("How would you describe your current work status?")} type="radio" value=" Traveling extensively" />
      <input {...register("How would you describe your current work status?")} type="radio" value=" Other (please specify) " />
      <input type="number" placeholder="Days" {...register("Days", {})} />
      <input type="number" placeholder="Hours" {...register("Hours", {})} />

      <input {...register("Preferred Language", { required: true })} type="radio" value="Arabic" />
      <input {...register("Preferred Language", { required: true })} type="radio" value=" English" />

      <input {...register("Education")} type="radio" value="Diploma" />
      <input {...register("Education")} type="radio" value=" Master" />
      <input type="text" placeholder="Reason for visit" {...register("Reason for visit", { required: true })} />

      <input {...register("How did you know about us?")} type="radio" value="Internet search (e.g., Google)" />
      <input {...register("How did you know about us?")} type="radio" value=" Social media (Facebook, Instagram, LinkedIn, etc.)" />
      <input {...register("How did you know about us?")} type="radio" value=" Friend or family referral" />
      <input {...register("How did you know about us?")} type="radio" value=" Event or conference" />
      <input {...register("How did you know about us?")} type="radio" value=" Advertisement (online or print)" />
      <input {...register("How did you know about us?")} type="radio" value=" News article or blog" />
      <input {...register("How did you know about us?")} type="radio" value=" Email newsletter" />
      <input {...register("How did you know about us?")} type="radio" value=" Other (please specify)" />
      <input type="text" placeholder="Medical Assessment" {...register("Medical Assessment", {})} />
      <input type="text" placeholder="Past Medical History (PMH) Please provide details about any significant health conditions or medical issues you have had." {...register("Past Medical History (PMH) Please provide details about any significant health conditions or medical issues you have had.", {})} />
      <input type="text" placeholder="Past Surgical History (PSH) Please list any surgeries you have had." {...register("Past Surgical History (PSH) Please list any surgeries you have had.", {})} />
      <input type="text" placeholder="Food intolerance/ Allergies, Specify" {...register("Food intolerance/ Allergies, Specify", {})} />
      <input type="text" placeholder="Medication/Supplements, Specify Do you take any kind of medication or supplement " {...register("Medication/Supplements, Specify Do you take any kind of medication or supplement ", {})} />

      <input {...register("Do you Smoke?", { required: true })} type="radio" value="Yes" />
      <input {...register("Do you Smoke?", { required: true })} type="radio" value=" No" />
      <input type="number" placeholder="How many packs a day? (pack 20 cigarettes)" {...register("How many packs a day? (pack 20 cigarettes)", {})} />
      <input type="number" placeholder="How many smoking years?" {...register("How many smoking years?", {})} />

      <input {...register("Do you drink alcohol intake ")} type="radio" value="Yes" />
      <input {...register("Do you drink alcohol intake ")} type="radio" value=" No" />

      <input {...register("How often do you drink alcohol?")} type="radio" value="Never" />
      <input {...register("How often do you drink alcohol?")} type="radio" value=" Monthly or less" />
      <input {...register("How often do you drink alcohol?")} type="radio" value=" 2 to 4 times a month" />
      <input {...register("How often do you drink alcohol?")} type="radio" value=" 2 to 3 times a week" />
      <input {...register("How often do you drink alcohol?")} type="radio" value=" 4 or more times a week" />

      <input {...register("How many drinks containing alcohol do you have on a typical day when you are drinking?")} type="radio" value="1 or 2" />
      <input {...register("How many drinks containing alcohol do you have on a typical day when you are drinking?")} type="radio" value=" 3 or 4" />
      <input {...register("How many drinks containing alcohol do you have on a typical day when you are drinking?")} type="radio" value=" 5 or 6" />
      <input {...register("How many drinks containing alcohol do you have on a typical day when you are drinking?")} type="radio" value=" 7 or 9" />
      <input {...register("How many drinks containing alcohol do you have on a typical day when you are drinking?")} type="radio" value=" 10 or more" />
      <input type="text" placeholder="Family History Illnesses or health issues experienced by close family members" {...register("Family History Illnesses or health issues experienced by close family members", {})} />

      <input {...register("Access to sport Facilities", { required: true })} type="radio" value="Yes" />
      <input {...register("Access to sport Facilities", { required: true })} type="radio" value=" No" />

      <input {...register("Physically Active")} type="radio" value="Yes" />
      <input {...register("Physically Active")} type="radio" value=" No" />
      <input type="text" placeholder="Activity Type" {...register("Activity Type", {})} />

      <input {...register("Exercise Daily", { required: true })} type="radio" value="Yes" />
      <input {...register("Exercise Daily", { required: true })} type="radio" value=" No" />
      <input type="text" placeholder="Number of hours/ week" {...register("Number of hours/ week", {})} />
      <input type="text" placeholder="Duration" {...register("Duration", {})} />
      <input type="text" placeholder="Favorite Sport" {...register("Favorite Sport", {})} />
      <input type="text" placeholder="Limitation" {...register("Limitation", {})} />
      <input type="text" placeholder="Exercise Plan" {...register("Exercise Plan", {})} />

      <input {...register("Do you follow any special diet or have restrictions or limitations for any reason? ( Religious, Health, Belief)")} type="radio" value="Yes" />
      <input {...register("Do you follow any special diet or have restrictions or limitations for any reason? ( Religious, Health, Belief)")} type="radio" value=" No" />

      <input {...register("Do you eat 3 meals a day?")} type="radio" value="Yes" />
      <input {...register("Do you eat 3 meals a day?")} type="radio" value=" No" />

      <input {...register("Do you eat at regular time intervals")} type="radio" value="Yes" />
      <input {...register("Do you eat at regular time intervals")} type="radio" value=" No" />
      <input {...register("Do you eat at regular time intervals")} type="radio" value=" Sometimes" />
      <input type="text" placeholder="Average meal duration time spent on meal" {...register("Average meal duration time spent on meal", {})} />
      <input type="text" placeholder="Where do you usually eat your meals " {...register("Where do you usually eat your meals ", {})} />

      <input {...register("You eat alone or with company ")} type="radio" value="Alone" />
      <input {...register("You eat alone or with company ")} type="radio" value=" With Company" />
      <input type="text" placeholder="How many cups of water do you usually drink a day" {...register("How many cups of water do you usually drink a day", {})} />

      <input {...register("Stressed/Traumatized")} type="radio" value="Yes" />
      <input {...register("Stressed/Traumatized")} type="radio" value=" No" />

      <input {...register("Emotional eater")} type="radio" value="Yes" />
      <input {...register("Emotional eater")} type="radio" value=" No" />
      <input type="number" placeholder="How many hours of sleep you get a day?" {...register("How many hours of sleep you get a day?", {})} />

      <input {...register("Previous dieting")} type="radio" value="Yes" />
      <input {...register("Previous dieting")} type="radio" value=" No" />
      <input type="text" placeholder="What precisely in the previous diet didn't suit you?" {...register("What precisely in the previous diet didn't suit you?", {})} />

      <input {...register("Did you try any type of pills that claim losing weight")} type="radio" value="Yes" />
      <input {...register("Did you try any type of pills that claim losing weight")} type="radio" value=" No" />
      <input type="text" placeholder="If you want to change 3 things about your health and nutritional habits, what will they be" {...register("If you want to change 3 things about your health and nutritional habits, what will they be", {})} />

      <input type="submit" />
    </form>
  );
}