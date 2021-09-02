var isinmaze = false;
var start = false;
var score = 0;

window.onload = function () {

	document.getElementById("start").addEventListener("click", function(){
  	start = true;
  	isinmaze = true;
  	var bound = document.getElementsByClassName("boundary")
  	for(var i = 0; i< bound.length; i++){
  		bound[i].style.backgroundColor = "#eeeeee";
  	}
  	// document.getElementById("boundary").innerHTML = "Let's Goo your score is: " + score ;
	});

	document.getElementById("game").addEventListener("mouseleave", function(){
		isinmaze = false;
	});

	var bound2 = document.getElementsByClassName("boundary")
	for(var i = 0; i< bound2.length-1; i++){
	bound2[i].addEventListener("mouseover", function(){
		if(start){			
  		var bound = document.getElementsByClassName("boundary")
  		for(var i = 0; i< bound.length-1; i++){
  		bound[i].style.backgroundColor = "red";
  		}
  		start = false;
  		score  -= 10 ;
  		document.getElementById("status").innerHTML ="You lost, score: " + score;
		}});}

	document.getElementById("end").addEventListener("mouseover", function(){
	if(start && isinmaze){
		start = false;
		score  += 5;
		document.getElementById("status").innerHTML ="You won, score: " + score;
		var bound = document.getElementsByClassName("boundary")
  		for(var i = 0; i< bound.length-1; i++){
  		bound[i].style.backgroundColor = "green";
  		}
		}else if(!isinmaze){
			start = false;
			document.getElementById("status").innerHTML ="Don't cheat bro";
		}

	});
		
	

}