var squares=document.querySelectorAll(".square");
var rgbTitle=document.getElementById("rgb");
var correctLabel=document.querySelector("#result");
var Title=document.querySelector("#Title");
var Reset=document.querySelector("#Reset");
var buttonList=document.querySelectorAll(".difficulty");

var mainFunction = function(choice){
    Reset.textContent="New colors";
    Title.style.backgroundColor="steelblue";
    var canPlay=true;
    var colors = [];
    for(var i=0;i<choice;i++){
    var r= Math.floor((Math.random()*255)+1);
    var g= Math.floor((Math.random()*255)+1);
    var b= Math.floor((Math.random()*255)+1);
    colors.push("rgb("+r+", "+g+", "+b+")");
    }
var correctAns = Math.floor((Math.random()*choice-1) + 1);
for(var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor=colors[i];
}
for(var i=0;i<squares.length;i++){
    squares[i].addEventListener("click",function(){
        if(this===squares[correctAns]&&canPlay){
            correctLabel.textContent="correct";
            Reset.textContent="Play Again??";
            canPlay=false;
            for(var j=0;j<squares.length;j++){
                 squares[j].style.backgroundColor=colors[correctAns];
                 Title.style.backgroundColor=colors[correctAns];
            }
        }else if(canPlay){
            correctLabel.textContent="Try Again";
            this.style.backgroundColor="#232323";
        }
    });
 }
rgbTitle.textContent=colors[correctAns];
}
var running =6;
 mainFunction(running);
Reset.addEventListener("click",function(){
    result.textContent="";
    mainFunction(running);
});

for(var i=0;i<buttonList.length;i++){
    buttonList[i].addEventListener("click",function(){
        buttonList[0].classList.remove("selected");
        buttonList[1].classList.remove("selected");
        this.classList.add("selected");
        result.textContent="";
        if(this.textContent==="Hard"){
            running=6;
            for(var i=3;i<6;i++){
        squares[i].style.display="block";
        }
        }
        else if(this.textContent==="Easy"){
            running=3;
              for(var i=3;i<6;i++){
        squares[i].style.display="none";
        }
        }
        mainFunction(running);
    });
}