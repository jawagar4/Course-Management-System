import { openDB } from 'idb';

const DB_NAME = 'CourseDB';
const STORE_NAME = 'courses';

export const initDB = async () => {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    },
  });
};

export const addCourseToDB = async (course) => {
  const db = await initDB();
  await db.put(STORE_NAME, course); // put allows add/update
};

export const getCoursesFromDB = async () => {
  const db = await initDB();
  return await db.getAll(STORE_NAME);
};

export const deleteCourseFromDB = async (id) => {
  const db = await initDB();
  await db.delete(STORE_NAME, id);
};
