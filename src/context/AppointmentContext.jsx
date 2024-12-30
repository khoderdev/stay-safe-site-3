import React, { createContext, useContext, useState, useEffect } from 'react';
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
  const { user, isAuthenticated } = useContext(AuthContext);
  const [appointmentDetails, setAppointmentDetails] = useState(null);

  const clearAppointment = () => {
    setAppointmentDetails(null);
  };

  const updateAppointment = (date, time) => {
    if (!date || !time) {
      setAppointmentDetails(null);
      return;
    }

    if (!user || !isAuthenticated) {
      console.warn('Please log in to book an appointment');
      return;
    }

    try {
      // Get user details with fallbacks
      const userId = user.id || 'temp-id';
      const userEmail = user.email || '';
      const username = user.username || user.name || 'Guest';

      const newAppointmentDetails = {
        appointmentId: Date.now().toString(),
        userId,
        userEmail,
        username,
        appointmentDate: format(date, 'MMMM dd, yyyy'),
        appointmentTime: format(time, 'h:mm a'),
        appointmentStatus: 'pending'
      };

      console.log('Updating appointment with details:', newAppointmentDetails);
      setAppointmentDetails(newAppointmentDetails);
    } catch (error) {
      console.error('Error updating appointment:', error);
      setAppointmentDetails(null);
    }
  };

  // Update appointment details when user changes
  useEffect(() => {
    if (appointmentDetails && user) {
      const userId = user.id || 'temp-id';
      const userEmail = user.email || '';
      const username = user.username || user.name || 'Guest';

      setAppointmentDetails(prev => ({
        ...prev,
        userId,
        userEmail,
        username
      }));
    } else if (!user && appointmentDetails) {
      clearAppointment();
    }
  }, [user]);

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
