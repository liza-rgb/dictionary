import React from "react";

interface SynonymsProps {
  synonyms: string[];
}

const Synonyms: React.FC<SynonymsProps> = ({ synonyms }) => {
  return (
    <div className="Synonyms">
      Synonyms: {synonyms}
      <ul>
        {synonyms.map((synonym, index) => {
          return <li key={index}>{synonym}</li>;
        })}
      </ul>
    </div>
  );
};

export default Synonyms;
