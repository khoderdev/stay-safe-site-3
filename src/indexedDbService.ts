import { openDB, IDBPDatabase } from 'idb';
import { FoodSafety } from './components/Table/columns';

// Database and store names
const DATABASE_NAME = 'FoodSafetyDatabase';
const STORE_NAME = 'FoodSafetyStore';

// Define a database schema interface
interface FoodSafetyDatabase {
  [STORE_NAME]: FoodSafety;
}

// Initialize the database
const initDB = async (): Promise<IDBPDatabase<FoodSafetyDatabase>> => {
  return openDB<FoodSafetyDatabase>(DATABASE_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
      }
    },
  });
};

// CRUD operations

// Fetch all data
export const fetchAllData = async (): Promise<FoodSafety[]> => {
  const db = await initDB();
  const tx = db.transaction(STORE_NAME, 'readonly');
  const store = tx.objectStore(STORE_NAME);
  const allData = await store.getAll();
  await tx.done; // Wait for transaction to complete
  return allData;
};

// Create new data
export const createData = async (data: Omit<FoodSafety, 'id'>): Promise<FoodSafety> => {
  const db = await initDB();
  const tx = db.transaction(STORE_NAME, 'readwrite');
  const store = tx.objectStore(STORE_NAME);
  const id = await store.add(data);
  await tx.done;
  return { ...data, id };
};

// Update existing data
export const updateData = async (data: FoodSafety): Promise<FoodSafety> => {
  const db = await initDB();
  const tx = db.transaction(STORE_NAME, 'readwrite');
  const store = tx.objectStore(STORE_NAME);
  await store.put(data);
  await tx.done;
  return data;
};

// Delete data by ID
export const deleteData = async (appId: number | string): Promise<void> => {
  const db = await initDB();
  const tx = db.transaction(STORE_NAME, 'readwrite');
  const store = tx.objectStore(STORE_NAME);
  await store.delete(appId);
  await tx.done;
};
