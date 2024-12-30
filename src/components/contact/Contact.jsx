import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import InputField from "../Vitrack/inputs/InputField";

const VITE_REACT_APP_EMAILJS_SERVICE_ID = "service_eixkssa";
const VITE_REACT_APP_EMAILJS_TEMPLATE_ID = "template_dubxpta";
const VITE_REACT_APP_EMAILJS_PUBLIC_KEY = "_l9dnDMjroUkK-YTW";

const variants = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
      ease: "easeOut",
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const isInView = useInView(ref, { margin: "-100px" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.sendForm(
        VITE_REACT_APP_EMAILJS_SERVICE_ID,
        VITE_REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        VITE_REACT_APP_EMAILJS_PUBLIC_KEY
      );

      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 dark:bg-black ">
      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto"
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info Section */}
          <motion.div className="space-y-12" variants={variants}>
            <motion.h1
              className="text-4xl md:text-6xl font-bold dark:text-gray-50 mb-8"
              variants={variants}
            >
              Let&#39;s work together
            </motion.h1>

            <motion.div className="space-y-6" variants={variants}>
              {[
                {
                  title: "Mail",
                  content: "help@staysafeaa.org",
                  icon: "📧",
                  link: "mailto:help@staysafeaa.org",
                },
                {
                  title: "Address",
                  content: "Kobbeih, Main street\nMount Lebanon",
                  icon: "📍",
                  link: "https://www.google.com/maps/search/?api=1&query=Kobbeih+Main+street+Mount+Lebanon",
                },
                {
                  title: "Phone",
                  content: "+961 70 095 040",
                  icon: "📞",
                  link: "tel:+96170095040",
                },
              ].map((item, index) => (
                <a
                  key={item.title}
                  href={item.link}
                  className="block no-underline"
                  target={item.title === "Address" ? "_blank" : undefined}
                  rel={item.title === "Address" ? "noopener noreferrer" : undefined}
                >
                  <motion.div
                    className="bg-white-bg dark:bg-dark rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                    variants={variants}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center space-x-4">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <h2 className="text-xl font-semibold dark:text-gray-50">
                          {item.title}
                        </h2>
                        <p className="mt-2 text-pink group-hover:text-blue-800 transition-colors duration-200">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div
            className="bg-white-bg dark:bg-dark rounded-xl shadow-xl p-8"
            variants={variants}
          >
            <motion.form
              ref={formRef}
              onSubmit={sendEmail}
              className="space-y-6"
            >
              <InputField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your name"
                className="!bg-transparent"
              />

              <InputField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your@email.com"
                className="!bg-transparent"
              />

              <InputField
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your message..."
                textarea={true}
                className="!bg-transparent resize-none"
              />

              <motion.button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 px-6 text-white rounded-md shadow-sm ${
                  isLoading ? "bg-gray-400" : "bg-pink hover:bg-pink/95"
                } transition-colors duration-200`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
