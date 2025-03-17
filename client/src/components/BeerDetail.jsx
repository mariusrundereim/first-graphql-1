import React from "react";
import { Link } from "react-router-dom";
import { useBeerById } from "../hooks/useBeers";

export default function BeerDetail({ id }) {
  const { loading, error, beer } = useBeerById(id);

  if (loading)
    return <div className="text-center py-10">Loading beer details...</div>;

  if (error)
    return (
      <div className="text-center py-10 text-red-600">
        Error loading beer: {error.message}
      </div>
    );

  if (!beer) {
    return <div className="text-center py-10">Beer not found</div>;
  }

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{beer.name}</h1>
        <div className="text-blue-600 mb-4">
          {beer.style.name} • {beer.style.origin || "Unknown origin"}
        </div>
        <p className="text-gray-700 mb-6">{beer.description}</p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-amber-50 p-4 rounded-lg">
            <div className="text-sm text-gray-500">Alcohol by Volume</div>
            <div className="text-2xl font-bold text-amber-800">{beer.abv}%</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="text-sm text-gray-500">
              International Bitterness Units
            </div>
            <div className="text-2xl font-bold text-green-800">
              {beer.ibu || "N/A"}
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <h3 className="font-medium text-gray-700 mb-2">About this style</h3>
          <p className="text-gray-600">
            {beer.style.description || "No description available"}
          </p>
        </div>
      </div>

      <Link
        to="/"
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        ← Back to All Beers
      </Link>
    </div>
  );
}
