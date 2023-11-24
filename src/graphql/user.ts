import { gql } from "@apollo/client";

export const STUDENT_REGISTER = gql`
  mutation studentRegister($account: String!, $password: String!) {
    studentRegister(account: $account, password: $password) {
      code
      message
    }
  }
`;

export const STUDENT_LOGIN = gql`
  mutation studentLogin($account: String!, $password: String!) {
    studentLogin(account: $account, password: $password) {
      code
      message
      data
    }
  }
`;

export const GET_STUDENT_INFO = gql`
  query getStudentInfo {
    getStudentInfo {
      code
      message
      data {
        name
        id
        avatar
        tel
      }
    }
  }
`;

export const GET_USER = gql`
  query getUserInfo {
    getUserInfo {
      id
      tel
      desc
      name
      avatar
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUserInfo($id: String!, $params: UserInput!) {
    updateUserInfo(id: $id, params: $params) {
      code
      message
    }
  }
`;

export const COMMIT_STUDENT_INFO = gql`
  mutation commitStudentInfo($params: StudentInput!) {
    commitStudentInfo(params: $params) {
      code
      message
    }
  }
`;
