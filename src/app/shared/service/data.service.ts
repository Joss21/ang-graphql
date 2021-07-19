
import gql from 'graphql-tag';

export const QUERY = gql `
{
  restaurants{
    id
    name
    image
    description
    price
  }
}
`;