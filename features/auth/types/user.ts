export type Role = "ADMIN" | "CASHIER" | "USER";
export type Status = "ACTIVE" | "INACTIVE";

export type User = {
  fullName?: string | null;
  phoneNumber?: string | null;
  email: string;
  city?: string | null;
  dateOfBirth?: Date | null;
  role: Role;
  id: string;
  status: Status;
  avatar?: string | null;
};
