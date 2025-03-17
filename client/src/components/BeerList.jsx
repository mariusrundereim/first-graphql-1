import React from "react";
import BeerCard from "./BeerCard";
import { useBeers } from "../hooks/useBeers";

export default function BeerList() {
  const { loading, error, beers } = useBeers();

  if (loading) return <div className="text-center py-10">Loading beers...</div>;

  if (error)
    return (
      <div className="text-center py-10 text-red-600">
        Error loading beers: {error.message}
        <pre className="mt-4 text-xs bg-gray-100 p-4 rounded overflow-auto">
          {JSON.stringify(error, null, 2)}
        </pre>
      </div>
    );

  if (beers.length === 0) {
    return <div className="text-center py-10">No beers found</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {beers.map((beer) => (
        <BeerCard key={beer.id} beer={beer} />
      ))}
    </div>
  );
}
