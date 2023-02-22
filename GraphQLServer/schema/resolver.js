const {UserList}= require("./../fakedata")

const resolvers={
Query:{

users(){
    return UserList
}


}



}


module.exports= {resolvers}