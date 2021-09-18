import React from 'react'
import {ApolloClient, InMemoryCache, ApolloProvider, HttpLink} from '@apollo/client'
import Home_weather from './page/Home_weather'
function WeatherApp() {
    const client = new ApolloClient({
        cache:new InMemoryCache(),
        uri:"https://graphql-weather-api.herokuapp.com/"
    })
    return (
        
            <ApolloProvider ApolloProvider client={client}>
            <Home_weather/>
            </ApolloProvider> 
    )}
export default WeatherApp
