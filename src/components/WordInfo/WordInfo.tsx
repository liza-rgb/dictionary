import React from "react";

import WordMeaning from "../WordMeaning";
import Phonetics from "../Phonetic";

import { WordInfoType } from "../../helpers/word-info-type";

interface WordInfoProps {
  info: WordInfoType;
}

const WordInfo: React.FC<WordInfoProps> = ({ info }) => {
  return (
    <div className="WordInfo">
      <h2>{info.word}</h2>
      {info.phonetics?.map((phonetic, index) => {
        return (
          <div key={index}>
            <Phonetics phonetic={phonetic} />
          </div>
        );
      })}
      {info.meanings?.map((meaning, index) => {
        return (
          <div key={index}>
            <WordMeaning meaning={meaning} />
          </div>
        );
      })}
    </div>
  );
};

export default WordInfo;
