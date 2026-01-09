"use client"; // Make this a client-side page in Next.js 13+

import { useState } from "react";
import { auth, db, storage } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function FirebaseTest() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);

  const handleSignUp = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      alert("User signed up: " + user.user.email);
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  const handleSignIn = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      alert("User logged in: " + user.user.email);
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  const handleSaveData = async () => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        email,
        createdAt: new Date()
      });
      alert("Data saved with ID: " + docRef.id);
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  const handleUploadFile = async () => {
    if (!file) return alert("Select a file first!");
    try {
      const storageRef = ref(storage, "myFiles/" + file.name);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      alert("File uploaded! URL: " + url);
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Firebase Test</h1>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} /><br />
      <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} /><br />
      <button onClick={handleSignUp}>Sign Up</button>
      <button onClick={handleSignIn}>Sign In</button><br /><br />

      <button onClick={handleSaveData}>Save Data to Firestore</button><br /><br />

      <input type="file" onChange={e => setFile(e.target.files[0])} /><br />
      <button onClick={handleUploadFile}>Upload File</button>
    </div>
  );
}
