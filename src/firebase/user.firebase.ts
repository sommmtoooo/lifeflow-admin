import { collection, doc, getDoc } from "firebase/firestore";
import { database } from ".";
import { getAuth } from "firebase/auth";
import { Admin } from "../types";

export async function getAdmin(): Promise<null | Admin> {
  const reference = doc(database, "admin", getAuth().currentUser?.uid);
  const snapshot = await getDoc(reference);

  return snapshot.exists() ? snapshot.data() : null;
}
