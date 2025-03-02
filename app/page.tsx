/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import Header from "@/components/Header";
import { fetchCharacters } from "@/utils/Api";
import Card from "@/components/Card"; // Import the Card component
import { useCallback, useEffect } from "react";

export default function Home() {
  const queryClient = useQueryClient();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["characters"],
      queryFn: fetchCharacters,
      initialPageParam: 1,
      getNextPageParam: (lastPage) => {
        const nextPage = lastPage.info.next
          ? new URL(lastPage.info.next).searchParams.get("page")
          : undefined;
        return nextPage ? Number(nextPage) : undefined;
      },
    });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "alive":
        return "bg-green-500 text-white";
      case "dead":
        return "bg-red-500 text-white";
      default:
        return "bg-gray-400 text-white";
    }
  };

  const deleteCharacter = (characterName: string) => {
    localStorage.removeItem(characterName);
    queryClient.invalidateQueries({ queryKey: ["characters"] });
  };

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 500
    ) {
      if (hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="min-h-screen bg-black p-6">
      <Header />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.pages.map((page) =>
          page.results.map((character: any,index:number) => (
            <Card
              key={index}
              id={character.id}
              name={character.name}
              image={character.image}
              species={character.species}
              status={character.status}
              locallySaved={character.locallySaved}
              deleteCharacter={deleteCharacter}
              getStatusBadge={getStatusBadge}
            />
          ))
        )}
      </div>
      {isFetchingNextPage && (
        <div className="mt-6 text-center text-white">Loading more...</div>
      )}
    </div>
  );
}