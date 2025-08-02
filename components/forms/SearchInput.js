// components/ui/SearchInput.jsx

import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { Input } from "@/components/ui/input";

export function SearchInput({ placeholder = "Search...", className = "" }) {
  return (
    <div className="relative w-full">
      <HiMiniMagnifyingGlass className="absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="search"
        placeholder={placeholder}
        className={`ps-10 ${className}`}
      />
    </div>
  );
}
