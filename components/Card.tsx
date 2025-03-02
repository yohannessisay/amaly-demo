
import Image from "next/image";

interface Character {
  id: number;
  name: string;
  image?: string;
  species: string;
  status: string;
  locallySaved?: boolean;
  deleteCharacter: (name: string) => void;
  getStatusBadge: (status: string) => string;
}

const Card: React.FC<Character> = ({
  id,
  name,
  image,
  species,
  status,
  locallySaved,
  deleteCharacter,
  getStatusBadge,
}) => {
  return (
    <div
      key={id}
      className="border shadow-md p-4 rounded-lg text-black flex flex-col items-center bg-gray-800"
    >
      {image ? (
        <Image
          src={image}
          width={150}
          height={150}
          alt={name || "Character Image"}
          className="w-32 h-32 rounded-full object-cover shadow-md"
          priority={id === 2}
        />
      ) : (
        <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
          No Image
        </div>
      )}
      <h2 className="mt-3 text-white text-lg font-semibold">{name}</h2>
      <p className="text-gray-400">{species}</p>
      <span
        className={`mt-2 px-3 py-1 rounded-md text-sm font-medium ${getStatusBadge(
          status?.toLowerCase()
        )}`}
      >
        {status}
      </span>
      {locallySaved && (
        <button
          onClick={() => deleteCharacter(name)}
          className="bg-white my-2 hover:bg-orange-500 text-orange-500 hover:text-white font-medium px-4 py-2 rounded-lg transition-all ease-in-out duration-300 "
        >
          Delete Character
        </button>
      )}
    </div>
  );
};

export default Card;
