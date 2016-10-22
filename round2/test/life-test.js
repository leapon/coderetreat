var chai = require('chai');
var expect = chai.expect;
var LifeEngine = require('../src/life-engine');
var LifeGame = require('../src/life-game');

/*
Game of Life Rule:

Any live cell with fewer than two live neighbours dies, as if caused by under-population.
Any live cell with two or three live neighbours lives on to the next generation.
Any live cell with more than three live neighbours dies, as if by over-population.
Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
*/

describe('GameOfLife Rule', function() {

  it('isCellLiveNext() should return false if live cell has <2 neighbors', function() {
    var lifeEngine = new LifeEngine();
    expect(lifeEngine.isCellLiveNext(true, 1)).to.equal(false);
  });

  it('isCellLiveNext() should return true if live cell has 2 or 3 neighbors', function() {
    var lifeEngine = new LifeEngine();
    expect(lifeEngine.isCellLiveNext(true, 2)).to.equal(true);
    expect(lifeEngine.isCellLiveNext(true, 3)).to.equal(true);
  });

  it('isCellLiveNext() should return false if live cell has >2 neighbors', function() {
    var lifeEngine = new LifeEngine();
    expect(lifeEngine.isCellLiveNext(true, 4)).to.equal(false);
    expect(lifeEngine.isCellLiveNext(true, 6)).to.equal(false);
    expect(lifeEngine.isCellLiveNext(true, 8)).to.equal(false);
  });

  it('isCellLiveNext() should return false if dead cell <3 or >3 neighbors', function() {
    var lifeEngine = new LifeEngine();
    expect(lifeEngine.isCellLiveNext(false, 2)).to.equal(false);
    expect(lifeEngine.isCellLiveNext(false, 4)).to.equal(false);
  });

  it('isCellLiveNext() should return true if dead cell has 3 neighbors', function() {
    var lifeEngine = new LifeEngine();
    expect(lifeEngine.isCellLiveNext(false, 3)).to.equal(true);
  });

});


describe('GameOfLife Test', function() {

  it('calculate live neighbor count for center cell in case 1 should return 3', function() {
    var lifeGame = new LifeGame();
    var input = [[0, 0, 0], [0, 1, 0], [0, 0, 0]];
    expect(lifeGame.getNeighborCount(input, 1, 1)).to.equal(3);
  });

  it('for 3x3 life with one center live centershould return all dead', function() {
    var lifeGame = new LifeGame();
    var input = [[0, 0, 0], [0, 1, 0], [0, 0, 0]];
    var outputExpected = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    expect(lifeGame.next(input)).to.equal(outputExpected);
  });

});
