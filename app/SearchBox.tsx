"use client";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

const SearchBox = () => {
  const [input, setInput] = useState("");
  const router = useRouter();
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;

    router.push(`/search?term=${input}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="max-w-6xl  mx-auto flex justify-between items-center px-5"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search news..."
        className=" w-full  h-14  rounded-sm  placeholder-gray-500 text-gray-500 outline-none dark:text-orange-400 bg-transparent flex-1"
      />
      <button
        disabled={!input}
        className="text-orange-500 disabled:text-gray-400"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;
