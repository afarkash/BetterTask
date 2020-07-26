import React from 'react';
import logo from './logo.svg';
import './App.css';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import UserView from './UserView'

const client = new ApolloClient({
  uri: "https://graphqlzero.almansi.me/api"
});

function App() {
  return (

    <ApolloProvider client={client}>
    <div>
      <h2>My first Apollo app</h2>
      <UserView />
    </div>
  </ApolloProvider>
  );
}

export default App;
