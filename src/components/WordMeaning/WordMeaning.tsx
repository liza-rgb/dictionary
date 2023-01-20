import React from "react";

import Synonyms from "../Synonyms";

import { MeaningType } from "../../helpers/word-info-type";

interface WordMeaningProps {
  meaning: MeaningType;
}

const WordMeaning: React.FC<WordMeaningProps> = ({ meaning }) => {
  return (
    <div className="WordMeaning">
      <h3>{meaning.partOfSpeech}</h3>
      {meaning.definitions.map((definition, index) => {
        return (
          <div key={index}>
            <p>{definition.definition}</p>
            <br />
            <em>{definition.example}</em>
            {definition.synonyms.length > 0 ? (
              <Synonyms synonyms={definition.synonyms} />
            ) : (
              ""
            )}
          </div>
        );
      })}
    </div>
  );
};

export default WordMeaning;
