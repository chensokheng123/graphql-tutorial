import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { getBookQuery } from '../queries/queries';

function BookDetail({ bookId }) {
  const { data, loading } = useQuery(getBookQuery, {
    variables: { id: bookId }
  });
  return data ? (
    <>
      <h1> Book Detail</h1>
      <p>Book name: {data.book.name}</p>
    </>
  ) : (
    <h1>No book selected</h1>
  );
}

export default BookDetail;
