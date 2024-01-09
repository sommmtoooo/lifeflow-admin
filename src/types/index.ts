export type Admin = {
  username: string;
};

export type User = {
  firstname: string;
  lastname: string;
  email: string;
  bloodGroup: string;
};

export type Request = {
  id: string;
  centerName: string;
  centerLocation: string;
  bloodGroup: string;
  packs: number;
  dueDate: Date;
  urgent: boolean;
  status: "FULFILLED" | "PENDING" | "CLOSED";
};

export type Donation = {
  id: string;
  userID: string;
  requestID: string;
  description: string;
  status: "FULFILLED" | "ISSUE";
};
