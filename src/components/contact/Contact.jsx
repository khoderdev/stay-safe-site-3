import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion'
import emailjs from '@emailjs/browser';
// import './contact.css'

const VITE_REACT_APP_EMAILJS_SERVICE_ID = "service_eixkssa"
const VITE_REACT_APP_EMAILJS_TEMPLATE_ID = "template_dubxpta"
const VITE_REACT_APP_EMAILJS_PUBLIC_KEY = "_l9dnDMjroUkK-YTW"

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    }
  }
}

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const isInView = useInView(ref, { margin: '-100px' });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(VITE_REACT_APP_EMAILJS_SERVICE_ID, VITE_REACT_APP_EMAILJS_TEMPLATE_ID, formRef.current, VITE_REACT_APP_EMAILJS_PUBLIC_KEY)

      .then(() => {
        setSuccess(true);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });

  };

  return (
    <div className="-mt-[8rem] xl:flex-row flex-col-reverse 
    flex gap-10 overflow-hidden">
      <motion.div
        ref={ref}
        className="contact p-4"
        variants={variants}
        initial='initial'
        animate='animate'
      >
        <div className='flex flex-col sm:py-14 space-y-8 sm:space-y-24  sm:w-1/2 p-2 sm:h-full'>
          <motion.h1 className='text-4xl' variants={variants}>Let&#39;s work together</motion.h1>
          <motion.div className="textContainer" variants={variants}>
            <motion.div
              className="item w-2/3 p-4"
              style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.4)" }}
              variants={variants}
              whileHover={{ scale: 1.1, rotate: 0, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 1000 }}
            >
              <h2>Mail</h2>
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                help@staysafeaa.org
              </motion.span>
            </motion.div>

            <motion.div
              className="item w-2/3 p-4"
              style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.4)" }}
              variants={variants}
              whileHover={{ scale: 1.1, rotate: 0, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 1000 }}
            >
              <h2>Address</h2>
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Kobbeih, Main street <br /> Mound Lebanon
              </motion.span>
            </motion.div>

            <motion.div
              className="item w-2/3 p-4"
              style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.4)" }} variants={variants}
              whileHover={{ scale: 1.1, rotate: 0, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 1000 }}
            >
              <h2>Phone</h2>
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                +961 70 095 040
              </motion.span>
            </motion.div>

          </motion.div>
        </div>

        <div className="formContainer ">
          <motion.div className="phoneSvgWrap w-full"
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 0 }}
            transition={{ delay: 3, duration: 1 }}
          >

            <svg
              className="phoneSvg"
              width="100%"
              height="100%"
              viewBox="0 0 40 45"
              preserveAspectRatio="xMidYMid meet"
            >
              <motion.path
                strokeWidth={0.4}
                fill="none"
                initial={{ pathLength: 0 }}
                animate={isInView && { pathLength: 1 }}
                transition={{ duration: 3 }}
                d="M28.189,16.504h-1.666c0-5.437-4.422-9.858-9.856-9.858l-0.001-1.664C23.021,4.979,28.189,10.149,28.189,16.504z
            M16.666,7.856L16.665,9.52c3.853,0,6.983,3.133,6.981,6.983l1.666-0.001C25.312,11.735,21.436,7.856,16.666,7.856z M16.333,0
            C7.326,0,0,7.326,0,16.334c0,9.006,7.326,16.332,16.333,16.332c0.557,0,1.007-0.45,1.007-1.006c0-0.559-0.45-1.01-1.007-1.01
            c-7.896,0-14.318-6.424-14.318-14.316c0-7.896,6.422-14.319,14.318-14.319c7.896,0,14.317,6.424,14.317,14.319
            c0,3.299-1.756,6.568-4.269,7.954c-0.913,0.502-1.903,0.751-2.959,0.761c0.634-0.377,1.183-0.887,1.591-1.529
            c0.08-0.121,0.186-0.228,0.238-0.359c0.328-0.789,0.357-1.684,0.555-2.518c0.243-1.064-4.658-3.143-5.084-1.814
            c-0.154,0.492-0.39,2.048-0.699,2.458c-0.275,0.366-0.953,0.192-1.377-0.168c-1.117-0.952-2.364-2.351-3.458-3.457l0.002-0.001
            c-0.028-0.029-0.062-0.061-0.092-0.092c-0.031-0.029-0.062-0.062-0.093-0.092v0.002c-1.106-1.096-2.506-2.34-3.457-3.459
            c-0.36-0.424-0.534-1.102-0.168-1.377c0.41-0.311,1.966-0.543,2.458-0.699c1.326-0.424-0.75-5.328-1.816-5.084
            c-0.832,0.195-1.727,0.227-2.516,0.553c-0.134,0.057-0.238,0.16-0.359,0.24c-2.799,1.774-3.16,6.082-0.428,9.292
            c1.041,1.228,2.127,2.416,3.245,3.576l-0.006,0.004c0.031,0.031,0.063,0.06,0.095,0.09c0.03,0.031,0.059,0.062,0.088,0.095
            l0.006-0.006c1.16,1.118,2.535,2.765,4.769,4.255c4.703,3.141,8.312,2.264,10.438,1.098c3.67-2.021,5.312-6.338,5.312-9.719
            C32.666,7.326,25.339,0,16.333,0z"
              />
            </svg>
          </motion.div>

          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 4, duration: 1 }}
          >
            <input type="text" required placeholder='Name' name='name' />
            <input type="email" required placeholder='Email' name='email' />
            <textarea rows={8} placeholder='Message' name='message' />
            <button>Submit</button>
            {error && 'Error'}
            {success && 'Success'}
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;



