export interface Person {
  id: number;
  name: string;
  gender: "male" | "female";
  experience: number;
  domain: string;
}

export interface Manager extends Person {}

export interface Employee extends Person {}

export interface Match {
  employee: Employee;
  manager: Manager;
}
