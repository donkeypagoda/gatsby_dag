import ApolloClient from 'apollo-boost';
import fetch from 'isomorphic-fetch';

export const client = new ApolloClient({
  uri: 'http://drupal-apollo-gatsby-poc.lndo.site/graphql',
  fetch
});
