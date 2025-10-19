// var chatMessages = document.getElementById("chatMessages");
var userInput = document.getElementById("userInput");

function sendMessage() {
  var message = userInput.value.trim();
  if (message === "") return;

  addMessage(message, "user");
  userInput.value = "";

  // show typing animation
  showTyping();

  setTimeout(function() {
    hideTyping();
    var reply = getBotReply(message);
    addMessage(reply, "bot");
  }, 1200);
}

function showTyping() {
  var typingDiv = document.createElement("div");
  typingDiv.id = "typing";
  typingDiv.className = "message bot";
  typingDiv.innerHTML = "Typing<span class='typing'>...</span>";
  chatMessages.appendChild(typingDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function hideTyping() {
  var typingDiv = document.getElementById("typing");
  if (typingDiv) typingDiv.remove();
}

function addMessage(text, sender) {
  var msgDiv = document.createElement("div");
  msgDiv.classList.add("message", sender);
  msgDiv.innerText = text;
  chatMessages.appendChild(msgDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getBotReply(input) {
  input = input.toLowerCase();
  var response;

  if (input.includes("hello") || input.includes("hi")) {
    response = "Hey there! 👋 How are you doing today?";
  } else if (input.includes("how are you")) {
    response = "I'm great, thanks for asking! 😊 How about you?";
  } else if (input.includes("your name")) {
    response = "I'm Luna, your friendly chat buddy 💫";
  } else if (input.includes("fine") || input.includes("good")) {
    response = "That’s awesome to hear! 🌟";
  } else if (input.includes("what can you do")) {
    response = "I can chat with you, make you smile 😄 and keep you company!";
  } else if (input.includes("bye")) {
    response = "Bye bye 👋 Take care of yourself!";
  } else if (input.includes("time")) {
    var now = new Date();
    response = "The current time is " + now.toLocaleTimeString();
  } else if (input.includes("what is my name")) {
    response = "Your name is Hammad 😎";
  } else {
    response = "Hmm, interesting 🤔 Tell me more about that!";
  }

  return response;
}

userInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter") sendMessage();
});
