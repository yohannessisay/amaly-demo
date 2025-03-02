"use client";

import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return (
    <div className="bg-gray-800 mb-8 rounded-md  text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">Rick and Morty Characters</h1>
      <button
        onClick={() => router.push("/create-character")}
        className="bg-green-500 hover:bg-white hover:text-green-500 font-medium px-4 py-2 rounded-lg transition-all ease-in-out duration-300 "
      >
        + Add Character
      </button>
    </div>
  );
}
