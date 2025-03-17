// src/hooks/useBeers.js
import { useQuery } from "@apollo/client";
import { GET_BEERS } from "../graphql/queries";

export function useBeers() {
  const { loading, error, data, refetch } = useQuery(GET_BEERS);

  return {
    loading,
    error,
    beers: data?.beers || [],
    refetch,
  };
}

// You could also add a hook for getting a single beer by ID
export function useBeerById(id) {
  // You'll need to add this query to your queries.js file
  const GET_BEER_BY_ID = gql`
    query GetBeer($id: ID!) {
      beer(id: $id) {
        id
        name
        description
        abv
        ibu
        style {
          id
          name
          description
          origin
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_BEER_BY_ID, {
    variables: { id },
    skip: !id,
  });

  return {
    loading,
    error,
    beer: data?.beer,
  };
}
