import { collection, addDoc } from "firebase/firestore";
import { db } from "../firbase/config";
import { useState, useEffect } from "react";

export const useWriteToDb = (data, collectionName) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const addToDb = async () => {
    setIsSubmitting(true);
    try {
      const hostelRef = await addDoc(collection(db, `${collectionName}`), data);
      setIsSubmitting(false);
      setMessage("Data saved successful");
    } catch (e) {
      setIsSubmitting(false);
      setError("Sorry somthing went wrong");
    }
  };

  return [message, isSubmitting, error];
};
