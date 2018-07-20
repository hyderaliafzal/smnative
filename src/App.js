import React, {Component} from 'react';
import Home from './index';
import { AppRegistry } from 'react-native';
import { ApolloProvider } from "react-apollo";
import {ApolloClient, HttpLink, InMemoryCache} from 'apollo-client-preset';
const networkInterface = new HttpLink({uri: 'https://sikandermuseum-graphql-server.herokuapp.com/graphql'});
const client = new ApolloClient({
    link: networkInterface,
    cache: new InMemoryCache()
});


export default class App extends Component{
  render() {
    return(
      <ApolloProvider client={client}>
        <Home/>
      </ApolloProvider>
    );
  }
}

AppRegistry.registerComponent('App', () => App);

