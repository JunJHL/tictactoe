/*global $*/

let playerTurn=0;
let playerString="";
let check=true;

$("#button1").click( function() {
    console.log(10%3);
  
    playerString=conditional(playerTurn);
    performLogic("#button1","#tile1");
    playerTurn++;  
    endGmae(playerTurn,check);
});

$("#button2").click( function() {
    
    playerString=conditional(playerTurn);
    performLogic("#button2","#tile2");
    playerTurn++;
    endGmae(playerTurn,check);
});

$("#button3").click( function() {    
   
    playerString=conditional(playerTurn);
    performLogic("#button3","#tile3");
    playerTurn++; 
    endGmae(playerTurn,check);
});

$("#button4").click( function() {
   
    playerString=conditional(playerTurn);
    performLogic("#button4","#tile4");
    playerTurn++;
    endGmae(playerTurn,check);
});

$("#button5").click( function() {
   
    playerString=conditional(playerTurn);
    performLogic("#button5","#tile5");
    playerTurn++; 
    endGmae(playerTurn,check);
});

$("#button6").click( function() {
    
    playerString=conditional(playerTurn);
    performLogic("#button6","#tile6");
    playerTurn++;
    endGmae(playerTurn,check);
});

$("#button7").click( function() {
    
    playerString=conditional(playerTurn);
    performLogic("#button7","#tile7");
    playerTurn++;
    endGmae(playerTurn,check);
});

$("#button8").click( function() {
    
    playerString=conditional(playerTurn);
    performLogic("#button8","#tile8");
    playerTurn++;
    endGmae(playerTurn,check);
});

$("#button9").click( function() {
   
    playerString=conditional(playerTurn);
    performLogic("#button9","#tile9");
    playerTurn++; 
    endGmae(playerTurn,check);
});

function performLogic(buttonId, tileId) {
    $(buttonId).hide();
    $(tileId).text(playerString);
}

function conditional(playerNum) { 
    if((playerNum%2)!==0){
        playerString="O";
    }else if(playerNum%2===0){
        playerString="X";
    }
        return playerString;
}

function endGmae(playerNum,draw) {
    if(playerNum>=9) {
        $("h2").text("Game End");
       return draw=false;
    }else{
       return draw=true;
    }
}
