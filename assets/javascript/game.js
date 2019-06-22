


var players = [
    "Charles Barkley",
    "Rick Barry",
    "Elgin Baylor",
    "Larry Bird",
    "Wilt Chamberlain",
    "Billy Cunningham",
    "Dave DeBusschere",
    "Clyde Drexler",
    "Julius Erving",
    "Patrick Ewing",
    "George Gervin",
    "Elvin Hayes",
    "Magic Johnson",
    "Michael Jordan",
    "Karl Malone",
    "Moses Malone",
    "Pete Maravich",
    "Kevin McHale",
    "George Mikan",
    "Scottie Pippen",
    "Oscar Robertson",
    "David Robinson",
    "Bill Russell",
    "John Stockton",
    "Isiah Thomas",
    "Bill Walton",
    "Jerry West",
    "James Worthy"
]

var wins = 0;
var guesses = 12;
var usersGuesses = ""




var randPlayer = players[Math.floor(Math.random() * players.length)];

var gamePlayer = ""

for (i = 0; i < randPlayer.length; i++) {

    gamePlayer += "_"
    

}
document.onkeyup = function (event) {

    var userEntry = event.key;

    usersGuesses += userEntry

    for (i = 0; i < randPlayer.length; i++) {

        if (randPlayer.includes(userEntry)) {
            gamePlayer.replace(userEntry, userEntry)
        }
    }
        if(userEntry != randPlayer[i]) {
            guesses -= 1
        }

    console.log(gamePlayer)
    document.getElementById("lettersGuessed").innerHTML = usersGuesses
    document.getElementById("gameWord").innerHTML = gamePlayer
    document.getElementById("guessesLeft").innerHTML = guesses
    document.getElementById("score").innerHTML = wins
    }



console.log(randPlayer)

var containerOne = document.getElementById("contain1")
var containerTwo = document.getElementById("contain2")
document.getElementById("gameWord").innerHTML = gamePlayer
document.getElementById("guessesLeft").innerHTML = guesses
document.getElementById("lettersGuessed").innerHTML = usersGuesses
document.getElementById("score").innerHTML = wins




