import { useForm } from 'react-hook-form';
import Countries from './Countries';
import { inputStyles } from '../../utils/styles';

export default function BookAppointment() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          {/* Email */}
          <div className="flex flex-col items-start justify-center border p-4">
            <label className="text-lg md:text-[1.1rem]">Email:</label>
            <input
              className={`${inputStyles()} !py-[6px] !w-full bg-white dark:!bg-[#000]`}
              type="email"
              placeholder="Email"
              {...register("Email", { required: "Email is required" })}
            />
            {errors.Email && <span className="text-red-600">{errors.Email.message}</span>}
          </div>
        </div>

        <div>
          {/* Full Name */}
          <div className="flex flex-col items-start justify-center border p-4">
            <label className="text-lg md:text-[1.1rem]">Full Name:</label>
            <input
              className={`${inputStyles()} !py-[6px] !w-full bg-white dark:!bg-[#000]`}
              type="text"
              placeholder="Full Name"
              {...register("Full Name", { required: "Full Name is required" })}
            />
            {errors["Full Name"] && <span className="text-red-600">{errors["Full Name"].message}</span>}
          </div>
        </div>

        <div>
          {/* Date of Birth */}
          <div className="flex flex-col items-start justify-center border p-4">
            <label className="text-lg md:text-[1.1rem]">Date of Birth:</label>
            <input
              className={`${inputStyles()} !py-[6px] !w-full bg-white dark:!bg-[#000]`}
              type="datetime-local"
              placeholder="Date of Birth"
              {...register("Date of Birth")}
            />
          </div>
        </div>

        <div>
          {/* Mobile Phone */}
          <div className="flex flex-col items-start justify-center border p-4">
            <label className="text-lg md:text-[1.1rem]">Mobile Phone:</label>
            <input
              className={`${inputStyles()} !py-[6px] !w-full bg-white dark:!bg-[#000]`}
              type="number"
              placeholder="Mobile Phone"
              {...register("Mobile Phone", { required: true })}
            />
            {errors["Mobile Phone"] && <span className="text-red-600">{errors["Mobile Phone"].message}</span>}
          </div>
        </div>

        <div>
          {/* Address */}
          <div className="flex flex-col items-start justify-center border p-4">
            <label className="text-lg md:text-[1.1rem]">Address:</label>
            <input
              className={`${inputStyles()} !py-[6px] !w-full bg-white dark:!bg-[#000]`}
              type="text"
              placeholder="Address"
              {...register("Address", { required: true })}
            />
            {errors["Address"] && <span className="text-red-600">{errors["Address"].message}</span>}
          </div>
        </div>

        <div>
          {/* Countries */}
          <div className="flex flex-col items-start justify-center border p-4">
            <Countries />
          </div>
        </div>

        {/* Marital Status */}
        <div className="flex flex-col items-start justify-center border p-4">
          <label className="text-lg md:text-[1.1rem]">Marital Status:</label>
          <div className="space-x-4 mt-2">
            <input {...register("Marital status", { required: true })} type="radio" value="Married" /> Married
            <input {...register("Marital status", { required: true })} type="radio" value="Single" /> Single
            <input {...register("Marital status", { required: true })} type="radio" value="Divorced" /> Divorced
          </div>
        </div>

        <div>
          {/* Number of Kids */}
          <div className="flex flex-col items-start justify-center border p-4">
            <label className="text-lg md:text-[1.1rem]">Number of Kids:</label>
            <input
              className={`${inputStyles()} !py-[6px] !w-full bg-white dark:!bg-[#000]`}
              type="number"
              placeholder="Number of kids"
              {...register("Number of kids")}
            />
          </div>
        </div>

        <div>
          <label className="text-lg md:text-[1.1rem]">Work Status:</label>
          <div className="space-x-4 mt-2">
            <input {...register("Work status")} type="radio" value="Employed" /> Employed
            <input {...register("Work status")} type="radio" value="Unemployed" /> Unemployed
            <input {...register("Work status")} type="radio" value="Retired" /> Retired
          </div>
        </div>

        <div className="flex flex-col items-start justify-center border p-4 space-y-3 my-4">
          <label className="text-lg font-bold md:text-[1.1rem]">How would you describe your current work status?</label>
          <div className="flex w-full justify-around space-y-3 border">
            <div className="flex flex-col border p-2">
              Location-based
              <input {...register("Current Work Status")} type="radio" value="Location-based" />
              Online
              <input {...register("Current Work Status")} type="radio" value="Online" />
              Office setting
              <input {...register("Current Work Status")} type="radio" value="Office setting" />
            </div>

            <div className="flex flex-col border p-2">
              <input {...register("Current Work Status")} type="radio" value="Outdoor" /> Outdoor
              <input {...register("Current Work Status")} type="radio" value="Traveling extensively" /> Traveling extensively
              <input {...register("Current Work Status")} type="radio" value="Other (please specify)" /> Other (please specify)
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-start justify-center border p-4">
            <label className="text-lg md:text-[1.1rem]">Work Schedule:</label>
            <input
              className={`${inputStyles()} !py-[6px] !w-full bg-white dark:!bg-[#000]`}
              type="number"
              placeholder="Days"
              {...register("Days")}
            />
            <input
              className={`${inputStyles()} !py-[6px] !w-full bg-white dark:!bg-[#000]`}
              type="number"
              placeholder="Hours"
              {...register("Hours")}
            />
          </div>
        </div>

        <div className="flex flex-col items-start justify-center border p-4 space-y-4">
          <label className="text-lg md:text-[1.1rem]">Preferred Language:</label>
          <div className="space-x-4 mt-2">
            <input {...register("Preferred Language", { required: true })} type="radio" value="Arabic" /> Arabic
            <input {...register("Preferred Language", { required: true })} type="radio" value="English" /> English
          </div>

          {/* Smoking and Alcohol Intake */}
          <div className="flex flex-col items-start justify-start">
            <label className="text-lg md:text-[1.1rem]">Do you Smoke?</label>
            <div className="space-x-4 mt-2">
              <input {...register("Do you Smoke?", { required: true })} type="radio" value="Yes" /> Yes
              <input {...register("Do you Smoke?", { required: true })} type="radio" value="No" /> No
            </div>
          </div>

          {/* Do you Drink Alcohol */}
          <div className="flex flex-col items-start justify-center border p-4">
            <label className="text-lg md:text-[1.1rem]">Do you drink alcohol?</label>
            <div className="space-x-4 mt-2">
              <input {...register("Do you drink alcohol intake")} type="radio" value="Yes" /> Yes
              <input {...register("Do you drink alcohol intake")} type="radio" value="No" /> No
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-start justify-center border p-4">
            <label className="text-lg md:text-[1.1rem]">Reason for Visit:</label>
            <input
              className={`${inputStyles()} !py-[6px] !w-full bg-white dark:!bg-[#000]`}
              type="text"
              placeholder="Reason for visit"
              {...register("Reason for Visit", { required: true })}
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full border rounded p-2 bg-blue-500 text-white hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>


  );
}
