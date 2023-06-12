
firstCard = {
  prompt: "Your boss caught you sleeping on the job. <br>'Did you finish your work?'",
  rightChoiceText: "I definitely, totally did my work...",
  rightChoice: function(){
    addResource("entertainment", 0)
    addToTopDeck("BossDissapointed")
    },
  
  leftChoiceText: "Yes..?", 
  leftChoice: function(){
    addResource("work", 0)
    addToTopDeck("BossDissapointed")
    workDone += 0;
  },
  name: "Mr. Lucifer",
  resultText: "",
  image: "./images/mrLucifer.png",
  priority: 1,
  pack : "none"
}


cardPool = {
  "uniqueIDList" : ["BossDissapointed", "Cubicle1"],
  
  "BossDissapointed" : {
    prompt: "'Stop slacking on the job and go do your work!!'",
    rightChoiceText: "Yes Boss...",
    rightChoice: function(){
      addResource("entertainment", 0)
      addToTopDeck("Cubicle1")
      },
    leftChoiceText: "Give me a raise first?", 
    leftChoice: function(){
      addResource("work", 0)
      addToTopDeck("Cubicle1")
    workDone += 0;
    },
    name: "Mr. Lucifer",
    resultText: "",
    image: "./images/mrLucifer.png",
    priority: 2,
    pack : "none"
  },


  "Cubicle1": {
    prompt: "Your boss storms off from your cubicle, leaving you alone.",
    rightChoiceText: "Sit in cubicle",
      rightChoice: function(){
      addResource("entertainment", 0)
      addPackToDeck("rotting")
      },
    leftChoiceText: "Get up to do work", 
    leftChoice: function(){
      addResource("work", 0)
      addPackToDeck("wandering")
    },
    name: "The Cubicle",
    resultText: "",
    image: "./images/cubicle.png",
    priority: 3,
    pack : "none"
  }

}




