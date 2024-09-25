"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    router.push(`?search=${encodeURIComponent(query)}`);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search for your task..."
        className="w-full px-4 py-2 border rounded-full"
        value={searchQuery}
        onChange={handleSearch}
      />
    </div>
  );
}
