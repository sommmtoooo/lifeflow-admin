import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { database } from ".";
import { Request } from "../types";
import { generateRandomID } from "../utils";

export async function getRequests(): Promise<Array<Request>> {
  const querySnapshot = await getDocs(collection(database, "requests"));
  return querySnapshot.docs.map((doc) => {
    const id = doc.id;
    return { id, ...doc.data() } as Request;
  });
}

export async function createRequest(request: Request): Promise<boolean> {
  const reference = doc(database, "requests", generateRandomID());
  await setDoc(reference, request).then((response) => {
    console.trace(response);
  });
  return true;
}

export async function getRequest(id: string): Promise<Request | null> {
  const reference = doc(database, "requests", id);
  const snapshot = await getDoc(reference);

  if (snapshot.exists()) {
    return snapshot.data() as Request;
  }

  return null;
}

export async function updateRequest(
  id: string,
  data: Omit<Request, "id">,
): Promise<boolean> {
  let status = false;

  const reference = doc(database, "requests", id);

  await updateDoc(reference, data).then(() => {
    status = true;
  });

  return status;
}

export async function deleteRequest(id: string): Promise<boolean> {
  let status = false;
  await deleteDoc(doc(database, "requests", id)).then(() => {
    status = true;
  });

  return status;
}
