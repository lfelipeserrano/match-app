import type React from "react";
import type { Match } from "../types";

interface MatchingResultProps {
  matches: Match[];
}

const MatchingResult: React.FC<MatchingResultProps> = ({ matches }) => {
  return (
    <div className="matching-result">
      <h2>Matching Results</h2>
      {matches.length > 0 ? (
        <ul>
          {matches.map((match, index) => (
            <li key={index}>
              <strong>{match.employee.name}</strong> matched with{" "}
              <strong>{match.manager.name}</strong>
            </li>
          ))}
        </ul>
      ) : (
        <p>
          No matches found yet. Click the "Find Best Matches" button to generate
          matches.
        </p>
      )}
    </div>
  );
};

export default MatchingResult;
