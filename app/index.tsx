import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import App from './App';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://pokeql.com/v1',
  }),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App title='pokedex' client={client} />
  </ApolloProvider>,
  document.getElementById('root'),
);
