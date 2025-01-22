import React, { useState } from "react";
import ManagerList from "./components/ManagerList.tsx";
import EmployeeList from "./components/EmployeeList.tsx";
import MatchingResult from "./components/MatchingResult.tsx";
import type { Manager, Employee, Match } from "./types";
import "./App.css";

const initialManagers: Manager[] = [
  { id: 1, name: "John", gender: "male", experience: 10, domain: "tech" },
  { id: 2, name: "Jason", gender: "male", experience: 8, domain: "finance" },
  {
    id: 3,
    name: "Sarah",
    gender: "female",
    experience: 12,
    domain: "marketing",
  },
];

const initialEmployees: Employee[] = [
  { id: 1, name: "Terry", gender: "male", experience: 5, domain: "tech" },
  { id: 2, name: "Tracy", gender: "female", experience: 3, domain: "finance" },
  { id: 3, name: "Nick", gender: "male", experience: 7, domain: "marketing" },
];

function App() {
  const [managers, setManagers] = useState<Manager[]>(initialManagers);
  const [employees, setEmployees] = useState<Employee[]>(initialEmployees);
  const [matches, setMatches] = useState<Match[]>([]);

  const findBestMatches = () => {
    const newMatches: Match[] = [];

    employees.forEach((employee) => {
      const bestManager = managers.reduce((best, manager) => {
        const score = calculateMatchScore(employee, manager);
        return score > calculateMatchScore(employee, best) ? manager : best;
      });

      newMatches.push({ employee, manager: bestManager });
    });

    setMatches(newMatches);
  };

  const calculateMatchScore = (
    employee: Employee,
    manager: Manager
  ): number => {
    let score = 0;
    if (employee.domain === manager.domain) score += 3;
    if (employee.gender !== manager.gender) score += 1;
    score += Math.min(employee.experience, manager.experience) / 2;
    return score;
  };

  return (
    <div className="App">
      <h1>Employee-Manager Matcher</h1>
      <div className="lists-container">
        <ManagerList managers={managers} />
        <EmployeeList employees={employees} />
      </div>
      <button onClick={findBestMatches} className="match-button">
        Find Best Matches
      </button>
      <MatchingResult matches={matches} />
    </div>
  );
}

export default App;
