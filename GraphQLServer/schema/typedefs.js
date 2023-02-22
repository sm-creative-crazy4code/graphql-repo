const {gql} = require("apollo-server")

const typedefs = gql`

type User{
    name:String!
    username: String!
    age:Int!
    nationality: String!
}

type Query { 

users: [User]! 
 
}

`


module.exports = {typedefs}