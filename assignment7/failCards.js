failCards = [
  {
  resource: "work", 
  level: "high", 
  card: {
    prompt: "You get voted Employee of Hell and almost get a raise!",
    rightChoiceText: "Almost?!",
    rightChoice: function(){location.reload();
      },
    
    leftChoiceText: "great...", 
    leftChoice: function(){location.reload();
    },
    name: "I acheived something!",
    resultText: "",
    image: "./images/office.png"
  }},
  
  {
    resource: "entertainment", 
    level: "high", 
    card: {
      prompt: "You certainly had a great time in the office. Good luck being entertained for the next eternity...",
      rightChoiceText: "the NEXT eternity?!",
      rightChoice: function(){location.reload();
        },
      
      leftChoiceText: "watch me", 
      leftChoice: function(){location.reload();
      },
      name: "YOLO!",
      resultText: "",
      image: "./images/office.png"
    }},

    {
      resource: "paper", 
      level: "low", 
      card: {
        prompt: "You used up all the paper in the office and now no one can do their work... Goodluck explaining that to your boss.",
        rightChoiceText: "I'm dead...",
        rightChoice: function(){location.reload();
          },
        
        leftChoiceText: "I'm sure it'll be fine...", 
        leftChoice: function(){location.reload();
        },
        name: "Fuel Shortage",
        resultText: "*Mr. Lucifer approaches*",
        image: "./images/office.png"
      }},

      {
        resource: "battery", 
        level: "low", 
        card: {
          prompt: "You've lost all your energy to work and succumb to eternal sleep...",
          rightChoiceText: "it's for the best",
          rightChoice: function(){location.reload();
            },
          
          leftChoiceText: "FINALLY", 
          leftChoice: function(){location.reload();
          },
          name: "Soul Drained",
          resultText: "",
          image: "./images/office.png"
        }
}]

defaultFailCard = {
  prompt: "You spend the next eternity doing work on and off and getting yelled at by your boss",
  rightChoiceText: "oh damn(nation)",
  rightChoice: function(){location.reload();
    },
  
  leftChoiceText: "that's a pretty long time", 
  leftChoice: function(){location.reload();
  },
  name: "Floor 666",
  resultText: "What in the hell",
  image: "./images/office.png"
}