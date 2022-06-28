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
//let enemy1 = document.querySelector(".enemy.type-1");
//let enemy2 = document.querySelector(".enemy.type-2");
//let bullet = document.querySelector(".bullet");

/*

// добавляет + 1 жизнь, как добавить еще одну пока не разобралась

let addMoreLifes = document.getElementById("lifes");
let newLife = document.createElement("span");
addMoreLifes.insertAdjacentElement("beforeend", newLife);
*/

/* Block start*/

//При клике на кнопку старт открывается игровое поле
startBtn.onclick = function () {
  startGame();
};

function startGame() {
  startBlock.style.display = "none";
  gameBlock.style.display = "block";
  createEnemy();
  setInterval(createEnemy,5000);
 // moveBullet(bullet);
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
     // enemy.style.left = document.querySelector("body").clientWidth + 200 + "px";
    }
  }, 100);
}
//Создание врагов
position = 100;
function createEnemy(){
 let enemy = document.createElement("div");
     enemy.className = "enemy type-1";
     enemy.style.top = position + "px";
     position = position + 100;
     gameBlock.appendChild(enemy);
     moveEnemy(enemy);

 let enemy2 = document.createElement("div");
     enemy2.className = "enemy type-2";
     gameBlock.appendChild(enemy2);
     moveEnemy(enemy2);};
/* Block bullet*/
//Создание пули 
function createBullet(){
  let bullet = document.createElement("div");
  bullet.className = "bullet";
  gameBlock.appendChild(bullet);
//Перемещение пули
 let timerForBullet = setInterval(function () {
    bullet.style.left = bullet.offsetLeft + 10 + "px";
    if (bullet.offsetLeft > document.querySelector("body").clientWidth) {
      //bullet.style.left = bullet.offsetLeft - 1750 +"px";
      bullet.remove();
      clearInterval(timerForBullet);
         
    }
  }, 10);

};



/*Block gamer*/
// События для клавиш на клавиатуре
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
   if (event.keyCode ==32){
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



