import React from "react";

import Synonyms from "../Synonyms";

import { MeaningType } from "../../helpers/word-info-type";

import "./WordMeaning.css";

interface WordMeaningProps {
  meaning: MeaningType;
}

const WordMeaning: React.FC<WordMeaningProps> = ({ meaning }) => {
  const getExample = (text: string) => {
    return <em className="example">{text}</em>;
  };

  const getSynonyms = (synonyms: string[]) => {
    return <Synonyms synonyms={synonyms} />;
  };

  return (
    <div className="WordMeaning">
      <h3 className="fw-bold fs-4">{meaning.partOfSpeech}</h3>
      {meaning.definitions.map((definition, index) => {
        return (
          <div key={index} className="mt-3">
            {index ? <div className="fw-bold mb-1">Similar:</div> : ""}
            <div className="m-0">{definition.definition}</div>
            {definition.example ? getExample(definition.example) : ""}
            {definition.synonyms.length ? getSynonyms(definition.synonyms) : ""}
          </div>
        );
      })}
    </div>
  );
};

export default WordMeaning;
