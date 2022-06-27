//поиск елементов по селектору и тегу

let h2 = document.querySelector("#start h2");
let startBtn = document.querySelector("#start button");
let life = document.querySelector("#lifes");
let score = document.querySelector("#score");
let audioplayer = document.querySelector("audio");
let startBlock = document.querySelector("#start");
let gameBlock = document.querySelector("#game");
let soundBtn = document.querySelector("#sound img");
let gamer = document.querySelector("#player");

/* task after lesson 1
start.style.background = "green";
start.style.height = "100px";
start.style.widht = "200px";
score.style.color = "blue";
console.dir(start);
console.dir(life);
console.dir(score);

// добавляет + 1 жизнь, как добавить еще одну пока не разобралась

let addMoreLifes = document.getElementById("lifes");
let newLife = document.createElement("span");
addMoreLifes.insertAdjacentElement("beforeend", newLife);

//Task after lesson 2

let source = document.querySelector("audio source");*/
/*console.dir(source);
let audio1Btn = document.querySelector("#firstMusic");
let audio2Btn = document.querySelector("#secondMusic");

audio1Btn.onclick = function () {
  source.src = "audio/1.mp3";
  player.load();
  player.play();
};

audio2Btn.onclick = function () {
  source.src = "audio/2.mp3";
  player.load();
  player.play();
};*/

//task after 3 lesson

//При клике на кнопку старт открывается игровое поле
startBtn.onclick = function () {
  startBlock.style.display = "none";
  gameBlock.style.display = "block";
};

// При клике на изображение звука включается или выключается мелодия
let sound = "off";
soundBtn.onclick = function () {
  if (sound == "on") {
    soundBtn.src = "images/mute_sound.png";
    sound = "off";
    audioplayer.pause();
  } else {
    soundBtn.src = "images/sound_on.png";
    sound = "on";
    audioplayer.play();
  }
};
// Перемещение игрока по координате вверх/вниз
document.onkeydown = function (event) {
  console.dir(event);
  if (event.keyCode == 87) {
    gamer.style.top = gamer.offsetTop - 10 + "px";
  }
  if (event.keyCode == 83) {
    gamer.style.top = gamer.offsetTop + 10 + "px";
  }
};
