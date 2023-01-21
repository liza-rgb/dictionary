import React from "react";

import { ReactComponent as VolumeIcon } from "../../icons/volume.svg";

import { PhoneticType } from "../../helpers/word-info-type";

import "./Phonetic.css";

interface PhoneticProps {
  phonetic: PhoneticType;
}

const Phonetic: React.FC<PhoneticProps> = ({ phonetic }) => {
  const getAudio = () => {
    return (
      <a href={phonetic.audio} target="_blank" rel="noreferrer">
        <VolumeIcon />
      </a>
    );
  };

  return (
    <div className="Phonetic">
      <div>{phonetic.text}</div>
      {phonetic.audio.length ? getAudio() : ""}
    </div>
  );
};

export default Phonetic;
