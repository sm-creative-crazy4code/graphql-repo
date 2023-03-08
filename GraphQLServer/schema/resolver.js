const {UserList,MovieList}= require("./../fakedata")
const _ = require("lodash");


const resolvers={
Query:{ 

users(parent,args,context,info){
     console.log(info)

  if (UserList)  return { users : UserList};

  return{message:" Errror unable to fetch the userlists" }
},

getUser:(parent,args)=>{
    let id = args.id
    let user =_.find(UserList,{id:Number(id)})
    return user

},

movies:(parent)=>{
console.log(parent)
return MovieList
},

getMovie:(parent,args)=>{
    let name= args.name
    let movie =_.find(MovieList,{name:name})
    return movie


}

},
User:{
    favouriteMovies:()=>{
        return _.filter(MovieList,(movie)=> movie.yearOfPublication >=2000 && movie.yearOfPublication <= 2010);


    }


},


Mutation:{
    createUser:(parent,args)=>{
    const user = args.input
    user.id=UserList.length+1
    UserList.push(user)
    return user
},


  updateUser:(parent,args)=>{
    const {id,newUsername}= args.input
    let changedUser
    UserList.forEach((user)=>{

        if(user.id ===Number(id)){
        user.username=newUsername
        changedUser=user}
    }) 
   
    
    return changedUser
},


deleteUser:(parent,args)=>{
    const {id}=args
    _.remove(UserList,(user)=>user.id===Number(id))
    return null
}

},


UserResult:{
    __resolvedType(obj){
        if(obj.users){
            return "UserSuccessResult"
        }

        if(obj.message){
            return "UserErrorResult";
        }

        return null
    }

}

}


module.exports= {resolvers}