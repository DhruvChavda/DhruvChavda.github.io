var buttonColours = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var gamePattern = [];
var level = 0;
var flag = 0;
var stbtn = false;

$(".btn").click(function(){
    var userChoosenColour = $(this).attr("id");
    $(this).fadeOut(50).fadeIn(50);
    userClickedPattern.push(userChoosenColour);
    playSound(userChoosenColour);
    animatePress(userChoosenColour);
    gameLogic(userClickedPattern.length-1);
})

function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);
    var randomChoosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChoosenColour);
    var seletedId = "#"+randomChoosenColour;
    $(seletedId).fadeOut(50).fadeIn(50);
    playSound(randomChoosenColour);
    //level inc
    if(stbtn)
    {
        $("#mobile").text("Level :" + level);
    }
    else
    {
        $("#pc").text("Level :" + level);
    }
    level++;
}

function gameLogic(x){
    if(userClickedPattern[x] == gamePattern[x])
    {
        //console.log("YESSSSSS");
        //console.log(x);
        //console.log(gamePattern.length-1);
        if(x==gamePattern.length-1)
        {
            setTimeout(function(){
                playSound("correct");
            },500);
            userClickedPattern=[];
            setTimeout(nextSequence, 1400);
        }
    }    
    else
    {
        //console.log("Nooooooooo");
        playSound("wrong");
        document.getElementById("body").style.backgroundColor="red";
        setTimeout(function(){
            document.getElementById("body").style.backgroundColor="#011F3F";
        },200);
        if(stbtn)
        {
            $("#mobile").html("GAME OVER GGs! <br> Press START key to Restart");
            stbtn=false;
        }
        else
        {
            $("#pc").html("GAME OVER GGs! <br> Press any key to Restart");
        }
        startOver();
    }
}

function startOver(){
    $("#start").fadeIn(500);
    userClickedPattern=[];
    gamePattern=[];
    level=0;
    flag=0;
}

$(document).keypress(function() {
    //console.log( "Handler for .keypress() called." );
    if(flag==0){
    flag=1;
    $("#start").fadeOut(500);
    nextSequence();
    }
});

//start button use
function startButton(){
    //console.log( "Handler for .keypress() called." );
    stbtn=true;
    if(flag==0){
        flag=1;
        $("#start").fadeOut(500);
        nextSequence();
    }
}

document.getElementById("start").addEventListener("click",startButton);

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currColor){
    $("#"+currColor).addClass("pressed");
    setTimeout(function(){
        $("#"+currColor).removeClass("pressed");
    }, 50)
}