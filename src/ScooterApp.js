const User = require('./User')

class scooterApp{
    condstructor(){
        this.stations = {}
        this.registeredUsers = {}    
    }
    registerUser(username, password, age){
        if (this.registerUser[username]){
            throw new Error("already registered")
        }if (age<18){
            throw new Error("too young to register")
        }
        this.registeredUsers[username] = new User(username, password, age)
        console.log("User has been registered.")
        return (this.registeredUsers[username])
    }
    loginUser(username, password){
        if (this.registerUser[username]){
            if ((this.registerUser[username]).login(password)){
                console.log("user has been logged in")
            }
        }
        throw new Error("Username or password is incorrect")
    }
    logoutUser(username){
       if(!this.registerUser[username]){
        throw new Error("No user named "+username+" exists")
       } 
       (this.registerUser[username]).logout(username)
    }
    createScooter(station){
        if (!this.stations[stations]){
            throw  new Error("no such station error")
        }
        scooter = new Scooter(station)
        this.stations = station
        console.log("Created new scooter.")
        return scooter
    }
    dockScooter(scooter, station){
        if (!this.stations[stations]){
            throw  new Error("no such station error")
        }if(scooter.station === station){
            throw new Error("scooter is alredy at "+ station)
        }
        scooter.station = station
        console.log("scooter is docked")
    }
    rentScooter(scooter, user){
        
    }
}

module.exports = ScooterApp;