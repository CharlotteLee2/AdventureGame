  const storyTextElement = document.getElementById('storyText');
  const option1Button = document.getElementById('option1');
  const option2Button = document.getElementById('option2');

  let clicked1 = false;
  let clicked2 = false;
  let clicked3 = false;

  option1Button.addEventListener('click', () => updateGame('first'));
  option2Button.addEventListener('click', () => updateGame('second'));

  function updateGame(option) {
    if (option === 'first') {
      storyTextElement.textContent = "You keep going straight to see if you can find anyone who can help you. You keep walking until you finally see a house.";
      option1Button.textContent = "Knock on the door and go inside";
      option2Button.textContent = "Ignore the house and keep walking";
      option2Button.addEventListener('click', () => {
          storyTextElement.textContent = "You see a house but decide to ignore it when you realize how run down it looked. You keep heading straight through the forest until you found an open high way. You walk onto highway and see a blinding light. You are dead.";
        option1Button.style.display = "none";
        option2Button.style.display = "none";
 });
  /*option2Button.addEventListener('click', () => {
          storyTextElement.textContent = "After an hour of waiting, you see a car coming down the highway. You start to flap your arms and shout for it's attention. Successfully, you quickly tell the driver your situation and get home safely. You are alive!";
      option1Button.style.display = "none";
      option2Button.style.display = "none";
  });*/


      if (clicked1) {
        storyTextElement.textContent = "You go up to the house and knock on the door. You knock the door once, it opens. You walk inside to find no lights open. You take a look around and find no one inside."
        option1Button.textContent = "Search around to find something useful";
        option2Button.textContent = "It's too scary, leave";

        option2Button.addEventListener('click', () => {
            storyTextElement.textContent = "You run out the door into the woods until you can't breathe anymore. You look around to find yourself on a cliff with the city view below. You survived!";
        option1Button.style.display = "none";
        option2Button.style.display = "none";
  });
        if (clicked2) {
          storyTextElement.textContent = "You start to look around the house to see if you can find any food or water. You open a drawer to find nothing and you turn around to find someone staring right at you. You start to run away but before you can get far enough you feel something hit your head. You are dead.";
          option1Button.style.display = "none";
          option2Button.style.display = "none";
        } else {
          clicked2 = true; //clicked once
        }
      } else {
        clicked1 = true; //clicked once
      }
    } else if (option === 'second') {
      storyTextElement.textContent = "You turn around and start walking the direction you came from. You walk for around 1/2 a mile and you start to lose hope until you see a sign ahead of you.";
      option1Button.textContent = "Follow direction that says 'Bus Stop'";
      option2Button.textContent = "Follow direction that says 'Night Theater'";

      option1Button.addEventListener('click', () => {

          storyTextElement.textContent = "You followed the direction to the bus stop and waited at the bus station. The bus never arrives but a car comes rolling instead. He offers you a ride but you soon realize that a grave mistake. You are dead.";
          option1Button.style.display = "none";
          option2Button.style.display = "none";
      });

      option2Button.addEventListener('click', () => {
        if (storyTextElement.textContent.includes("sign")) {
          storyTextElement.textContent = "You walk towards the direction of the Night Theater in hopes to find other people. You hear music and chatter up ahead and you start running. Soon you are hit with the view of the dazzling light of a huge screen and bustling people laid on the grass. You go up to one of the workers and ask for directions home. You survived!";
          option1Button.style.display = "none";
          option2Button.style.display = "none";
        }
      });
    }
  }