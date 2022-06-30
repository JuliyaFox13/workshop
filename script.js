//поиск елементов по селектору и тегу

let h2 = document.querySelector("#start h2");
let startBtn = document.querySelector("#start button");

let audioplayer = document.querySelector("audio");
let startBlock = document.querySelector("#start");
let gameBlock = document.querySelector("#game");
let soundBtn = document.querySelector("#sound img");

let score = document.querySelector("#score span");

let life = document.querySelector("#lifes");
let countLifes = 3;

let gamer = document.querySelector("#player");
let gamerSkin = "skin_1";
/* Block start*/

//При клике на кнопку старт открывается игровое поле
startBtn.onclick = function () {
  startGame();
};

function startGame() {
  startBlock.style.display = "none";
  gameBlock.style.display = "block";
  gamer.className = gamerSkin;
  createLifes();
  createEnemy();
}
/* Block enemy*/
//Перемещение врагов
function moveEnemy(enemy) {
  let timerForEnemy = setInterval(function () {
    enemy.style.left = enemy.offsetLeft - 10 + "px";
    if (enemy.offsetLeft < -100) {
      enemy.remove();
      createEnemy();
      clearInterval(timerForEnemy);
      die();
    }
  }, 100);
}
//Создание врагов

function createEnemy() {
  let enemy = document.createElement("div");
  enemy.className = "enemy " + typeEnemy();
  enemy.style.top =
    random(100, document.querySelector("#app").clientHeight - 150) + "px";

  gameBlock.appendChild(enemy);
  moveEnemy(enemy);

  /* let enemy2 = document.createElement("div");
     enemy2.className = "enemy type-2";
     gameBlock.appendChild(enemy2);
moveEnemy(enemy2);*/
}

function typeEnemy() {
  if (random(1, 2) == 1) {
    return "type-1";
  } else {
    return "type-2";
  }
}

/* Block bullet*/
//Создание пули

function createBullet() {
  let bullet = document.createElement("div");
  bullet.className = "bullet";
  bullet.style.top = gamer.offsetTop + 140 + "px";

  gameBlock.appendChild(bullet);
  moveBullet(bullet);
}
//Перемещение пули

function moveBullet(bullet) {
  let timerForBullet = setInterval(function () {
    bullet.style.left = bullet.offsetLeft + 10 + "px";
    if (bullet.offsetLeft > document.querySelector("body").clientWidth) {
      bullet.remove();
      clearInterval(timerForBullet);
    }

    isBoom(bullet);
  }, 10);
}
/* block for killing enemies*/
function isBoom(bullet) {
  let enemy = document.querySelector(".enemy");
  if (
    bullet.offsetTop > enemy.offsetTop &&
    bullet.offsetTop < enemy.offsetTop + enemy.clientHeight &&
    bullet.offsetLeft > enemy.offsetLeft
  ) {
    createBoom(bullet.offsetTop, bullet.offsetLeft);
    score.innerText = Number(score.innerText) + 1;
    bullet.remove();
    enemy.remove();
    createEnemy();
  }
}

function createBoom(top, left) {
  let boom = document.createElement("div");
  boom.className = "boom";
  boom.style.top = top - 100 + "px";
  boom.style.left = left - 100 + "px";

  gameBlock.appendChild(boom);
  setTimeout(function () {
    boom.remove();
  }, 1000);
}

function random(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

function die() {
  countLifes = countLifes - 1;
  if (countLifes <= 0) {
    endGame();
  }
  createLifes();
}

function endGame() {
  let scoreBlock = document.querySelector("#end h3 span");
  scoreBlock.innerText = score.innerText;

  gameBlock.innerHTML = "";
  let endBlock = document.querySelector("#end");
  endBlock.style.display = "block";
  let restartBtn = document.querySelector("#end button");
  restartBtn.onclick = restart;
}
function restart() {
  location.reload();
}

function createLifes() {
  life.innerHTML = "";
  let count = 0;
  while (count < countLifes) {
    let span = document.createElement("span");
    life.appendChild(span);
    count = count + 1;
  }
}

/*Block gamer*/

selectSkin1 = document.querySelector("#skin_1");

selectSkin1.onclick = function () {
  selectSkin1.className = "selected";
  selectSkin2.className = "";
  gamerSkin = "skin_1";
};

selectSkin2 = document.querySelector("#skin_2");
selectSkin2.onclick = function () {
  selectSkin2.className = "selected";
  selectSkin1.className = "";
  gamerSkin = "skin_2";
};
// События для клавиш на клавиатуре
document.onkeydown = function (event) {
  if (event.keyCode == 87) {
    if (gamer.offsetTop > 70) {
      gamer.style.top = gamer.offsetTop - 60 + "px";
    }
  }
  if (event.keyCode == 83) {
    if (gamer.offsetTop < document.querySelector("#app").clientHeight - 200) {
      gamer.style.top = gamer.offsetTop + 60 + "px";
    }
  }
  if (event.keyCode == 32) {
    createBullet();
  }
};

/*Block options*/
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
