export interface Character {
  name: string;
  status: string;
  species: string;
  imageURL: string;
  locallySaved:boolean;
}


export const fetchCharacters = async ({ pageParam = 1 }) => {
  const API_URL = `https://rickandmortyapi.com/api/character?page=${pageParam}`;
  const res = await fetch(API_URL).then((res) => res.json());
 
  const localCharacters = getLocalCharacters();
 
  return {
    info: res.info,
    results: [...localCharacters, ...res.results],
  };
};

export const addCharacter = async (character: Character) => {
  try {
    character.locallySaved = true;
    localStorage.setItem(character.name, JSON.stringify(character));
    return true;
  } catch {
    return false;
  }
};

export const getLocalCharacters = (): Character[] => {
  const keys = Object.keys(localStorage);
  return keys
    .map((key) => {
      try {
        //Here ally-supports-cache is next js related info so we skip it
        if (key !== "ally-supports-cache") {
          return JSON.parse(localStorage.getItem(key) as string) as Character;
        }
      } catch {
        return undefined;
      }
    })
    .filter((char): char is Character => char !== undefined);
};
