var decreaseSeconds;
var secondsLeft = 20;
var count = 0;
var img = document.getElementsByClassName("clickImage");

// Start the timer function

function startTimer() {
	decreaseSeconds = setInterval(countDown, 1000);
	for (var i = 0; i < img.length; i++) {
	img[i].setAttribute("data-click", "true");
	}
}

document.getElementById("startButton").addEventListener("click", startTimer)

//Count down function

function countDown(){
  if(secondsLeft > 0){
    document.getElementById("seconds").innerHTML = secondsLeft-=1;
  } else {
      document.getElementById("timeLeft").innerHTML = "Your time is up!";
      document.getElementById("timeLeft").className = "change";
      alert("You clicked " + count + " Pictures");
      alert("Game Over! Play again");
      for (var i = 0; i < img.length; i++) {
       img[i].setAttribute("data-click", "false");
      };
      clearInterval(decreaseSeconds);
  };
}; 

//Count number of clicks

function countClicks(){      
    if (this.getAttribute('data-click') == 'true'){
      count++;
      this.setAttribute('data-click', 'false');
      this.className = "clicked";
      document.getElementById("clickCount").innerHTML = count;
    };
    
    	if (count === 20) {
      alert("You've clicked all " + count + " pictures with " + secondsLeft + " seconds left on the clock!")
      alert("Game Over! Play again")
      clearInterval(decreaseSeconds);
      
    };
  };

 for (i = 0; i < 20; i++){
    document.getElementsByClassName("clickImage")[i].addEventListener("click", countClicks);
  };


//document.getElementById("startButton").addeventlistener("click", startTimer);
//document.getElementsByClassName("thumbnail").addeventlistener("click", startCounter);