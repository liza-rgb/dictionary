import React from "react";

import { PhoneticType } from "../../helpers/word-info-type";

interface PhoneticProps {
  phonetic: PhoneticType;
}

const Phonetic: React.FC<PhoneticProps> = ({ phonetic }) => {
  return (
    <div className="Phonetics">
      <a href={phonetic.audio} target="_blank" rel="noreferrer">
        Listen
      </a>
      <div>{phonetic.text}</div>
    </div>
  );
};

export default Phonetic;
