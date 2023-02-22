const{ApolloServer}= require("apollo-server")
const { typeDefs} = require("./schema/typedefs.js")
const {resolvers} = require("./schema/resolver.js")
// const {startStandaloneServer} = require("@apollo/server/standalone")


// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.


const server = new ApolloServer({typeDefs,resolvers})


// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests

server.listen().then(({url})=>{
    console.log(`YOUR API IS RUNNING AT ${url}`)
})


