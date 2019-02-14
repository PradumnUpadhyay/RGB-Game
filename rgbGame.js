var numSq = 6;
var colors = [];
var squares = document.querySelectorAll(".square");
var picked = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var msg = document.querySelector("#msg");
var mdButtons = document.querySelectorAll(".mode");
var rstButtton = document.querySelector("#btn");

init();

function init()
{
	setUpModeButtons();
    setUpSquares();
    reset();
}

function setUpSquares()
{
	for(var i = 0; i < squares.length; i++)
{   
    squares[i].addEventListener("click", function()
    {
    	
     var clicked = this.style.background;
     
     if(clicked === picked){
     	msg.textContent = "Correct!";
     	changeColors(clicked);
     	btn.textContent = "Play Again?";
     }
     else
     {
     	this.style.background = "#232323";
     	msg.textContent = "Try Again!";
     }
    });
 
}
   reset();
}

function setUpModeButtons()
{
	for(var i = 0; i < mdButtons.length; i++)
{
	 mdButtons[i].addEventListener("click", function()
	 {
	 	mdButtons[0].classList.remove("selected");
	 	mdButtons[1].classList.remove("selected");
     this.classList.add("selected");

     if(this.textContent === "Easy")
		{
			numSq = 3;
		}else{
			numSq = 6;
		}
		reset();
	 });
   }
}

function reset()
{
	colors = generateColors(numSq);
		picked = pickColor();
		colorDisplay.textContent = picked;
         msg.textContent = "";
         btn.textContent = "NEW COLORS";

		for(var i = 0; i < squares.length; i++)
		{
			if(colors[i]){squares[i].style.background = colors[i];
                     squares[i].style.display = "block";
			}
			else{
              		squares[i].style.display = "none";	
		}
		document.querySelector("h1").style.background = "steelblue";
			}
	}

colorDisplay.textContent = picked;

btn.addEventListener("click",function()
	{
		reset();
	});


function changeColors(color)
{
	for(var i = 0; i < squares.length; i++)
	{
      squares[i].style.background = color;
      document.querySelector("h1").style.background = color;
	}
}

function pickColor()
 {
	var random = Math.floor(Math.random() * 6);
 return colors[random];
}

function generateColors(num)
{
   var arr = [];

for(var i = 0; i < num; i++)
{
  arr.push(randomColors());
}
   return arr;
}

function randomColors()
{
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
     
     return "rgb(" + r + ", " + g + ", " + b+")";
}