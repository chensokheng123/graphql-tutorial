import React, { useState, useEffect } from 'react';
import { graphql } from 'react-apollo';
import { getBooksQuery } from '../queries/queries';
import { useQuery } from '@apollo/react-hooks';
import BookDetail from './BookDetail';

function BookList(props) {
  const { data, loading } = useQuery(getBooksQuery);

  const [selectedBookId, setSelectedBookId] = useState(null);
  const displayBook = () => {
    if (loading && !data) {
      return <h1>Loading</h1>;
    }
    return data ? (
      data.books.map(book => {
        return (
          <li key={book.id} onClick={() => setSelectedBookId(book.id)}>
            {book.name}
          </li>
        );
      })
    ) : (
      <h1>Loading</h1>
    );
  };
  console.log(props);
  return (
    <>
      <h1>Book list</h1>
      {displayBook()}
      {/* <BookDetail bookId={selectedBookId} /> */}
    </>
  );
}

export default graphql(getBooksQuery)(BookList);
