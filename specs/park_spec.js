const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    park = new Park("Jurrasic Park", 20)
    dino1 = new Dinosaur("T-Rex","carnivore",10000)
    dino2 = new Dinosaur("Velociraptor", "carnivore", 5000)
    dino3 = new Dinosaur("Diplodocus", "herbivore", 4000)
    dino4 = new Dinosaur("Diplodocus", "herbivore", 6000)
  })

  it('should have a name', function(){
    assert.strictEqual(park.name, "Jurrasic Park")
  });

  it('should have a ticket price', function() {
    assert.strictEqual(park.price, 20)
  });

  it('should have a collection of dinosaurs', function() {
    park.addDinosaur(dino1)
    actual = park.dinosaurs.length
    assert.strictEqual(actual, 1)
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addDinosaur(dino1)
    park.addDinosaur(dino2)
    actual = park.dinosaurs.length
    assert.strictEqual(actual, 2)
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.addDinosaur(dino1)
    park.addDinosaur(dino2)
    park.removeDinosaur()
    actual = park.dinosaurs.length
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    park.addDinosaur(dino1)
    park.addDinosaur(dino2)
    actual = park.mostPopDino()
    assert.strictEqual(actual, dino1)
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    park.addDinosaur(dino1)
    park.addDinosaur(dino2)
    park.addDinosaur(dino3)
    park.addDinosaur(dino4)
    actual = park.findDinosBySpecies("Diplodocus")
    assert.deepStrictEqual(actual, [dino3, dino4])

  });

  it('should be able to calculate the total number of visitors per day', function () {
    park.addDinosaur(dino1)
    park.addDinosaur(dino2)
    park.addDinosaur(dino3)
    park.addDinosaur(dino4)
    actual = park.totalVisitors()
    assert.strictEqual(actual, 25000)
  });

  it('should be able to calculate the total number of visitors per year', function () {
    park.addDinosaur(dino1)
    park.addDinosaur(dino2)
    park.addDinosaur(dino3)
    park.addDinosaur(dino4)
    actual = park.totalVisitorsPerYear()
    assert.strictEqual(actual, 9125000)
  });

  it('should be able to calculate total revenue for one year', function () {
    park.addDinosaur(dino1)
    park.addDinosaur(dino2)
    park.addDinosaur(dino3)
    park.addDinosaur(dino4)
    actual = park.totalRevenue()
    assert.strictEqual(actual, 182500000)
  });

});
