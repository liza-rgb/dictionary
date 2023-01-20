export type DefinitionType = {
  definition: string;
  synonyms: String[];
  antonyms: String[];
  example: string;
};

export type MeaningType = {
  partOfSpeech: string;
  definitions: DefinitionType[];
  synonyms: String[];
  antonyms: String[];
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
