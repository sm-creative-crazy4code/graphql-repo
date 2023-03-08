const { gql } = require("apollo-server")

const typeDefs= gql`

type User{
    id:ID!
    name:String!
    username: String!
    age:Int!
    nationality: Nationality
    friends:[User!]
    favouriteMovies:[Movie!]
}


type Movie{
    id:ID!,
    name:String!,
    yearOfPublication:Int!,
    isInTheaters:Boolean!
}



type Query { 

users: [User]! 
getUser(id:ID!):User
movies:[Movie!]
getMovie(name:String):Movie!

 
}

# Input to create users and here we specify the schema as well as set default values

input CreateUserInput{
    name:String!
    username: String!
    age:Int!=18
    nationality: Nationality=INDIA


}


input updateUserInput{
    id:ID!
    newUsername: String!
}



type Mutation {

    createUser(input:CreateUserInput):User
    updateUser(input:updateUserInput):User
    deleteUser(id:ID!):User
}


enum Nationality{
    CANADA,
    BRAZIL,
    CHILE,
    INDIA,
    GERMANY
}

type UserSuccessResult{
    users:[User!]!
}



type UserErrorResult{
    message:String!
}

union UserResult= UserSuccessResult | UserErrorResult

`;


module.exports = { typeDefs};