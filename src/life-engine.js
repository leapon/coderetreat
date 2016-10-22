function LifeEngine() {

}

LifeEngine.prototype.isCellLiveNext = function(isLiveNow, neighborNumber) {
  if(neighborNumber > 1 && neighborNumber < 4){
    return true;
  }else{
    return false;
  };
};

module.exports = LifeEngine;
