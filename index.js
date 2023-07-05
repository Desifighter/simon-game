var firstStart = false;
$(document).keypress(function (event) {
  if (event.key === "a" && !firstStart) {
    gameStart();
  }
});

$(document).keypress(function (event) {
  if (firstStart) {
    gameStart();
  }
});


$(".green").click(function () {
  buttonAnimation("green");
  checkSequence(0);
});

$(".red").click(function () {
  buttonAnimation("red");
  checkSequence(1);
});

$(".yellow").click(function () {
  buttonAnimation("yellow");
  checkSequence(2);
});

$(".blue").click(function () {
  buttonAnimation("blue");
  checkSequence(3);
});

function buttonAnimation(params) {
  var audio = new Audio("./sounds/"+params+".mp3");
  audio.play();
  $("."+params).addClass("pressed");
  setTimeout(function () {
    $("."+params).removeClass("pressed");
  }, 100);
}

var levels = 0;
var arr = [];

function gameStart() {
  btnIndex = 0;
  levels++;
  var addNum = Math.floor(Math.random() * 4);
  $("#level-title").text("Level " + levels);
  arr.push(addNum);

  if (addNum == 0) {
      buttonAnimation("green");
  } else if (addNum == 1) {
      buttonAnimation("red");
  } else if (addNum == 2) {
      buttonAnimation("yellow");
  } else {
      buttonAnimation("blue");
  }

}

var btnIndex = 0;

function checkSequence(params) {
      if (arr[btnIndex]==params) {
         btnIndex++;
         if (btnIndex==arr.length) {

          setTimeout(gameStart, 500);
          
         }
      }
      else{
        var audio = new Audio("./sounds/wrong.mp3");
        audio.play();
        $("body").addClass("game-over");
        setTimeout(function (params) {
          $("body").removeClass("game-over");
        }, 100);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        levels = 0;
        arr = [];
        btnIndex = 0;
        firstStart = true;
      }
}
