// Players starting at $200
var p1mon = 200;
var p2mon = 200;

// Once button Bet is clicked, the player's money is reduced by the amount of the bet
const betButton1 = document.getElementById('betButton1');
betButton1.addEventListener('click', function() {
    var p1bet = document.getElementById("p1bet").value;
    p1mon = p1mon - p1bet;
    document.getElementById("p1mon").innerHTML = p1mon;
});

// Once button Bet is clicked, the player's money is reduced by the amount of the bet
const betButton2 = document.getElementById('betButton2');
betButton2.addEventListener('click', function() {
    var p2bet = document.getElementById("p2bet").value;
    p2mon = p2mon - p2bet;
    document.getElementById("p2mon").innerHTML = p2mon;
});

// Once button "crack cocaine" is clicked, the text changes.
const hi = document.getElementById('hi');
hi.addEventListener('click', function() {
    var input = document.getElementById("input").value;
    document.getElementById("id").innerHTML = input;

});


// Once button Roll is clicked, the game will generate a random number between 1 and 37.
// If the number is <=18, it is a red number,
// If the number is <=36, it is a black number,
// If the number is 37, it is a green number.
const rollButton = document.getElementById('spinButton');
rollButton.addEventListener('click', function() {
    var roll = Math.floor(Math.random() * 36) + 1; 
    var color = "";
    if (roll <= 18) {
        color = "red";
    } 
    
    else if (roll <= 36) {
        color = "black";
    }

    else {
        color = "green";
    }

    document.getElementById("spinPrint").innerHTML = roll;
    document.getElementById("colorPrint").innerHTML = color;

    // Function to add the color to the history of colors
    addColor(color);
});

// Function to add the color to the history of colors
function addColor(color) {
    var colorHistory = document.getElementById("colorHistory");
    var newColor = document.createElement("li");
    newColor.innerHTML = color;
    colorHistory.appendChild(newColor);
}



