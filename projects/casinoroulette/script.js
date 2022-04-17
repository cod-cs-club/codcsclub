var p1mon = 200;
var p2mon = 200;

const betButton1 = document.getElementById('betButton1');
betButton1.addEventListener('click', function() {
    var p1bet = document.getElementById("p1bet").value;
    p1mon = p1mon - p1bet;
    document.getElementById("p1mon").innerHTML = p1mon;
});

const betButton2 = document.getElementById('betButton2');
betButton2.addEventListener('click', function() {
    var p2bet = document.getElementById("p2bet").value;
    p2mon = p2mon - p2bet;
    document.getElementById("p2mon").innerHTML = p2mon;
});




//player 1 


//let p1bet = prompt("How much would you like to bet?");
//let p2bet = prompt("How much would you like to bet?");

//alert("Player 1 betted " + p1bet + " dollars.");
// ask for input on player 1 to place a bet



