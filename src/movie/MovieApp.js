import React from 'react'
import { AppProvider } from './context'
import Movies from './Movies'
import SearchForm from './SearchForm'

function MovieApp() {
    return (
      <AppProvider>
        <SearchForm/>
        <Movies/>
      </AppProvider>
    )
}

export default MovieApp
