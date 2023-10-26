class User {
  static loggedIn = false;
  constructor(username,password,age){
    this.username = username
    this.password = password
    this.age = age
  }
  login(password){
    if (this.password === password){
      User.loggedIn = true
    }else{
      throw new Error("incorrect password")
    }}
    logout(){
      User.loggedIn = false
    }
  
}

module.exports = User
