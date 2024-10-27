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
      <select {...register("Country", { required: true })}>
        <option value="Afghanistan">Afghanistan</option>
        <option value=" Albania"> Albania</option>
        <option value=" Algeria"> Algeria</option>
        <option value=" Andorra"> Andorra</option>
        <option value=" Angola"> Angola</option>
        <option value=" Antigua and Barbuda"> Antigua and Barbuda</option>
        <option value=" Argentina"> Argentina</option>
        <option value=" Armenia"> Armenia</option>
        <option value=" Australia"> Australia</option>
        <option value=" Austria"> Austria</option>
        <option value=" Azerbaijan"> Azerbaijan</option>
        <option value=" Bahamas"> Bahamas</option>
        <option value=" Bahrain"> Bahrain</option>
        <option value=" Bangladesh"> Bangladesh</option>
        <option value=" Barbados"> Barbados</option>
        <option value=" Belarus"> Belarus</option>
        <option value=" Belgium"> Belgium</option>
        <option value=" Belize"> Belize</option>
        <option value=" Benin"> Benin</option>
        <option value=" Bhutan"> Bhutan</option>
        <option value=" Bolivia"> Bolivia</option>
        <option value=" Bosnia and Herzegovina"> Bosnia and Herzegovina</option>
        <option value=" Botswana"> Botswana</option>
        <option value=" Brazil"> Brazil</option>
        <option value=" Brunei"> Brunei</option>
        <option value=" Bulgaria"> Bulgaria</option>
        <option value=" Burkina Faso"> Burkina Faso</option>
        <option value=" Burundi"> Burundi</option>
        <option value=" Cabo Verde"> Cabo Verde</option>
        <option value=" Cambodia"> Cambodia</option>
        <option value=" Cameroon"> Cameroon</option>
        <option value=" Canada"> Canada</option>
        <option value=" Central African Republic"> Central African Republic</option>
        <option value=" Chad"> Chad</option>
        <option value=" Chile"> Chile</option>
        <option value=" China"> China</option>
        <option value=" Colombia"> Colombia</option>
        <option value=" Comoros"> Comoros</option>
        <option value=" Congo (Congo-Brazzaville)"> Congo (Congo-Brazzaville)</option>
        <option value=" Costa Rica"> Costa Rica</option>
        <option value=" Croatia"> Croatia</option>
        <option value=" Cuba"> Cuba</option>
        <option value=" Cyprus"> Cyprus</option>
        <option value=" Czechia (Czech Republic)"> Czechia (Czech Republic)</option>
        <option value=" Denmark"> Denmark</option>
        <option value=" Djibouti"> Djibouti</option>
        <option value=" Dominica"> Dominica</option>
        <option value=" Dominican Republic"> Dominican Republic</option>
        <option value=" Ecuador"> Ecuador</option>
        <option value=" Egypt"> Egypt</option>
        <option value=" El Salvador"> El Salvador</option>
        <option value=" Equatorial Guinea"> Equatorial Guinea</option>
        <option value=" Eritrea"> Eritrea</option>
        <option value=" Estonia"> Estonia</option>
        <option value=" Eswatini (Swaziland)"> Eswatini (Swaziland)</option>
        <option value=" Ethiopia"> Ethiopia</option>
        <option value=" Fiji"> Fiji</option>
        <option value=" Finland"> Finland</option>
        <option value=" France"> France</option>
        <option value=" Gabon"> Gabon</option>
        <option value=" Gambia"> Gambia</option>
        <option value=" Georgia"> Georgia</option>
        <option value=" Germany"> Germany</option>
        <option value=" Ghana"> Ghana</option>
        <option value=" Greece"> Greece</option>
        <option value=" Grenada"> Grenada</option>
        <option value=" Guatemala"> Guatemala</option>
        <option value=" Guinea"> Guinea</option>
        <option value=" Guinea-Bissau"> Guinea-Bissau</option>
        <option value=" Guyana"> Guyana</option>
        <option value=" Haiti"> Haiti</option>
        <option value=" Honduras"> Honduras</option>
        <option value=" Hungary"> Hungary</option>
        <option value=" Iceland"> Iceland</option>
        <option value=" India"> India</option>
        <option value=" Indonesia"> Indonesia</option>
        <option value=" Iran"> Iran</option>
        <option value=" Iraq"> Iraq</option>
        <option value=" Ireland"> Ireland</option>
        <option value=" Israel"> Israel</option>
        <option value=" Italy"> Italy</option>
        <option value=" Jamaica"> Jamaica</option>
        <option value=" Japan"> Japan</option>
        <option value=" Jordan"> Jordan</option>
        <option value=" Kazakhstan"> Kazakhstan</option>
        <option value=" Kenya"> Kenya</option>
        <option value=" Kiribati"> Kiribati</option>
        <option value=" Korea (North)"> Korea (North)</option>
        <option value=" Korea (South)"> Korea (South)</option>
        <option value=" Kosovo"> Kosovo</option>
        <option value=" Kuwait"> Kuwait</option>
        <option value=" Kyrgyzstan"> Kyrgyzstan</option>
        <option value=" Laos"> Laos</option>
        <option value=" Latvia"> Latvia</option>
        <option value=" Lebanon"> Lebanon</option>
        <option value=" Lesotho"> Lesotho</option>
        <option value=" Liberia"> Liberia</option>
        <option value=" Libya"> Libya</option>
        <option value=" Liechtenstein"> Liechtenstein</option>
        <option value=" Lithuania"> Lithuania</option>
        <option value=" Luxembourg"> Luxembourg</option>
        <option value=" Madagascar"> Madagascar</option>
        <option value=" Malawi"> Malawi</option>
        <option value=" Malaysia"> Malaysia</option>
        <option value=" Maldives"> Maldives</option>
        <option value=" Mali"> Mali</option>
        <option value=" Malta"> Malta</option>
        <option value=" Marshall Islands"> Marshall Islands</option>
        <option value=" Mauritania"> Mauritania</option>
        <option value=" Mauritius"> Mauritius</option>
        <option value=" Mexico"> Mexico</option>
        <option value=" Micronesia"> Micronesia</option>
        <option value=" Moldova"> Moldova</option>
        <option value=" Monaco"> Monaco</option>
        <option value=" Mongolia"> Mongolia</option>
        <option value=" Montenegro"> Montenegro</option>
        <option value=" Morocco"> Morocco</option>
        <option value=" Mozambique"> Mozambique</option>
        <option value=" Myanmar (formerly Burma)"> Myanmar (formerly Burma)</option>
        <option value=" Namibia"> Namibia</option>
        <option value=" Nauru"> Nauru</option>
        <option value=" Nepal"> Nepal</option>
        <option value=" Netherlands"> Netherlands</option>
        <option value=" New Zealand"> New Zealand</option>
        <option value=" Nicaragua"> Nicaragua</option>
        <option value=" Niger"> Niger</option>
        <option value=" Nigeria"> Nigeria</option>
        <option value=" North Macedonia"> North Macedonia</option>
        <option value=" Norway"> Norway</option>
        <option value=" Oman"> Oman</option>
        <option value=" Pakistan"> Pakistan</option>
        <option value=" Palau"> Palau</option>
        <option value=" Panama"> Panama</option>
        <option value=" Papua New Guinea"> Papua New Guinea</option>
        <option value=" Paraguay"> Paraguay</option>
        <option value=" Peru"> Peru</option>
        <option value=" Philippines"> Philippines</option>
        <option value=" Poland"> Poland</option>
        <option value=" Portugal"> Portugal</option>
        <option value=" Qatar"> Qatar</option>
        <option value=" Romania"> Romania</option>
        <option value=" Russia"> Russia</option>
        <option value=" Rwanda"> Rwanda</option>
        <option value=" Saint Kitts and Nevis"> Saint Kitts and Nevis</option>
        <option value=" Saint Lucia"> Saint Lucia</option>
        <option value=" Saint Vincent and the Grenadines"> Saint Vincent and the Grenadines</option>
        <option value=" Samoa"> Samoa</option>
        <option value=" San Marino"> San Marino</option>
        <option value=" Sao Tome and Principe"> Sao Tome and Principe</option>
        <option value=" Saudi Arabia"> Saudi Arabia</option>
        <option value=" Senegal"> Senegal</option>
        <option value=" Serbia"> Serbia</option>
        <option value=" Seychelles"> Seychelles</option>
        <option value=" Sierra Leone"> Sierra Leone</option>
        <option value=" Singapore"> Singapore</option>
        <option value=" Slovakia"> Slovakia</option>
        <option value=" Slovenia"> Slovenia</option>
        <option value=" Solomon Islands"> Solomon Islands</option>
        <option value=" Somalia"> Somalia</option>
        <option value=" South Africa"> South Africa</option>
        <option value=" South Sudan"> South Sudan</option>
        <option value=" Spain"> Spain</option>
        <option value=" Sri Lanka"> Sri Lanka</option>
        <option value=" Sudan"> Sudan</option>
        <option value=" Suriname"> Suriname</option>
        <option value=" Sweden"> Sweden</option>
        <option value=" Switzerland"> Switzerland</option>
        <option value=" Syria"> Syria</option>
        <option value=" Taiwan"> Taiwan</option>
        <option value=" Tajikistan"> Tajikistan</option>
        <option value=" Tanzania"> Tanzania</option>
        <option value=" Thailand"> Thailand</option>
        <option value=" Timor-Leste"> Timor-Leste</option>
        <option value=" Togo"> Togo</option>
        <option value=" Tonga"> Tonga</option>
        <option value=" Trinidad and Tobago"> Trinidad and Tobago</option>
        <option value=" Tunisia"> Tunisia</option>
        <option value=" Turkey"> Turkey</option>
        <option value=" Turkmenistan"> Turkmenistan</option>
        <option value=" Tuvalu"> Tuvalu</option>
        <option value=" Uganda"> Uganda</option>
        <option value=" Ukraine"> Ukraine</option>
        <option value=" United Arab Emirates"> United Arab Emirates</option>
        <option value=" United Kingdom"> United Kingdom</option>
        <option value=" United States of America"> United States of America</option>
        <option value=" Uruguay"> Uruguay</option>
        <option value=" Uzbekistan"> Uzbekistan</option>
        <option value=" Vanuatu"> Vanuatu</option>
        <option value=" Venezuela"> Venezuela</option>
        <option value=" Vietnam"> Vietnam</option>
        <option value=" Yemen"> Yemen</option>
        <option value=" Zambia"> Zambia</option>
        <option value=" Zimbabwe"> Zimbabwe</option>
      </select>
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
      {/* <input type="text" placeholder="Average meal duration  " time spent on meal"" {...register("Average meal duration  " time spent on meal"", {})} /> */}
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