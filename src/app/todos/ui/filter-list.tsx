"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function FilterSelect() {
  const [filter, setFilter] = useState<"all" | "completed">("all");
  const router = useRouter();

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newFilter = e.target.value as "all" | "completed";
    setFilter(newFilter);
    router.push(`?filter=${newFilter}`);
  };

  return (
    <select
      className="border px-3 py-1 rounded-full"
      value={filter}
      onChange={handleFilterChange}
    >
      <option value="all">Today</option>
      <option value="completed">Completed</option>
    </select>
  );
}
