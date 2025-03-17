import React, { useState } from "react";

export default function Filters({ onFilterChange }) {
  const [beerId, setBeerId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilterChange({ beerId });
  };

  const handleClear = () => {
    setBeerId("");
    onFilterChange({});
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 bg-white p-4 rounded-lg shadow"
    >
      <div className="mb-4">
        <label
          htmlFor="beerId"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Filter by Beer ID
        </label>
        <input
          type="text"
          id="beerId"
          value={beerId}
          onChange={(e) => setBeerId(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter beer ID"
        />
      </div>

      <div className="flex justify-between">
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Apply Filter
        </button>
        <button
          type="button"
          onClick={handleClear}
          className="text-gray-700 bg-gray-100 px-4 py-2 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          Clear
        </button>
      </div>
    </form>
  );
}
