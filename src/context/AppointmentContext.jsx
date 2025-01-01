import React, { createContext, useContext, useState, useEffect } from 'react';
import { format } from 'date-fns';
import AuthContext from '../hooks/authContext';
import { getAllAppointments, addAppointment as addAppointmentToDb, updateAppointment as updateAppointmentInDb } from '../services/indexedDB';

const AppointmentContext = createContext();

export const useAppointment = () => {
  const context = useContext(AppointmentContext);
  if (!context) {
    throw new Error('useAppointment must be used within an AppointmentProvider');
  }
  return context;
};

/**
 * AppointmentProvider component that manages appointment state and logic.
 * Provides context for managing appointment details and interacting with
 * IndexedDB for persistent storage. Handles user authentication state
 * to allow appointment updates and ensures appointment details are
 * synchronized with user changes.
 *
 * @param {object} children - React children components.
 *
 * @returns {jsx} Returns a context provider that wraps children components
 * with appointment-related state and methods.
 */
export const AppointmentProvider = ({ children }) => {
  const { user, isAuthenticated } = useContext(AuthContext);
  const [appointmentDetails, setAppointmentDetails] = useState(null);
  const [appointments, setAppointments] = useState([]);

  // Load appointments from IndexedDB on mount
  useEffect(() => {
    const loadAppointments = async () => {
      try {
        const savedAppointments = await getAllAppointments();
        setAppointments(savedAppointments);
      } catch (error) {
        console.error('Error loading appointments:', error);
      }
    };
    loadAppointments();
  }, []);

  const clearAppointment = () => {
    setAppointmentDetails(null);
  };

  const updateAppointment = async (date, time) => {
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
      
      // Save to IndexedDB
      await addAppointmentToDb(newAppointmentDetails);
      
      // Update local state
      setAppointmentDetails(newAppointmentDetails);
      setAppointments(prev => [...prev, newAppointmentDetails]);
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

      const updatedDetails = {
        ...appointmentDetails,
        userId,
        userEmail,
        username
      };

      setAppointmentDetails(updatedDetails);
      // Update in IndexedDB
      updateAppointmentInDb(updatedDetails).catch(error => {
        console.error('Error updating appointment in IndexedDB:', error);
      });
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
    appointments,
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
