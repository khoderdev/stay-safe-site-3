import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaRobot } from "react-icons/fa";

const Message = ({ text, isBot, links, avatar }) => (
  <div
    className={`flex ${isBot ? "justify-start" : "justify-end"} mb-4 items-end`}
  >
    {isBot && (
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink to-pink flex-shrink-0 mr-2 overflow-hidden flex items-center justify-center text-white">
        <FaRobot />
      </div>
    )}
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`max-w-[80%] p-3 rounded-lg shadow-sm ${
        isBot
          ? "bg-white border border-gray-200 rounded-tl-none"
          : "bg-gradient-to-r from-pink to-pink text-white rounded-tr-none"
      }`}
    >
      <p className="text-sm leading-relaxed">{text}</p>
      {links && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-3 space-y-2 border-t pt-2"
        >
          {links}
        </motion.div>
      )}
    </motion.div>
    {!isBot && (
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-500 to-gray-600 text-white flex-shrink-0 ml-2 flex items-center justify-center text-xs font-medium">
        You
      </div>
    )}
  </div>
);

const TypingIndicator = () => (
  <div className="flex items-center space-x-2 text-gray-500 p-2 bg-gray-50 rounded-lg w-20">
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        transition: { repeat: Infinity, duration: 1 },
      }}
      className="w-2 h-2 bg-pink rounded-full"
    />
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        transition: { repeat: Infinity, duration: 1, delay: 0.2 },
      }}
      className="w-2 h-2 bg-pink rounded-full"
    />
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        transition: { repeat: Infinity, duration: 1, delay: 0.4 },
      }}
      className="w-2 h-2 bg-pink rounded-full"
    />
  </div>
);

const QuickActionButton = ({ onClick, children }) => (
  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className="p-3 text-sm bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-blue-200 transition-colors duration-200 shadow-sm"
  >
    {children}
  </motion.button>
);

const StaySafeBot = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [typing, setTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const [minimized, setMinimized] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isModalOpen && messages.length === 0) {
      handleBotResponse("welcome");
    }
  }, [isModalOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addMessage = (text, isBot = false, links = null) => {
    setMessages((prev) => [...prev, { text, isBot, links }]);
  };

  const simulateTyping = async (callback) => {
    setTyping(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setTyping(false);
    callback();
  };

  const getLinks = (option) => {
    const linkStyles =
      "block w-full px-3 py-2 text-pink hover:text-blue-700 hover:bg-blue-50 rounded-md transition-colors duration-200";
    switch (option) {
      case "contact":
        return (
          <div className="space-y-1">
            <a href="tel:+1234567890" className={linkStyles}>
              📞 Call Us: (123) 456-7890
            </a>
            <a href="mailto:support@staysafe.com" className={linkStyles}>
              ✉️ Email: support@staysafe.com
            </a>
            <Link to="/contact-us" className={linkStyles}>
              📝 Contact Form
            </Link>
          </div>
        );
      case "screening":
        return (
          <div className="space-y-1">
            <Link to="/screening" className={linkStyles}>
              🔍 Check Screening Requirements
            </Link>
            <Link
              to="/preventive-health-patient-services"
              className={linkStyles}
            >
              💭 Depression Screening Tool
            </Link>
            <Link to="/mdc" className={linkStyles}>
              📊 BMI Calculator
            </Link>
            <Link
              to="/preventive-health-patient-services"
              className={linkStyles}
            >
              😴 Sleep Apnea Support
            </Link>
            <Link to="/mdc" className={linkStyles}>
              🏥 Disease Support
            </Link>
          </div>
        );
      case "nutrition":
        return (
          <div className="space-y-1">
            <Link to="/appointments/book" className={linkStyles}>
              📅 Book Appointment
            </Link>
            <Link to="/inquire-program" className={linkStyles}>
              📝 Program Information
            </Link>
            <Link to="/payment-methods" className={linkStyles}>
              💸 Payment Methods
            </Link>
            <Link to="/mdc" className={linkStyles}>
              🤔 Nutrition & Food Safety
            </Link>
          </div>
        );
      case "assistiveDevices":
        return (
          <div className="space-y-1">
            <Link to="/mobility-aid" className={linkStyles}>
              🚶‍♂️ Mobility Aid
            </Link>
            <Link to="/cpap-support" className={linkStyles}>
              😴 CPAP Support
            </Link>
            <Link to="/oximeter" className={linkStyles}>
              📊 Oximeter
            </Link>
            <Link to="/vital-kit" className={linkStyles}>
              🏥 Vital Kit
            </Link>
          </div>
        );
      default:
        return null;
    }
  };

  const handleUserChoice = (choice) => {
    addMessage(choice, false);
    handleBotResponse(choice);
  };

  const handleBotResponse = (choice) => {
    let response;
    let links = null;

    switch (choice) {
      case "welcome":
        response = "Hi! I'm StaySafe Bot. How can I assist you today?";
        break;
      case "Screening & Prevention":
        response = "Here are our screening and prevention services:";
        links = getLinks("screening");
        break;
      case "Food & Nutrition":
        response = "Here are our nutrition services:";
        links = getLinks("nutrition");
        break;
      case "Assistive Devices":
        response = "Here are our available assistive devices:";
        links = getLinks("assistiveDevices");
        break;
      case "Contact Support":
        response = "Here's how you can reach our support team:";
        links = getLinks("contact");
        break;
      default:
        response =
          "I'm not sure how to help with that. Would you like to try something else?";
    }

    simulateTyping(() => addMessage(response, true, links));
  };

  const ChatModal = () => (
    <div className="fixed inset-0 z-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute bottom-8 right-24 flex items-end justify-end w-[70%] sm:w-[55%] md:w-[35%]"
      >
        <div
          className={`relative w-full ${minimized ? "h-16" : "h-[600px]"} 
          max-w-[95vw] md:max-w-lg bg-white-bg rounded-lg shadow-2xl flex flex-col 
          transition-all duration-300 ease-in-out`}
        >
          {/* Header */}
          <div className="p-2 border-b flex items-center justify-between bg-gradient-to-r from-pink to-pink rounded-t-lg">
            <div className="flex items-center space-x-3">
              <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-white/10">
                <FaRobot />
                <div className="absolute bottom-0 right-0">
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75"></div>
                </div>
              </div>
              <h2 className="text-lg font-semibold text-white">StaySafe Bot</h2>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setMinimized(!minimized)}
                className="text-white hover:text-gray-200 transition-colors p-2 hover:bg-white/10 rounded"
              >
                {minimized ? "□" : "−"}
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-white hover:text-gray-200 transition-colors p-2 hover:bg-white/10 rounded"
              >
                ✕
              </button>
            </div>
          </div>

          <AnimatePresence>
            {!minimized && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex-1 flex flex-col relative h-full"
              >
                {/* Messages */}
                <div className="absolute inset-0 pt-4 pb-[160px] overflow-y-auto">
                  <div className="flex flex-col space-y-4 px-4">
                    {messages.map((msg, idx) => (
                      <Message key={idx} {...msg} />
                    ))}
                    {typing && <TypingIndicator />}
                    <div ref={messagesEndRef} />
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-white-bg shadow-[0_-1px_3px_rgba(0,0,0,0.1)]">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <QuickActionButton
                      onClick={() => handleUserChoice("Screening & Prevention")}
                    >
                      🔍 Screening & Prevention
                    </QuickActionButton>
                    <QuickActionButton
                      onClick={() => handleUserChoice("Food & Nutrition")}
                    >
                      🍎 Food & Nutrition
                    </QuickActionButton>
                    <QuickActionButton
                      onClick={() => handleUserChoice("Assistive Devices")}
                    >
                      🦽 Assistive Devices
                    </QuickActionButton>
                    <QuickActionButton
                      onClick={() => handleUserChoice("Contact Support")}
                    >
                      💬 Contact Support
                    </QuickActionButton>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-pink to-pink text-white p-4 rounded-full shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300 ease-in-out z-50"
        aria-label="Open chat"
      >
        <FaRobot />
      </motion.button>
      {isModalOpen && createPortal(<ChatModal />, document.body)}
    </>
  );
};

export default StaySafeBot;
