
import { useForm } from 'react-hook-form';
import Countries from './Countries';
import { inputStyles } from '../../utils/styles';

export default function BookAppointment() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className='flex w-[100dvw] p-6 bg-[#d4eff4] dark:bg-black'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='grid grid-cols-1 text-left items-center md:grid-cols-2 '>

         
        

        

          {/* Work Status */}
          {/* <div className='col-span-1 flex flex-col items-start justify-center border '> */}
         
            {/* Detailed Work Environment */}
          

            {/* Work Days and Hours */}
           

          {/* </div> */}

          {/* Preferred Language */}
        

          {/* Reason for Visit */}
          

          {/* Medical History */}
         

          {/* Family History */}
         

          {/* Submit Button */}
          <div className='col-span-3 mt-14 flex flex-col items-center justify-center border '>
            <button type="submit" className="btn-2 !bg-white !px-8 !py-2">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}
