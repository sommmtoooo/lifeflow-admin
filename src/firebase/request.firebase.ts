import { collection, getDocs } from "firebase/firestore";
import { database } from ".";
import { Request } from "../types";

export async function getRequests(): Promise<Array<Request>> {
  const querySnapshot = await getDocs(collection(database, "requests"));
  return querySnapshot.docs.map((doc) => {
    const id = doc.id;
    return { id, ...doc.data() } as Request;
  });
}
