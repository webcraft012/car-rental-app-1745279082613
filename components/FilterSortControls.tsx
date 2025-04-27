"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FilterSortControlsProps {
  currentFilter: string;
  currentSort: string;
  onFilterChange: (filter: string) => void;
  onSortChange: (sort: string) => void;
}

export function FilterSortControls({
  currentFilter,
  currentSort,
  onFilterChange,
  onSortChange,
}: FilterSortControlsProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="flex-1">
        <Select value={currentFilter} onValueChange={onFilterChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex-1">
        <Select value={currentSort} onValueChange={onSortChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Sort" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="status">Status</SelectItem>
            {/* Add other sort options here if needed */}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}