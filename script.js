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
let enemy1 = document.querySelector(".enemy.type-1");
let enemy2 = document.querySelector(".enemy.type-2");
let bullet = document.querySelector(".bullet");

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
  startGame();
};
function startGame() {
  startBlock.style.display = "none";
  gameBlock.style.display = "block";
  moveEnemy(enemy1);
  moveEnemy(enemy2);
  moveBullet(bullet);
}

/*function moveBullet(bullet){
  bulletTimer =  setInterval(function (){
    bullet.style.left = bullet.offsetLeft + 10 + "px";
    if (bullet.offsetLeft>document.querySelector("body").clientWidth){
      bullet.remove();
      clearInterval(bulletTimer);
    }
console.dir(bulletTimer);
  }, 5);
};*/

function moveBullet(bullet) {
  setInterval(function () {
    bullet.style.left = bullet.offsetLeft + 10 + "px";
    if (bullet.offsetLeft > document.querySelector("body").clientWidth) {
      bullet.style.left = bullet.offsetLeft - 1750 +"px";
    }
  }, 15);
};
// Перемещение врагов
function moveEnemy(enemy) {
  console.dir(enemy);
  setInterval(function () {
    enemy.style.left = enemy.offsetLeft - 10 + "px";
    if (enemy.offsetLeft < -100) {
      enemy.style.left =
        document.querySelector("body").clientWidth + 200 + "px";
    }
  }, 10);
}

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
  if (event.keyCode == 87) {
    if (gamer.offsetTop > 70) {
      gamer.style.top = gamer.offsetTop - 10 + "px";
    }
  }
  if (event.keyCode == 83) {
    if (gamer.offsetTop < document.querySelector("#app").clientHeight - 200) {
      gamer.style.top = gamer.offsetTop + 10 + "px";
    }
  }
};
