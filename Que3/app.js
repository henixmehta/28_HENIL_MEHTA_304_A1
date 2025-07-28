const readline = require("readline");
const chatbot = require("./chatbot");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Welcome to the Weather Chatbot!");
console.log("Type something to chat. Type 'bye' to exit.");

function ques() {
  rl.question("> ", (input) => {
    const response = chatbot.getResponse(input);
    console.log("Bot:", response);

    if (input.toLowerCase().includes("bye")) {
      rl.close();
    } else {
      ques(); 
    }
  });
}

ques();
