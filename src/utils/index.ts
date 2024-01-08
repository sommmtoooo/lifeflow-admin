import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";

export function notify(message: string) {
  toast(message, {
    duration: 1000,
    position: "bottom-right",
    className: "bg-primary text-white font-bold",
  });
}

export function generateRandomID(): string {
  const id = uuidv4();
  return id;
}
