const storyTextElement = document.getElementById('storyText');
const option1Button = document.getElementById('option1');
const option2Button = document.getElementById('option2');

/*let gameState = {
    distanceFromRoad: 5, // Arbitrary scale: 0 = found the road
};*/

function updateGame(option) {
    if (option === 'first'){
        storyTextElement.textContent = "You keep going straight to see if you can find anyone who can help you or a safe road. You keep walking until you finally see a house.";
        option1Button.textContent = "Knock on the door and go inside";
      option2Button.textContent = "Ignore the house and keep walking";
      if(option == 'first'){
        storyTextElement.textContent = "You go up to the house and knock on the door. You knock the door once, it opens. You walk inside to find no lights open. You take a look around and find no one inside."
      option1Button.textContent = "Search around to find something useful";
      option2Button.textContent = "It's too scary, leave";
      }
    } else if (option === 'second'){
        storyTextElement.textContent = "You turn around and start walking the direction you came from. You walk for around 1/2 a mile and you start to lose hope until you see a sign ahead of you.";
      
    }
    /*if (option === 'left') {
        gameState.distanceFromRoad -= Math.random() > 0.5 ? 1 : 2; // Randomly closer or further
    } else {
        gameState.distanceFromRoad += Math.random() > 0.5 ? 1 : 2;
    }

    if (gameState.distanceFromRoad <= 0) {
        storyTextElement.textContent = 'You found the road! You are safe.';
        option1Button.style.display = 'none';
        option2Button.style.display = 'none';
    } else {
        storyTextElement.textContent = `You decide to go ${option}. You are still lost. Choose again.`;*/
    
}

option1Button.addEventListener('click', () => updateGame('first'));
option2Button.addEventListener('click', () => updateGame('second'));
