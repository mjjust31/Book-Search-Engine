import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query getSingleUser {
    getSingleUser {
      username
      email
      password
    }
  }
`;
