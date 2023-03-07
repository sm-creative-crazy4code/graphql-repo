import React, { useState } from 'react'
import { useQuery,gql,useLazyQuery, useMutation } from '@apollo/client'



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
 


const CREATE_USER_MUTATION = gql`
mutation  CreateUser($input:CreateUserInput!){
  createUser(input: $input){
    name
    id
  }


}

`






const Displaydata = () => {

const[fetchMovieByName,{data:uniqueMovie,error:Uniqueerror}]=useLazyQuery(QUERY_MOVIE_BY_NAME)

const [movieSearched,setMovieSearched]= useState("")

const {data,loading,refetch} =useQuery(QUERY_ALL_USER)


const {data:moviedata}=useQuery(QUERY_MOVIE)

//  if (data){

//     console.log(data)}
 
// if (error){
//     console.log(error)
// }


const[name,setName]=useState("")
const[username,setUsername]=useState("")
const[age,setAge]=useState(0)
const[nationality,setNationality]=useState("")



const [createUser]= useMutation(CREATE_USER_MUTATION)



  return (
    <div>
{/* DIV FOR USEMUTATION HOOK */}


<div>

<input type="text"  placeholder='name' onChange={(event)=>{setName(event.target.value)}} />
<input type="text"  placeholder='Username'  onChange={(event)=>{setUsername(event.target.value)}} />
<input type="number"  placeholder='Age' onChange={(event)=>{setAge(event.target.value)}}  />
<input type="text"  placeholder='Nationality' onChange={(event)=>{setNationality(event.target.value.toUpperCase())}}     />

<div>
<button onClick={()=>{
  createUser({
    variables:{
      input :{ name,username,age:Number(age),nationality

      }
    }
  })
  refetch()
}}>
  Create new User
</button>

</div> 

</div>




        
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
                <h5>{uniqueMovie.getMovie.name}</h5>
               

             </div>


        )
        
        
        }</div>


{Uniqueerror && <h1>{Uniqueerror}</h1>}

     </div>

           
      
    </div>
  )
}

export default Displaydata
