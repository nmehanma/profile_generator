const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let response = {name: "", favouriteActivity: "", music: "", favouriteMeal: "" };


rl.question('What is your nickname? ', (answer) => {
  // console.log(`Thank you for your valuable feedback: ${answer}`);

  response.name = answer;
  // console.log(answer);
  
  rl.question("What is your favouirite activity? ", (answer) => {
    // console.log(`Thank you for your valuable feedback: ${answer}`)
    
    response.favouriteActivity = answer;   
    // console.log(response)
    
    rl.question("What do you listen to while doing that? ", (answer) => {
      // console.log(`Thank you for your valuable feedback: ${answer}`)
      
      response.music = answer
      // console.log(response);

      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (answer) => {
        
        response.favouriteMeal = answer

        console.log("Hello " + response.name + ". We have the same favourite activity " + response.favouriteActivity + ". We listen to the same music " + response.music + "and we like the same meal " + response.favouriteMeal)
        // console.log(response);
        rl.close();

        })
      })
    })
});



// peer editing with @JOadelic
