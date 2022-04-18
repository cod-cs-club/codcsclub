// Once button "crack cocaine" is clicked, the text changes.
const hi = document.getElementById('hi');
hi.addEventListener('click', function() {
    var input = document.getElementById("input").value;
    document.getElementById("id").innerHTML = input;

});