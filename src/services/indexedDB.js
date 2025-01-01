import { openDB } from 'idb';

const DATABASE_NAME = 'AppointmentsDB';
const STORE_NAME = 'appointments';
const DB_VERSION = 1;

const initDB = async () => {
  return openDB(DATABASE_NAME, DB_VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        const store = db.createObjectStore(STORE_NAME, { 
          keyPath: 'appointmentId',
        });
        // Create indexes for common queries
        store.createIndex('userId', 'userId');
        store.createIndex('appointmentDate', 'appointmentDate');
        store.createIndex('appointmentStatus', 'appointmentStatus');
      }
    },
  });
};

// CRUD Operations
export const addAppointment = async (appointment) => {
  try {
    const db = await initDB();
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);

    // Check if appointment with this ID already exists
    const existingAppointment = await store.get(appointment.appointmentId);
    
    if (existingAppointment) {
      // If exists, merge the data and update
      const updatedAppointment = {
        ...existingAppointment,
        ...appointment,
        lastUpdated: new Date().toISOString()
      };
      await store.put(updatedAppointment);
      await tx.done;
      return updatedAppointment;
    } else {
      // If new, add timestamp and save
      const newAppointment = {
        ...appointment,
        createdAt: new Date().toISOString(),
        lastUpdated: new Date().toISOString()
      };
      await store.add(newAppointment);
      await tx.done;
      return newAppointment;
    }
  } catch (error) {
    console.error('Error in addAppointment:', error);
    throw error;
  }
};

export const getAllAppointments = async () => {
  try {
    const db = await initDB();
    const tx = db.transaction(STORE_NAME, 'readonly');
    const store = tx.objectStore(STORE_NAME);
    const appointments = await store.getAll();
    await tx.done;
    return appointments;
  } catch (error) {
    console.error('Error in getAllAppointments:', error);
    throw error;
  }
};

export const getAppointmentsByUserId = async (userId) => {
  try {
    const db = await initDB();
    const tx = db.transaction(STORE_NAME, 'readonly');
    const store = tx.objectStore(STORE_NAME);
    const index = store.index('userId');
    const appointments = await index.getAll(userId);
    await tx.done;
    return appointments;
  } catch (error) {
    console.error('Error in getAppointmentsByUserId:', error);
    throw error;
  }
};

export const updateAppointment = async (appointment) => {
  try {
    const db = await initDB();
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    
    // Check if appointment exists
    const existingAppointment = await store.get(appointment.appointmentId);
    if (!existingAppointment) {
      throw new Error('Appointment not found');
    }

    const updatedAppointment = {
      ...existingAppointment,
      ...appointment,
      lastUpdated: new Date().toISOString()
    };

    await store.put(updatedAppointment);
    await tx.done;
    return updatedAppointment;
  } catch (error) {
    console.error('Error in updateAppointment:', error);
    throw error;
  }
};

export const deleteAppointment = async (appointmentId) => {
  try {
    const db = await initDB();
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    await store.delete(appointmentId);
    await tx.done;
  } catch (error) {
    console.error('Error in deleteAppointment:', error);
    throw error;
  }
};
