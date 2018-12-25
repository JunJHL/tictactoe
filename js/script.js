/*global $*/

let playerTurn=0;
let playerString="X";



$("#button1").click( function() {
    performLogic("#button1","#tile1");
});

$("#button2").click( function() {
    performLogic("#button2","#tile2");
});

$("#button3").click( function() {    
    performLogic("#button3","#tile3");
});

$("#button4").click( function() {
    performLogic("#button4","#tile4");
});

$("#button5").click( function() {
    performLogic("#button5","#tile5");
});

$("#button6").click( function() {
    performLogic("#button6","#tile6");
});

$("#button7").click( function() {
    performLogic("#button7","#tile7");
});

$("#button8").click( function() {
    performLogic("#button8","#tile8");
});

$("#button9").click( function() {
    performLogic("#button9","#tile9");
});

function performLogic(buttonId, tileId) {
        $(buttonId).hide();
        $(tileId).text(playerString);
          
    let one=$("#tile1").text();
    let two=$("#tile2").text();
    let three=$("#tile3").text();
    let four=$("#tile4").text();
    let five=$("#tile5").text();
    let six=$("#tile6").text();
    let seven=$("#tile7").text();
    let eight=$("#tile8").text();
    let nine=$("#tile9").text();
    
    endGame(playerTurn);
    win(one, two, three, four, five, six, seven, eight, nine);
    
     if(endGame(playerTurn)===false) {
         $(".container").hide();
         $("body").css("background-image","url(http://p4.i.ntere.st/8bc385b21cc17a82baf294de0c405d99_480.jpg)");     
    }else if(win(one, two, three, four, five, six, seven, eight, nine)===false) {
        $(".container").hide();
        $("body").css("background-image","url(http://s9.sinaimg.cn/middle/6db91978x9a417e277f98&690)");
    }
    
        playerTurn++; 
        playerString=round(playerString,playerTurn);
       
}

function round(player,round) { 
    if(round%2===0){
       return player="X";
    }else if(player%2!==0){
       return player="O";
    }
        return player;
}

function endGame(playerNum) {
    if(playerNum>=9) {
        alert("Draw");
        return false;
    }
        return true;
}


function win(first, second, third, forth, fifth, sixth, seventh, eighth, ninth) {
    if(first===second && second===third && (first ==="X" || first==="O")) {
        alert(playerString+ " Win");
        return false;
    }
    if(forth===fifth && fifth===sixth && (forth ==="X" || forth==="O")) {
      alert(playerString+ " Win");
        return false;
    }
    if(seventh===eighth && eighth===ninth && (seventh==="X" || seventh==="O")) {
        alert(playerString+ " Win");
        return false;
    }
    if(first===forth && first===seventh && (first==="X" || first==="O")) {
      alert(playerString+ " Win");
        return false;
    }
    if(second===fifth && second===eighth && (second==="X" || second==="O")) {
      alert(playerString+ " Win");
        return false;
    }
    if(third===sixth && third===ninth && (third ==="X" || third==="O")) {
      alert(playerString+ " Win");
        return false;
    }
    if(first===fifth && first===ninth && (first ==="X" || first==="O")) {
      alert(playerString+ " Win");
        return false;
    }
    if(third===fifth && third===seventh && (third ==="X" || third==="O")) {
      alert(playerString+ " Win");
        return false;
    }
        return true;
}
