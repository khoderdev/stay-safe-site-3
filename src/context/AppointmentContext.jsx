import React, { createContext, useContext, useState } from 'react';
import { format } from 'date-fns';

const AppointmentContext = createContext();

export const useAppointment = () => {
  const context = useContext(AppointmentContext);
  if (!context) {
    throw new Error('useAppointment must be used within an AppointmentProvider');
  }
  return context;
};

export const AppointmentProvider = ({ children }) => {
  const [appointmentDetails, setAppointmentDetails] = useState(null);

  const clearAppointment = () => {
    setAppointmentDetails(null);
  };

  const updateAppointment = (date, time) => {
    if (date && time) {
      setAppointmentDetails({
        appointmentId: Date.now().toString(),
        appointmentDate: date,
        appointmentTime: time,
        appointmentStatus: 'pending'
      });
    } else {
      setAppointmentDetails(null);
    }
  };

  const isTimeSlotAvailable = (start, end) => {
    // Here you would typically check against your backend
    // For now, we'll just return true if it's within business hours
    const hour = start.getHours();
    return hour >= 9 && hour < 17;
  };

  const value = {
    appointmentDetails,
    updateAppointment,
    clearAppointment,
    isTimeSlotAvailable
  };

  return (
    <AppointmentContext.Provider value={value}>
      {children}
    </AppointmentContext.Provider>
  );
};
