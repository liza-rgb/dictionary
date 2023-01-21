import React from "react";

import WordMeaning from "../WordMeaning";
import Phonetics from "../Phonetics";

import { WordInfoType } from "../../helpers/word-info-type";

interface WordInfoProps {
  info: WordInfoType;
}

const WordInfo: React.FC<WordInfoProps> = ({ info }) => {
  return (
    <div className="WordInfo">
      <section>
        <h2 className="fw-bold fs-3"> {info.word}</h2>
        {info.phonetics ? <Phonetics phonetics={info.phonetics} /> : ""}
      </section>
      {info.meanings?.map((meaning, index) => {
        return (
          <section key={index}>
            <WordMeaning meaning={meaning} />
          </section>
        );
      })}
    </div>
  );
};

export default WordInfo;
