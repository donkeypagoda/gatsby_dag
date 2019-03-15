import fetch from 'isomorphic-fetch';
import { ApolloClient } from 'apollo-boost';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

export const client = new ApolloClient({
  link: new HttpLink({uri: 'http://drupalapollogatsbypoc.lndo.site/graphql'}),
  cache: new InMemoryCache(),
  fetch
});
