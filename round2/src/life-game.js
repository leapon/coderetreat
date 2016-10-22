function LifeGame() {
}

LifeGame.prototype.next = function(input) {
  console.log(">>>input:", input);
  var output = [];
  for (i = 0; i < input.length; i++){
    row = input[i];
    for (j = 0; j< row.length; j++){
      cell = row[j];
      console.log(">>>output:", i,j,cell);
    };
  };
  return output;
};

module.exports = LifeGame;
