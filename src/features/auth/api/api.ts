import { gql } from "@apollo/client";

export const SignUpAPI = gql`
  mutation example($input: UsersPermissionsRegisterInput!) {
    register(input: $input) {
      jwt
      user {
        username
        email
      }
    }
  }
`;

export type RegisterDTO = {
  email: string;
  username: string;
  password: string;
};
