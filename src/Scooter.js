class Scooter {
  static nextSerial = 1
  constructor(station) {
    this.station = station
    this.user = null
    this.serial = Scooter.nextSerial
    Scooter.nextSerial++
    this.charge = 100
    this.isBroken = false
  }
  getUser(){
    return (this.user)
  }
  recharge(){
    this.charge = 100
  }
  setBroken(){
    this.isBroken = false
  }
  info() {
    return ("Scooter"+ this.serial +" at Station: "+this.station+", User:"+this.user+", Charge: "+this.charge+", Broken: "+this.isBroken)
  }
  rent(user){
    if (Scooter.charge < 20 || !this.isBroken){
      throw new Error("scooter needs to charge or scooter needs repair")
    }else{
      this.user = user
    }
    }
  dock(station) {
    this.user = null
    this.station = station
  }

  
}
  


module.exports = Scooter
