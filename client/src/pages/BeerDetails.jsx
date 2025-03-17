import React from "react";
import { useParams } from "react-router-dom";
import BeerDetail from "../components/BeerDetail";

export default function BeerDetailsPage() {
  const { id } = useParams();

  return (
    <div className="container mx-auto px-4 py-8">
      <BeerDetail id={id} />
    </div>
  );
}
