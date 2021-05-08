class Player {
  constructor(){
    this.rank = 0;
    this.index = null;
    this.distance = 0;
    this.name = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance,
      rank:this.rank
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }

  deleteAllPlayers(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.remove()
  }

  getCarsAtTheEnd(){
    var carAtEndRef = database.ref('carsAtEnd')
    carAtEndRef.on("value", (data)=>{
      this.rank = data.val()
    })
  }

static updatecarsAtEnd(rank){
database.ref('/').update({carsAtEnd:rank})
}


}
