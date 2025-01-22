import type React from "react";
import type { Employee } from "../types";

interface EmployeeListProps {
  employees: Employee[];
}

const EmployeeList: React.FC<EmployeeListProps> = ({ employees }) => {
  return (
    <div className="list-container">
      <h2>Employees</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            <strong>{employee.name}</strong> - {employee.gender},{" "}
            {employee.experience} years, {employee.domain}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
