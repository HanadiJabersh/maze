function startGame()
{ 
      var count=0;
    var label= document.getElementById("game-start");
    label.textContent="THE GAME STARTED!! GOODLUCK!";
    var boundary = document.getElementsByClassName("boundary");
    
       
    for (var i = 0; i <boundary.length; i++) {
        boundary[i].onmouseover=hit;    
      
    }
}
    
function hit()
{
    var boundary = document.getElementsByClassName("boundary");
    for (var i = 0; i <boundary.length; i++) {
        boundary[i].style.backgroundColor="red";
            
    var label= document.getElementById("game-start");
    label.innerHTML="Hardluck! You Lost.";
    tryagain();  
  }
}
function tryagain(){
    var button = document.getElementById("trybtn");
    button.classList.remove("btnstyle")
}
function win(){
  
    var label= document.getElementById("game-start");
    label.innerHTML="Congratulations!! YOU WON!!"
   
    tryagain();
}