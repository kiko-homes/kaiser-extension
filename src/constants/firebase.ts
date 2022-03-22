const appId = process.env.REACT_APP_FIREBASE_APP_ID;
const apiKey = process.env.REACT_APP_FIREBASE_API_KEY;
const authDomain = process.env.REACT_APP_FIREBASE_AUTH_DOMAIN;
const projectId = process.env.REACT_APP_FIREBASE_PROJECT_ID;
const measurementId = process.env.REACT_APP_FIREBASE_MEASUREMENT_ID;
const messagingSenderId = process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID;
const storageBucket = process.env.REACT_APP_FIREBASE_STORAGE_BUCKET;

export const FIREBASE_CONFIG = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId,
};
