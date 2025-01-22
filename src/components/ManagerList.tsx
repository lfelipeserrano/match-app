import type React from "react";
import type { Manager } from "../types";

interface ManagerListProps {
  managers: Manager[];
}

const ManagerList: React.FC<ManagerListProps> = ({ managers }) => {
  return (
    <div className="list-container">
      <h2>Managers</h2>
      <ul>
        {managers.map((manager) => (
          <li key={manager.id}>
            <strong>{manager.name}</strong> - {manager.gender},{" "}
            {manager.experience} years, {manager.domain}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManagerList;
