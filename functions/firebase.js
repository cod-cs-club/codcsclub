// Import the functions from the SDKs we need.
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Our web app's Firebase configuration.
const firebaseConfig = {
  apiKey: process.env.DB_API_KEY,
  authDomain: process.env.DB_AUTH_DOMAIN,
  databaseURL: process.env.DB_DATABASE_URL,
  projectId: process.env.DB_PROJECT_ID,
  storageBucket: process.env.DB_STORAGE_BUCKET,
  messagingSenderId: process.env.DB_MESSAGING_SENDER_ID,
  appId: process.env.DB_API_ID,
  measurementId: process.env.DB_MEASUREMENT_ID
};

// Initialize Firebase app.
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

// Export to use anywhere!
export default db