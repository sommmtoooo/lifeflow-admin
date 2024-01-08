import {
  DocumentData,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
} from "firebase/firestore";
import { database } from ".";
import { getAuth } from "firebase/auth";
import { User } from "../types";

export async function getAdmin(): Promise<null | DocumentData> {
  const reference = doc(database, "admin", getAuth().currentUser?.uid);
  const snapshot = await getDoc(reference);
  return snapshot.exists() ? snapshot.data() : null;
}

export async function getDonors(): Promise<null | Array<User>> {
  const snapshot = await getDocs(collection(database, "users"));
  return snapshot.docs.map((doc) => {
    return doc.data() as User;
  });
}
