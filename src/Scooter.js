  class Scooter {
    static nextSerial = 1; 
    constructor(station, user, charge, isBroken) {
      this.station = station; 
      this.user = user;
      this.serial = Scooter.nextSerial; 
      Scooter.nextSerial++; 
      this.charge = 100; 
      this.isBroken = false;
    }
    getUser(){
        return this.user
    }
    recharge(){
        this.charge = 100
    }
    setBroken(){
        this.isBroken = false
    }
    info() {
      return "Scooter"+ this.serial +" at Station: "+this.station+", User:"+this.user+", Charge: "+this.charge+", Broken: "+this.isBroken;
    }
    rent(user){
        if (Scooter.charge > 0){
            this.user = user
        }else{
            throw new Error("scooter needs to charge or scooter needs repair")
        }
    }
    dock(station){
        return ("return scooter to"+station)
    }

  
  }
  


module.exports = Scooter
