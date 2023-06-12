workDone = 0;


function updatePlayerData(){
  
  
let dataToShow = "WORK DONE: "+ workDone;


io.writeIntoElement(dataToShow,"playerData")

}