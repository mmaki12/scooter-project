const User = require('./User')
class ScooterApp {
  constructor() {
    this.stations = {};
    this.registeredUsers = {};
  }

  createScooter(station) {
    if (!this.stations[station]) {
      throw new Error('No such station');
    }
    const scooter = new Scooter(Object.keys(this.stations[station]).length + 1);
    scooter.station = station;
    this.stations[station].push(scooter);
    console.log(`Created new scooter.`);
    return scooter;
  }

  dockScooter(scooter, station) {
    if (!this.stations[station]) {
      throw new Error('No such station');
    }

    if (scooter.station === station) {
      throw new Error('Scooter already at station');
    }

    scooter.station = station;
    this.stations[station].push(scooter);
    console.log(`Scooter is docked.`);
  }

  rentScooter(scooter, user) {
    if (scooter.isRented) {
      throw new Error('Scooter already rented');
    }

    if (!this.stations[scooter.station]) {
      throw new Error('No such station');
    }

    scooter.isRented = true;
    console.log(`Scooter is rented.`);
  }

  registerUser(username, password, age) {
    if (this.registeredUsers[username]) {
      throw new Error('User is already registered.');
    }

    if (age < 18) {
      throw new Error('Too young to register.');
    }

    this.registeredUsers[username] = new User(username, password, age);
    console.log(`User has been registered.`);
    return this.registeredUsers[username];
  }

  loginUser(username, password) {
    if (!this.registeredUsers[username]) {
      throw new Error('Username or password is incorrect.');
    }

    this.registeredUsers[username].login(password);
    console.log(`User has been logged in.`);
  }

  logoutUser(username) {
    if (!this.registeredUsers[username]) {
      throw new Error('No such user is logged in.');
    }

    this.registeredUsers[username].logout();
    console.log(`User is logged out.`);
  }

  print() {
    console.log('Stations:');
    console.log(this.stations);
    console.log('Registered Users:');
    console.log(this.registeredUsers);
  }
}


