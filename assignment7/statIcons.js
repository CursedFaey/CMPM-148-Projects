let resources = [
  {key: "work", value: 30,image: "./images/work.svg"},
  {key: "entertainment", value: 30, image: "./images/entertainment.svg"},
  {key: "battery", value: 80, image: "./images/battery.svg"},
  {key: "paper", value: 100, image: "./images/paper.svg"}
  
]

function addResource(key, amount){
  for (x in resources){
    if (key == resources[x].key) resources[x].value += amount;
  }
  
}

function setResource(key, num){
  for (x in resources){
    if (key == resources[x].key) resources[x].value == num;
  }
}

function setStatIcons () {
  let resource_bar = ""
  
  for (x in resources) {
    resource_bar += "<div class='statIconImageContainer'><div class='resourceBarFront' id='" + resources[x].key + "Bar'></div><div class='resourceBarBack'></div><image src='" + resources[x].image +"'class='statIconImage' id='" + resources[x].key +  "'> </image></div>"
  }

  io.appendIntoElement(resource_bar, "statIcons")
} 

function updateMeters() {
    for (x in resources) {
      //console.log(resources[x].key+"Bar", resources[x].value/100*75)
      document.getElementById(resources[x].key+"Bar").style.transform = "scaleY(" + resources[x].value/100 + ")";
      //console.log(resources[x].value/100*75+ "px", )
  }
  
}

function checkFail() {
  failures = []
    for (x in resources) {
      if (resources[x].value > 100) {failures.push({resource: resources[x].key, level: "high"})}
      if (resources[x].value < 0) {failures.push({resource: resources[x].key, level: "low"})}
  }
   console.log(failures)
  for (x in failures){
    let f = failures[x];
    console.log(f.resource);
    console.log(f.level);
    if (f.resource == "battery" && f.level == "high"){
      return;
    }
    if (f.resource == "paper" && f.level == "high"){
      return;
    }
    for ( i in failCards){
      let failCard = failCards[i];
      if (failCard.resource == f.resource && failCard.level == f.level){
        //console.log("Y E S");
        addToTopDeck(failCard.card, false)
        return;
      }else
      //console.log("NOOOOOOOOOOO");
        addToTopDeck(defaultFailCard, false)
    }
    
  }
 
}