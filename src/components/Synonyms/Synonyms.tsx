import React from "react";

import "./Synonyms.css";

interface SynonymsProps {
  synonyms: string[];
}

const Synonyms: React.FC<SynonymsProps> = ({ synonyms }) => {
  return (
    <div className="Synonyms">
      <ul>
        {synonyms.map((synonym, index) => {
          return <li key={index}>{synonym}</li>;
        })}
      </ul>
    </div>
  );
};

export default Synonyms;
