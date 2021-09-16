import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import Home from './Home'
import Search from './Search'

function GraphqlApp() {
    const client= new ApolloClient({
        cache: new InMemoryCache(),
        uri:"https://countries.trevorblades.com",
        
    })
    return (
        <div>
           <ApolloProvider client={client}>
            <Router>
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/search" exact component={Search}></Route>
                </Switch>
            </Router>
            </ApolloProvider>
        </div>
    )
}

export default GraphqlApp
