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

export type PhoneticType = {
  text: string;
  audio: string;
  sourceUrl?: string;
  license?: {
    name: string;
    url: string;
  };
};

export type WordInfoType = {
  word?: string;
  phonetics?: PhoneticType[];
  meanings?: MeaningType[];
};
