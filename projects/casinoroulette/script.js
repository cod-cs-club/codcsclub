// Players starting at $200
var p1mon = 200;
var p2mon = 200;
const colorArray = [];

// Once button Bet Black is clicked, the player 1's money is reduced by the amount of the bet
const betButtonp1 = document.getElementById('betButtonp1');
betButtonp1.addEventListener('click', function() {
    var p1bet = document.getElementById("p1bet").value;
    p1mon = p1mon - p1bet;
    document.getElementById("p1mon").innerHTML = p1mon;
});

// Bet Red Button is clicked; for player 1
const betButtonp2 = document.getElementById('betButtonp2');
betButtonp2.addEventListener('click', function() {
    var p1bet = document.getElementById("p1bet").value;
    p1mon = p1mon - p1bet;
    document.getElementById("p1mon").innerHTML = p1mon;
});
// Bet Green Button is clicked; for player 1
const betButtonp3 = document.getElementById('betButtonp3');
betButtonp3.addEventListener('click', function() {
    var p1bet = document.getElementById("p1bet").value;
    p1mon = p1mon - p1bet;
    document.getElementById("p1mon").innerHTML = p1mon;
});

// Once button Bet is clicked, the player 2's money is reduced by the amount of the bet
const betButton1 = document.getElementById('betButton1');
betButton1.addEventListener('click', function() {
    var p2bet = document.getElementById("p2bet").value;
    p2mon = p2mon - p2bet;
    document.getElementById("p2mon").innerHTML = p2mon;
});
const betButton2 = document.getElementById('betButton2');
betButton2.addEventListener('click', function() {
    var p2bet = document.getElementById("p2bet").value;
    p2mon = p2mon - p2bet;
    document.getElementById("p2mon").innerHTML = p2mon;
});
const betButton3 = document.getElementById('betButton3');
betButton3.addEventListener('click', function() {
    var p2bet = document.getElementById("p2bet").value;
    p2mon = p2mon - p2bet;
    document.getElementById("p2mon").innerHTML = p2mon;
});


// Once button spin is clicked, the game will generate a random number between 1 and 37.
// If the number is <=18, it is a red number,
// If the number is <=36, it is a black number,
// If the number is 37, it is a green number.
const spinButton = document.getElementById('spinButton');
spinButton.addEventListener('click', function() {
    var spin = Math.floor(Math.random() * 37) + 1 ;
    var color = "";
    if (spin <= 18) {
        color = "R";
        document.getElementById("colorHistory").style.color = "red";
    } 
    
    else if (spin <= 36) {
        color = "B";
        document.getElementById("colorHistory").style.color = "blue";
    }

    else {
        color = "G";
        document.getElementById("colorHistory").style.color = "green";
    }


    document.getElementById("spinPrint").innerHTML = spin;
    document.getElementById("colorPrint").innerHTML = color;

    // Function to add the color to the history of colors
    addColor(color);
});

// Function to add the color to the history of colors
function addColor(color) {

    colorArray.push(color);
    var colorHistoryText = "";
    for (var i = 0; i < colorArray.length; i++) {
        if (colorArray[i] == "R") {
            colorHistoryText += '<span style="color:red">' + colorArray[i] + "</span> ";
        }
        else if (colorArray[i] == "B") {
            colorHistoryText += '<span style="color:blue">' + colorArray[i] + "</span> ";
        }
        else {
            colorHistoryText += '<span style="color:green">' + colorArray[i] + "</span> ";
        }
    }
    
    console.log(colorHistoryText);
    
    document.getElementById("colorHistory").innerHTML = colorHistoryText;
}



