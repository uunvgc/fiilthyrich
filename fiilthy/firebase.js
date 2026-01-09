// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAw7grYA8oWNaHh9QsdjinqQRTsvTsSFig",
	authDomain: "studio-9794377776-f2142.firebaseapp.com",
	projectId: "studio-9794377776-f2142",
	storageBucket: "studio-9794377776-f2142.firebasestorage.app",
	messagingSenderId: "785360545239",
	appId: "1:785360545239:web:527d7ca67e3d646484d792",
	measurementId: "G-EZENGH0DPL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Export the services
export { app, auth, db, storage };
