import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { useQuery } from '@apollo/react-hooks';
import {
  getAuthorQuery,
  addBookMutatoin,
  getBooksQuery
} from '../queries/queries';

function AddBook({ setRefresh }) {
  const { data, loading, refetch } = useQuery(getAuthorQuery);
  const [addBook] = useMutation(addBookMutatoin);
  const [bookName, setBookName] = useState();
  const [bookGenre, setBookGenre] = useState();
  const [bookAuthorId, setBookAuthorId] = useState();

  const handleInputChange = e => {
    if (e.target.name === 'bookname') {
      setBookName(e.target.value);
    } else if (e.target.name === 'bookgenre') {
      setBookGenre(e.target.value);
    } else {
      setBookAuthorId(e.target.value);
    }
  };
  const handleSubmitButton = e => {
    e.preventDefault();
    addBook({
      variables: { name: bookName, genre: bookGenre, authorId: bookAuthorId },
      refetchQueries: [{ query: getBooksQuery }]
    });
    setRefresh(true);
  };

  const displayAuthor = () => {
    if (loading) {
      return <option>Loading authors</option>;
    }
    return data ? (
      data.authors.map(author => {
        return (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        );
      })
    ) : (
      <>Loading</>
    );
  };

  return (
    <>
      <form>
        Book name:{' '}
        <input type="text" name="bookname" onChange={handleInputChange} />
        Genre:{' '}
        <input type="text" name="bookgenre" onChange={handleInputChange} />
        Author:{' '}
        <select onChange={handleInputChange} name="author">
          {' '}
          <option>Select Author</option>
          {displayAuthor()}/
        </select>
        <input type="submit" value="Add book" onClick={handleSubmitButton} />
      </form>
      <button onClick={() => refetch()}>Refetch</button>
    </>
  );
}
export default AddBook;
