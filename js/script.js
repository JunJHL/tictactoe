/*global $*/

let playerTurn=0;
let playerString="";
let check=true;

let one=$("#tile1").text();
let two=$("#tile2").text();
let three=$("#tile3").text();
let four=$("#tile4").text();
let five=$("#tile5").text();
let six=$("#tile6").text();
let seven=$("#tile7").text();
let eight=$("#tile8").text();
let nine=$("#tile9").text();

$("#button1").click( function() {
    console.log(10%3);
  
    playerString=round(playerTurn);
    performLogic("#button1","#tile1");
    playerTurn++;  
    row(one, two, three, four, five, six, seven, eight, nine);
    endGmae(playerTurn,check);
});

$("#button2").click( function() {
    
    playerString=round(playerTurn);
    performLogic("#button2","#tile2");
    playerTurn++;
    endGmae(playerTurn,check);
});

$("#button3").click( function() {    
   
    playerString=round(playerTurn);
    performLogic("#button3","#tile3");
    playerTurn++; 
    endGmae(playerTurn,check);
});

$("#button4").click( function() {
   
    playerString=round(playerTurn);
    performLogic("#button4","#tile4");
    playerTurn++;
    endGmae(playerTurn,check);
});

$("#button5").click( function() {
   
    playerString=round(playerTurn);
    performLogic("#button5","#tile5");
    playerTurn++; 
    endGmae(playerTurn,check);
});

$("#button6").click( function() {
    
    playerString=round(playerTurn);
    performLogic("#button6","#tile6");
    playerTurn++;
    endGmae(playerTurn,check);
});

$("#button7").click( function() {
    
    playerString=round(playerTurn);
    performLogic("#button7","#tile7");
    playerTurn++;
    endGmae(playerTurn,check);
});

$("#button8").click( function() {
    
    playerString=round(playerTurn);
    performLogic("#button8","#tile8");
    playerTurn++;
    endGmae(playerTurn,check);
});

$("#button9").click( function() {
   
    playerString=round(playerTurn);
    performLogic("#button9","#tile9");
    playerTurn++; 
    endGmae(playerTurn,check);
});

function performLogic(buttonId, tileId) {
    $(buttonId).hide();
    $(tileId).text(playerString);
}

function round(playerNum) { 
    if((playerNum%2)!==0){
        playerString="O";
    }else if(playerNum%2===0){
        playerString="X";
    }
        return playerString;
}

function endGmae(playerNum,draw) {
    if(playerNum>=9) {
        $("h2").text("Draw");
       return draw=false;
    }else{
       return draw=true;
    }
}

function row(first, second, third, forth, fifth, sixth, seventh, eighth, ninth) {
    if(first===second===third) {
        $("#judge").text(playerString+ " Win");
    }else if(forth===fifth===sixth) {
        $("#judge").text(playerString+ " Win");
    }else if(seventh===eighth===ninth) {
        $("#judge").text(playerString+ " Win");
    }
}

function column(first, second, third, forth, fifth, sixth, seventh, eighth, ninth) {
    if(first===forth===seventh) {
        $("#judge").text(playerString+ " Win");
    }else if(second===fifth===eighth) {
        $("#judge").text(playerString+ " Win");
    }else if(third===sixth===ninth) {
        $("#judge").text(playerString+ " Win");
    }
}
function cross(first, second, third, forth, fifth, sixth, seventh, eighth, ninth) {
    if(first===fifth===ninth) {
        $("#judge").text(playerString+ " Win");
    }else if(third===fifth===seventh) {
        $("#judge").text(playerString+ " Win");
    }
}