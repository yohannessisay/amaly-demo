"use client";

import { useState } from "react";
import { addCharacter, Character } from "@/utils/Api";
import { useRouter } from "next/navigation";
import InputField from "@/components/InputField";

export default function CreateCharacter() {
  const router = useRouter();
  const [characterForm, setCharacterForm] = useState<Character>({
    name: "",
    status: "",
    species: "",
    imageURL: "",
    locallySaved:true
  });

  const handleCharacterSave = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await addCharacter(characterForm);
    if (res) {
      router.push("/");
    } else {
      console.error("ERROR");
    }
  };

  return (
    <div className="flex items-center flex-col gap-4 justify-center min-h-screen p-8">
      <form
        onSubmit={handleCharacterSave}
        className="flex flex-col gap-4 rounded-md border-white border p-8 bg-gray-800 shadow-md"
      >
        <InputField
          label="Character Name"
          id="character-name"
          value={characterForm.name}
          onChange={(value:string) =>
            setCharacterForm((prev) => ({ ...prev, name: value }))
          }
        />
        <InputField
          label="Character Status"
          id="character-status"
          value={characterForm.status}
          onChange={(value:string) =>
            setCharacterForm((prev) => ({ ...prev, status: value }))
          }
        />
        <InputField
          label="Character Species"
          id="character-species"
          value={characterForm.species}
          onChange={(value:string) =>
            setCharacterForm((prev) => ({ ...prev, species: value }))
          }
        />
        <InputField
          label="Character Image URL"
          id="character-image"
          value={characterForm.imageURL}
          onChange={(value:string) =>
            setCharacterForm((prev) => ({ ...prev, imageURL: value }))
          }
        />

        <div className="flex justify-center my-1">
          <button
            type="submit"
            className="bg-green-500 hover:bg-white hover:text-green-500 font-medium px-4 py-2 rounded-lg w-32 h-12 transition-all ease-in-out duration-300"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
