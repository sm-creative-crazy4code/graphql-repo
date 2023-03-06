import logo from './logo.svg';
import './App.css';
import {ApolloClient, InMemoryCache,ApolloProvider,useQuery} from '@apollo/client'
import Displaydata from './Displaydata';

function App() {
  const client = new ApolloClient({
    cache:new InMemoryCache(), 
    uri: "http://localhost:4000/graphql",
  })
  return (
  <ApolloProvider client={client}>
    <div className="App">
        <h1>List of user</h1>
        <Displaydata/>
    </div>
 </ApolloProvider>
  );
}

export default App;
