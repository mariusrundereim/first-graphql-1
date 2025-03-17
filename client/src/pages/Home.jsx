import React, { useState } from "react";
import BeerList from "../components/BeerList";
import Filters from "../components/Filters";
import { useBeerById } from "../hooks/useBeers";
import BeerDetail from "../components/BeerDetail";

export default function Home() {
  const [filters, setFilters] = useState({});

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Beer Catalog</h1>

      <Filters onFilterChange={handleFilterChange} />

      {filters.beerId ? <BeerDetail id={filters.beerId} /> : <BeerList />}
    </div>
  );
}
