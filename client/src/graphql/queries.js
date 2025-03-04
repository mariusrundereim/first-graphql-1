import { gql } from "@apollo/client";

export const GET_BEERS = gql`
  query GetBeers {
    beers {
      id
      name
      description
      abv
      ibu
      style {
        id
        name
      }
    }
  }
`;
