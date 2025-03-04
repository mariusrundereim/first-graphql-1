import { gql } from "@apollo/client";

export const ADD_BEER = gql`
  mutation AddBeer(
    $name: String!
    $description: String
    $abv: Float
    $ibu: Int
    $styleId: ID!
  ) {
    addBeer(
      name: $name
      description: $description
      abv: $abv
      ibu: $ibu
      styleId: $styleId
    ) {
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
