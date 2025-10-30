var count = 0;

var greetings = [
    "hello", "hi", "hey", "hiya", "yo", "sup", "what's up", "howdy", "good day",
    "good morning", "good afternoon", "good evening", "good night",
    "greetings", "pleased to meet you", "nice to meet you", "how do you do",
    "hey there", "hi there", "hello there", "yo buddy", "what’s going on",
    "long time no see", "how have you been", "good to see you",
    "wassup", "sup bro", "yo man", "what up", "how’s it going", "how’s everything",
    "how are you", "how are ya", "how are things",
    "salam", "assalamualaikum", "wa alaikum salam", "namaste", "hola",
    "bonjour", "ciao", "konnichiwa", "annyeong", "ni hao", "shalom",
    "hey hey", "hi hi", "yo yo", "hey dude", "hey mate", "hi friend", "hey buddy"
];

var orderStatus = [
    "where is my order", "what is the status of my order", "track my order",
    "can i track my order", "has my order been shipped", "when will my order arrive",
    "is my order on the way", "where can i see my order details", "order tracking",
    "order status"
];

var keywords = [];
for (var i = 0; i < orderStatus.length; i++) {
    var words = orderStatus[i].split(" ");
    for (var j = 0; j < words.length; j++) {
        keywords.push(words[j]);
    }
}

var ignoreWords = ["is", "my", "the", "of", "can", "i", "on", "has"];
var filtered = [];
for (var k = 0; k < keywords.length; k++) {
    if (ignoreWords.indexOf(keywords[k]) === -1) {
        filtered.push(keywords[k]);
    }
}
keywords = filtered;

function send(event) {
    if (event.keyCode === 13) {
        count++;
        var a = document.getElementById("inp").value;
        a = a.trim();

        if (a === "") return;

        var aint = parseInt(a);
        var chatBox = document.getElementById("messages");
        document.getElementById("inp").value = "";

        var uniqueId = "hello" + count;

        chatBox.innerHTML += "<div id='right'>" + a + "</div>";
        chatBox.innerHTML += "<div class='left' id='" + uniqueId + "'>Typing...</div>";

        chatBox.scrollTop = chatBox.scrollHeight;

        if (greetings.indexOf(a.toLowerCase()) !== -1) {
            setTimeout(function () {
                document.getElementById(uniqueId).style.backgroundColor = "blue";
                document.getElementById(uniqueId).innerText = "Hello, How can I help you?";
            }, 1500);
        }
        else if (keywords.indexOf(a.toLowerCase()) !== -1 || orderStatus.indexOf(a.toLowerCase()) !== -1) {
            setTimeout(function () {
                document.getElementById(uniqueId).style.backgroundColor = "blue";
                document.getElementById(uniqueId).innerText = "Can you please provide me your Order ID so I can give more information?";
            }, 1500);
        }
        else if (a == aint) {
            setTimeout(function () {
                document.getElementById(uniqueId).style.backgroundColor = "blue";
                document.getElementById(uniqueId).innerText = "Here are your order details for ID " + aint;
            }, 1500);
        }
        else {
            setTimeout(function () {
                document.getElementById(uniqueId).style.backgroundColor = "blue";
                document.getElementById(uniqueId).innerText = "It looks like there's a typing mistake. Can you please try again?";
            }, 1500);
        }
    }
}
