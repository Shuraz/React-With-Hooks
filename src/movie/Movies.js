import React from 'react'
import { useGlobalContext } from './context'
import { Link } from 'react-router-dom'
const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

const Movies = () => {
  const { movies, isLoading } = useGlobalContext()
  console.log(movies)
  if (isLoading) {
    return <div className='loading'></div>
  }

  return (

    <div>
      {
        movies.map((movie)=>{
          const {Poster,Title,Year,imdbID}=movie;
          return(
            <article>
              <img src={Poster} alt={Title} />
              <h4>{Title}</h4>
              <p>{Year}</p>
            </article>
          )
        })
      }
    </div>
  )
}

export default Movies
