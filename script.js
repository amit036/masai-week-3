var start = 0;
var ids = [];
var sum1 = -1;
var sum2 = -1;
var count=1;
var player1Icon = '<img id="marginOne" style="width:40px; height:40px" src="https://static.thenounproject.com/png/2754901-200.png">';
var player2Icon = '<img id="marginTwo" style="width:40px; height:40px" src="https://static.thenounproject.com/png/2754901-200.png">';
var clashIcon= '<img id="clashPlayer" style="width:40px; height:40px" src="https://static.thenounproject.com/png/592122-200.png">';
function playGame() {
        document.getElementById("mainContainer").style.display = 'block';
        document.getElementById("diceRolled").style.display = 'block';
        document.getElementById("enterInfo").style.display = "none";
        document.getElementById("snakeImg").style.display="none";
        var name1 = document.getElementById("playerName1").value;
        var name2 = document.getElementById("playerName2").value;
        document.getElementById("showPlayerName").innerHTML="Player 1:  "+ name1 +"<br>   Player 2:  "+ name2;
        document.getElementById("player1").innerHTML=name1;
        document.getElementById("player2").innerHTML=name2;
        for (var i = 0; i < 100; i++) {
            ids[i] = (i + 1).toString();
        }
}

function random(number) {
    return Math.floor(Math.random() * number);
}
function player1Dice() {
    var num1 = random(6) + 1;
    if (num1 == 1) {
        document.getElementById("diceOne").innerHTML = '<img style="width:100px;height:100px" src="https://static.thenounproject.com/png/190986-200.png">'
    }
    else if (num1 == 2) {
        document.getElementById("diceOne").innerHTML = '<img style="width:100px;height:100px" src="https://static.thenounproject.com/png/191812-200.png">';
    }
    else if (num1 == 3) {
        document.getElementById("diceOne").innerHTML = '<img style="width:100px;height:100px" src="https://static.thenounproject.com/png/193655-200.png">';
    }
    else if (num1 == 4) {
        document.getElementById("diceOne").innerHTML = '<img style="width:100px;height:100px" src="https://static.thenounproject.com/png/200127-200.png">';
    }
    else if (num1 == 5) {
        document.getElementById("diceOne").innerHTML = '<img style="width:100px;height:100px" src="https://static.thenounproject.com/png/202950-200.png">';
    }
    else {
        document.getElementById("diceOne").innerHTML = '<img style="width:100px;height:100px" src="https://static.thenounproject.com/png/204990-200.png">';
    }
    if (sum1 < 100) {
        if (num1 == 1) {
            sum1 = sum1 + 1;
        }
        else if (num1 == 2) {
            sum1 = sum1 + 2;
        }
        else if (num1 == 3) {
            sum1 = sum1 + 3;
        }
        else if (num1 == 4) {
            sum1 = sum1 + 4;
        }
        else if (num1 == 5) {
            sum1 = sum1 + 5;
        }
        else if (num1 == 6) {
            sum1 = sum1 + 6;
        }
        // Laddders
        if (sum1 == 8) {
            if (num1 == 1) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            if (num1 == 2) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            if (num1 == 3) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            if (num1 == 4) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            if (num1 == 5) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            if (num1 == 6) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            sum1 = sum1 + 21;

        }
        if (sum1 == 20) {
            if (num1 == 1) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            if (num1 == 2) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            if (num1 == 3) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            if (num1 == 4) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            if (num1 == 5) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            if (num1 == 6) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            sum1 = sum1 + 21;
        }
        if (sum1 == 14) {
            if (num1 == 1) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            if (num1 == 2) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            if (num1 == 3) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            if (num1 == 4) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            if (num1 == 5) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            if (num1 == 6) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            sum1 = sum1 + 60;
        }
        if (sum1 == 49) {
            if (num1 == 1) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            if (num1 == 2) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            if (num1 == 3) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            if (num1 == 4) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            if (num1 == 5) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            if (num1 == 6) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            sum1 = sum1 + 19;
        }
        if (sum1 == 70) {
            if (num1 == 1) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            if (num1 == 2) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            if (num1 == 3) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            if (num1 == 4) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            if (num1 == 5) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            if (num1 == 6) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            sum1 = sum1 + 20;
        }
        if (sum1 == 78) {
            if (num1 == 1) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            if (num1 == 2) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            if (num1 == 3) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            if (num1 == 4) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            if (num1 == 5) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            if (num1 == 6) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            sum1 = sum1 + 19;
        }
        //Snakes
        if (sum1 == 28) {
            if (num1 == 1) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            if (num1 == 2) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            if (num1 == 3) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            if (num1 == 4) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            if (num1 == 5) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            if (num1 == 6) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            sum1 = sum1 - 19;
        }
        if (sum1 == 36) {
            if (num1 == 1) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            if (num1 == 2) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            if (num1 == 3) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            if (num1 == 4) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            if (num1 == 5) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            if (num1 == 6) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            sum1 = sum1 - 32;
        }
        if (sum1 == 46) {
            if (num1 == 1) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            if (num1 == 2) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            if (num1 == 3) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            if (num1 == 4) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            if (num1 == 5) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            if (num1 == 6) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            sum1 = sum1 - 21;
        }
        if (sum1 == 62) {
            if (num1 == 1) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            if (num1 == 2) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            if (num1 == 3) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            if (num1 == 4) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            if (num1 == 5) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            if (num1 == 6) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            sum1 = sum1 - 45;
        }
        if (sum1 == 87) {
            if (num1 == 1) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            if (num1 == 2) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            if (num1 == 3) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            if (num1 == 4) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            if (num1 == 5) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            if (num1 == 6) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            sum1 = sum1 - 60;
        }
        if (sum1 == 95) {
            if (num1 == 1) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            if (num1 == 2) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            if (num1 == 3) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            if (num1 == 4) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            if (num1 == 5) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            if (num1 == 6) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            sum1 = sum1 - 60;
        }
        if (sum1 == 96) {
            if (num1 == 1) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            if (num1 == 2) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            if (num1 == 3) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            if (num1 == 4) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            if (num1 == 5) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            if (num1 == 6) {
                document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);
            }
            sum1 = sum1 - 20;
        }
        if (sum1 == 98) {
            console.log("You Need One to win");
            document.getElementById('display').innerHTML = "Player 1 need 1 to Win";
        }
        if (sum1 == 99) {
            alert('Player 1 Won the match');
            document.getElementById('display').innerHTML = "Player 1 Won the match";

        }

    }
    if (sum1 < 100) {
        document.getElementById(ids[sum1]).innerHTML = player1Icon;
        document.getElementById(ids[sum1 - num1]).textContent = (sum1 - num1 + 1);

    }
    if (sum1 >= 100) {
        sum1 = sum1 - num1;
        document.getElementById(ids[sum1]).innerHTML = player1Icon;
        console.log("Try Again");
        document.getElementById('display').innerHTML = "Try Again Player 1";
    }
    console.log("Player 1");
    console.log(sum1);
    // if(count%2==1)
    // {
    //     num1.removeEventListener("click", player1Dice);
    // }
    // count++;
}

function player2Dice() {
    var count2=0;
    var num2 = random(6) + 1;
    if (num2 == 1) {
        document.getElementById("diceTwo").innerHTML = '<img style="width:100px;height:100px" src="https://static.thenounproject.com/png/190986-200.png">'
    }
    else if (num2 == 2) {
        document.getElementById("diceTwo").innerHTML = '<img style="width:100px;height:100px" src="https://static.thenounproject.com/png/191812-200.png">';
    }
    else if (num2 == 3) {
        document.getElementById("diceTwo").innerHTML = '<img style="width:100px;height:100px" src="https://static.thenounproject.com/png/193655-200.png">';
    }
    else if (num2 == 4) {
        document.getElementById("diceTwo").innerHTML = '<img style="width:100px;height:100px" src="https://static.thenounproject.com/png/200127-200.png">';
    }
    else if (num2 == 5) {
        document.getElementById("diceTwo").innerHTML = '<img style="width:100px;height:100px" src="https://static.thenounproject.com/png/202950-200.png">';
    }
    else {
        document.getElementById("diceTwo").innerHTML = '<img style="width:100px;height:100px" src="https://static.thenounproject.com/png/204990-200.png">';
    }
    if (sum2 < 100) {
        if (num2 == 1) {
            sum2 = sum2 + 1;
        }
        else if (num2 == 2) {
            sum2 = sum2 + 2;
        }
        else if (num2 == 3) {
            sum2 = sum2 + 3;
        }
        else if (num2 == 4) {
            sum2 = sum2 + 4;
        }
        else if (num2 == 5) {
            sum2 = sum2 + 5;
        }
        else if (num2 == 6) {
            sum2 = sum2 + 6;
        }
        // Laddders
        if (sum2 == 8) {
            if (num2 == 1) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            if (num2 == 2) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            if (num2 == 3) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            if (num2 == 4) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            if (num2 == 5) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            if (num2 == 6) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            sum2 = sum2 + 21;
        }
        if (sum2 == 20) {
            if (num2 == 1) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            if (num2 == 2) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            if (num2 == 3) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            if (num2 == 4) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            if (num2 == 5) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            if (num2 == 6) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            sum2 = sum2 + 21;
        }
        if (sum2 == 14) {
            if (num2 == 1) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            if (num2 == 2) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            if (num2 == 3) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            if (num2 == 4) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            if (num2 == 5) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            if (num2 == 6) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            sum2 = sum2 + 60;
        }
        if (sum2 == 49) {
            if (num2 == 1) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            if (num2 == 2) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            if (num2 == 3) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            if (num2 == 4) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            if (num2 == 5) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            if (num2 == 6) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            sum2 = sum2 + 20;
        }
        if (sum2 == 70) {
            if (num2 == 1) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            if (num2 == 2) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            if (num2 == 3) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            if (num2 == 4) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            if (num2 == 5) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            if (num2 == 6) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            sum2 = sum2 + 22;
        }
        if (sum2 == 78) {
            if (num2 == 1) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            if (num2 == 2) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            if (num2 == 3) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            if (num2 == 4) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            if (num2 == 5) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            if (num2 == 6) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            sum2 = sum2 + 19;
        }
        //Snakes
        if (sum2 == 28) {
            if (num2 == 1) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            if (num2 == 2) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            if (num2 == 3) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            if (num2 == 4) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            if (num2 == 5) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            if (num2 == 6) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            sum2 = sum2 - 19;
        }
        if (sum2 == 36) {
            if (num2 == 1) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            if (num2 == 2) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            if (num2 == 3) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            if (num2 == 4) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            if (num2 == 5) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            if (num2 == 6) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            sum2 = sum2 - 32;
        }
        if (sum2 == 46) {
            if (num2 == 1) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            if (num2 == 2) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            if (num2 == 3) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            if (num2 == 4) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            if (num2 == 5) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            if (num2 == 6) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            sum2 = sum2 - 21;
        }
        if (sum2 == 62) {
            if (num2 == 1) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            if (num2 == 2) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            if (num2 == 3) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            if (num2 == 4) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            if (num2 == 5) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            if (num2 == 6) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            sum2 = sum2 - 45;
        }
        if (sum2 == 87) {
            if (num2 == 1) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            if (num2 == 2) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            if (num2 == 3) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            if (num2 == 4) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            if (num2 == 5) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            if (num2 == 6) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            sum2 = sum2 - 60;
        }
        if (sum2 == 95) {
            if (num2 == 1) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            if (num2 == 2) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            if (num2 == 3) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            if (num2 == 4) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            if (num2 == 5) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            if (num2 == 6) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            sum2 = sum2 - 60;
        }
        if (sum2 == 96) {
            if (num2 == 1) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            if (num2 == 2) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            if (num2 == 3) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            if (num2 == 4) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            if (num2 == 5) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            if (num2 == 6) {
                document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
            }
            sum2 = sum2 - 20;
        }
        if (sum2 == 98) {
            console.log("You Need One to win");
            document.getElementById('display').innerHTML = "Player 2 need 1 to Win";
        }
        if (sum2 == 99) {
            alert('Player 2 Won the match');
            document.getElementById('display').innerHTML = "Player 2 Won the match";
        }
        if (sum2 < 100)
            document.getElementById(ids[sum2]).innerHTML = player2Icon;
        document.getElementById(ids[sum2 - num2]).textContent = (sum2 - num2 + 1);
    }
    if (sum2 >= 100) {
        sum2 = sum2 - num2;
        document.getElementById(ids[sum2]).innerHTML = player2Icon;
    }
    console.log("Player 2 ");
    console.log(sum2);
    // if(count%2==0)
    // {
    //     num2.removeEventListener("click", player2Dice);
    // }
    // count++;
}
