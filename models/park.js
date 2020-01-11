const Park = function (name, price) {
  this.name = name;
  this.price = price;
  this.dinosaurs = [];
}

Park.prototype.addDinosaur = function(dinosaur) {
  this.dinosaurs.push(dinosaur)
}

Park.prototype.removeDinosaur = function() {
  this.dinosaurs.pop()
}

Park.prototype.mostPopDino = function () {
  let guestsAttracted = this.dinosaurs.map(dino => dino.guestsAttractedPerDay)
  let indexMax = 0
  let highestGuests = 0
  guestsAttracted.forEach((guests, index) => {
    if ( guests > highestGuests) {
      highestGuests = guests
      indexMax = index
    }
  })
  return this.dinosaurs[indexMax]
}

Park.prototype.totalVisitors = function () {
  let total = 0
  this.dinosaurs.forEach((dino) => {
    total += dino.guestsAttractedPerDay
  })
  return total
}

Park.prototype.totalVisitorsPerYear = function () {
  let total = 365 * this.totalVisitors()
  return total
}

Park.prototype.totalRevenue = function () {
  let revenue = 0
  revenue = this.price * this.totalVisitorsPerYear()
  return revenue
}

Park.prototype.findDinosBySpecies = function (species) {
  let result = []
  result = this.dinosaurs.filter(dino => species === dino.species)
  return result
}

module.exports = Park
