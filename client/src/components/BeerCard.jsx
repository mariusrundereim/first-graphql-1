import React from "react";
import { Link } from "react-router-dom";

export default function BeerCard({ beer }) {
  if (!beer) return null;

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">{beer.name}</h2>

        {/* Safely handle missing style */}
        {beer.style && (
          <div className="text-sm text-blue-600 mb-2">{beer.style.name}</div>
        )}

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {beer.description}
        </p>

        <div className="flex justify-between items-center text-sm">
          <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded">
            ABV: {beer.abv}%
          </span>
          {beer.ibu && (
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
              IBU: {beer.ibu}
            </span>
          )}
        </div>
      </div>
      <div className="bg-gray-50 px-4 py-2 border-t">
        <Link
          to={`/beer/${beer.id}`}
          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
