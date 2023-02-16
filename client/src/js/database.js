import { openDB } from 'idb';

const DB_NAME = 'jate';
const OBJ_STORE = 'jate';
const DB_VERSION = 1; 

const initdb = async () =>
  openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      if (db.objectStoreNames.contains(DB_NAME)) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore(OBJ_STORE, { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('PUT to the database');
  const jateDb = await openDB(DB_NAME, DB_VERSION);
  const tx = jateDb.transaction(DB_NAME, 'readwrite');
  const store = tx.objectStore(OBJ_STORE);
  const request = store.put({ id: DB_VERSION, jate: content });
  const result = await request;
  console.log('🚀 - data saved to the database', result);
}

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('Getting all data');
  const jateDb = await openDB(DB_NAME, DB_VERSION);
  const txt = jateDb.transaction(DB_NAME, 'readonly');
  const store = txt.objectStore(OBJ_STORE);
  const request = store.getAll();
  const result = await request;
  if (result.length === 0) return null;
  else result;
  console.log('result.value', result);
}

initdb();
