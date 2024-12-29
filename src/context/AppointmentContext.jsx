import React, { createContext, useContext, useState } from 'react';
import { format } from 'date-fns';
import AuthContext from '../hooks/authContext';

const AppointmentContext = createContext();

export const useAppointment = () => {
  const context = useContext(AppointmentContext);
  if (!context) {
    throw new Error('useAppointment must be used within an AppointmentProvider');
  }
  return context;
};

export const AppointmentProvider = ({ children }) => {
  const auth = useContext(AuthContext);
  const { user, isAuthenticated } = auth || {};
  const [appointmentDetails, setAppointmentDetails] = useState(null);

  const clearAppointment = () => {
    setAppointmentDetails(null);
  };

  const updateAppointment = (date, time) => {
    if (date && time) {
      setAppointmentDetails({
        appointmentId: Date.now().toString(),
        userId: user?.email || null,
        userEmail: user?.email || null,
        appointmentDate: date,
        appointmentTime: time,
        appointmentStatus: 'pending'
      });
    } else {
      setAppointmentDetails(null);
    }
  };

  const isTimeSlotAvailable = (start, end) => {
    const hour = start.getHours();
    return hour >= 9 && hour < 17;
  };

  const value = {
    appointmentDetails,
    updateAppointment,
    clearAppointment,
    isTimeSlotAvailable,
    user,
    isAuthenticated
  };

  return (
    <AppointmentContext.Provider value={value}>
      {children}
    </AppointmentContext.Provider>
  );
};
