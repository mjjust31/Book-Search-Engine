import { gql } from "@apollo/client";


//this is what I am expecting to get back when creating a new user when using this mutation.
export const CREATE_USER = gql`
  mutation Mutation($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      _id
      username
      email
    }
  }
`;
