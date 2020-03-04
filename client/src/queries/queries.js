import gql from 'graphql-tag';
const getAuthorQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

const addBookMutatoin = gql`
  mutation($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`;

const getBookQuery = gql`
  query($id: ID!) {
    book(id: $id) {
      name
      genre
      id
      author {
        name
        age
      }
    }
  }
`;

export { getAuthorQuery, getBooksQuery, addBookMutatoin, getBookQuery };
