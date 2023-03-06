import React, { useState } from 'react'
import { useQuery,gql,useLazyQuery } from '@apollo/client'



const QUERY_ALL_USER= gql`
    query ExampleQuery {
  users {
    id
    name
    username
    nationality
    
  }
} `


const QUERY_MOVIE=gql`
 query allMovie{
  movies {
    name
    yearOfPublication
    isInTheaters
  }
}`


const QUERY_MOVIE_BY_NAME= gql`
query  Movie($name: String) {
    getMovie(name: $name) {
    name
    yearOfPublication
    isInTheaters
    }
}`



const Displaydata = () => {

const[fetchMovieByName,{data:uniqueMovie,error:Uniqueerror}]=useLazyQuery(QUERY_MOVIE_BY_NAME)

const [movieSearched,setMovieSearched]= useState("")

const {data,loading,error} =useQuery(QUERY_ALL_USER)


const {data:moviedata}=useQuery(QUERY_MOVIE)

//  if (data){

//     console.log(data)}
 
// if (error){
//     console.log(error)
// }


  return (
    <div>
        
{loading && (<h1>Loading</h1>)}

        {data && data.users.map((user)=>(<h2>{user.name}</h2>))

        }
      

      { moviedata && moviedata.movies.map((movie)=>(<h3>{movie.name}</h3>))
       }


     <div>
       
       <input type="text"  placeholder='Enter Movie' onChange={(event)=>{setMovieSearched(event.target.value)}} />
       <button onClick={()=> {fetchMovieByName({
         variables:{
           name: movieSearched
         }  

       })} }>Fetch Movie</button>


       <div>{
       uniqueMovie &&(
             <div>
                <h5>{uniqueMovie.movie.name}</h5>
                <h5>{uniqueMovie.movie.yearOfPublication   }</h5>
             </div>


        )
        
        
        }</div>

     </div>

           
      
    </div>
  )
}

export default Displaydata
