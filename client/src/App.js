import React, { useEffect } from 'react';
import './App.css';
import BookList from './components/BookList';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import AddBook from './components/AddBook';

const client = new ApolloClient({
  uri: 'http://10.0.32.241:5000/graphql'
});

function App() {
  const [refresh, setRefresh] = React.useState();
  useEffect(() => {}, [refresh]);
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Sokeng reading list</h1>
        <div>
          <BookList />
          <AddBook setRefresh={setRefresh} />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
