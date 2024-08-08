import { gql } from '@apollo/client'

export const SAVE_BOOK = gql`
   mutation saveBook($bookId: ID!, $authors: [String], $description: String, $image: String, $link: String){
      saveBook(bookId: $bookId, authors: $authors, description: $description, image: $image, link: $link){
         _id
         username
         email
         savedBooks{
            bookId
            description
            image
            title
            link
            authors
         }
      }
   }
`

export const REMOVE_BOOK = gql`
   mutation removeBook($bookId: ID!){
      removeBook(bookId: $bookId){
         _id
         username
         email
         savedBooks{
            bookId
            description
            image
            title
            link
            authors
         }
      }
   }
`

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;