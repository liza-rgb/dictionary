import React from "react";

import Phonetic from "../Phonetic/Phonetic";

import { PhoneticType } from "../../helpers/word-info-type";

interface PhoneticsProps {
  phonetics: PhoneticType[];
}

const Phonetics: React.FC<PhoneticsProps> = ({ phonetics }) => {
  const phoneticsList = phonetics.filter((phonetic) => phonetic.text);

  return (
    <div className="Phonetics d-flex">
      {phoneticsList?.map((phonetic, index) => {
        return (
          <div key={index} className="d-flex">
            {index ? <span className="mx-2">or</span> : ""}
            <Phonetic phonetic={phonetic} />
          </div>
        );
      })}
    </div>
  );
};

export default Phonetics;
