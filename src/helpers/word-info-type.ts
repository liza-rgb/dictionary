export type DefinitionType = {
  definition: string;
  synonyms: string[];
  antonyms: string[];
  example: string;
};

export type MeaningType = {
  partOfSpeech: string;
  definitions: DefinitionType[];
  synonyms: string[];
  antonyms: string[];
};

export type PhoneticsType = [
  {
    audio: string;
    sourceUrl: string;
    license: {
      name: string;
      url: string;
    };
  },
  {
    text: string;
    audio: string;
  }
];

export type WordInfoType = {
  word?: string;
  phonetics?: PhoneticsType;
  meanings?: MeaningType[];
};
