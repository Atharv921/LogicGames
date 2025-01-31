//function towerOfHanoi(n, from_rod,  aux_rod,  to_rod)
//{
//    if(n==0) return;
//    towerOfHanoi(n-1,from_rod,to_rod,aux_rod);
//    console.log(`move ${n}th disk from ${from_rod} to ${to_rod}`)
//    towerOfHanoi(n-1,aux_rod,from_rod,to_rod);
//}
// var N = 3;
// towerOfHanoi(N, 'A', 'B', 'C');
let level = 4;
let target = 0;
let sec = 00;
let min = 00;
let id_variable = 0;
let levelBtn = document.querySelectorAll(".level");
let seconds = document.getElementById("sec");
let minutes = document.getElementById("min");
var Interval;
console.log(level);
let htmlStart = `<div class="disk1 d1 dk1" onclick="eventHandler(1)"></div>`;
for (var i = 1; i < level; i++) {
  htmlStart =
    htmlStart +
    `<div class="disk${i + 1} d${i + 1} dk${i + 1}" onclick="eventHandler(${
      i + 1
    })"></div>`;
}
// let htmlStart = `<div class="disk1 d1" onclick="eventHandler(1)"></div>
//                     <div class="disk2 d2" onclick="eventHandler(2)"></div>
//                     <div class="disk3 d3" onclick="eventHandler(3)"></div>`;
document.querySelector(".view").classList.add("modal");

document.querySelector(".modal").innerHTML = `<div class="ok">
          <div class="scoreBoard">
            <h3>RULES</h3>
            <p>1.You can move One disk at a time</p>
            <p>2.You can't put large disk on small disk</p>
            <p>3.You can only move uppermodt disks</p>
            <div class="view20"></div>
        </div>
      </div>`;
setTimeout(function () {
  document.querySelector(".view").innerHTML = "";
}, 8000);
document.querySelector(".view").classList.remove("modal");
// RESETTING ALL FOR BEGINNING'S BEFORE START POSITION ///////////////////////

let resetIt = function () {
  min = 00;
  sec = 00;
  document.querySelector(".time").classList.add("hidden");
  for (var i = 1; i <= 3; i++) {
    document.querySelector(`.t${i}`).innerHTML = "";
  }

  document.querySelector(".view").classList.remove("modal");
  document.querySelector(".view").innerHTML = "";
  console.log("Start word adding");
  document.querySelector(".st").value = "<h2>Start</h2>";
  // document.querySelector(".st").innerHTML = "Start";
  // document.querySelector(".st").classList.toggle("hidden");
};

let setTheLevel = function (x) {
  console.log("Setting level to " + x);
  level = Number(x);
  htmlStart = `<div class="disk1 d1 dk1" onclick="eventHandler(1)"></div>`;
  for (var i = 1; i < level; i++) {
    htmlStart =
      htmlStart +
      `<div class="disk${i + 1} d${i + 1} dk${i + 1}" onclick="eventHandler(${
        i + 1
      })"></div>`;
  }
  for (var i = 3; i <= 8; i++) {
    levelBtn[i - 3].classList.remove("decForLevel");
  }
  levelBtn[x - 3].classList.add("decForLevel");
  resetIt();
  if (document.querySelector(".st").textContent == "Retry") {
    reset();
  }
};
// SETTING AFTER STARITNG SITUATION FOR GAME //////////////////////////////////////////

let reset = function () {
  min = 00;
  sec = 00;
  document.querySelector(".time").classList.add("hidden");
  for (var i = 1; i <= 3; i++) {
    document.querySelector(`.t${i}`).innerHTML = "";
  }

  document.querySelector(".view").classList.remove("modal");
  document.querySelector(".view").innerHTML = "";
  console.log("Start word adding");
  document.querySelector(".st").innerHTML = "Start";
  // document.querySelector(".st").innerHTML = "Start";
  // document.querySelector(".st").classList.toggle("hidden");
};

let resetter = function () {
  min = 00;
  sec = 00;
  minutes.innerHTML = "0" + min;

  document.querySelector(".t1").innerHTML = htmlStart;
  for (var i = 2; i <= 3; i++) {
    document.querySelector(`.t${i}`).innerHTML = "";
  }
  document.querySelector(".view").classList.remove("modal");
  // document.querySelector(".st").classList.toggle("hidden");
};

// SUPPORTIVE FUNCTION FOR TIMER /////////////////////////////////////////////////////////////

let startTime = function () {
  sec++;
  if (sec <= 9) {
    seconds.innerHTML = "0" + sec;
  }
  if (sec > 9) {
    seconds.innerHTML = sec;
  }
  if (sec > 59) {
    min++;
    minutes.innerHTML = "0" + min;
    sec = 0;
    seconds.innerHTML = "0" + sec;
  }
  if (min >= 1) {
    minutes.innerHTML = "0" + min;
  }
  if (min > 9) {
    minutes.innerHTML = min;
  }
};

//// FOR STARTING TIMER AND START BUTTON EVENT TO CHANGE IT TO RETRY //////////////////////////////

let start = function () {
  console.log(level);
  clearInterval(Interval);
  Interval = setInterval(startTime, 999);

  document.querySelector(".st").textContent = "Retry";
  document.querySelector(".st").classList.add("retry");
  document.querySelector(".time").classList.remove("hidden");
  resetter();
};

//// FOR HIDING BORDER AND UNHIDING BORDER DISKS ////////////////////////////////////////////////

let eventHandler = (i) => {
  for (var j = 1; j <= level * 3; j++) {
    try {
      if (j != i) {
        document.querySelector(`.disk${j}`).classList.remove("dec");
      }
    } catch {
      console.log("ERROR");
    }
  }
  document.querySelector(`.disk${i}`).classList.toggle("dec");
  target = i;
  console.log(target);
};

///// THIS FUNCTION FOR INSERTION OF HTML ///////////////////////////////////////////
let checking = function (iter) {
  try {
    iter = iter - 1;

    console.log("iter of try " + iter);
    document.querySelector(`.disk${target - iter}`).classList.remove("df");
    if (iter <= 0) {
      document.querySelector(`.disk${target - level}`).classList.remove("df");
    }
  } catch {
    console.log("iter of catch " + iter);
    if (iter <= 0) {
      document.querySelector(`.disk${target - iter}`).classList.remove("df");
    }
    checking(iter);
  }
};

let checkingTheRules = function (k) {
  var t = k;
  var tar = target;
  let arrRule1 = new Array();
  let arrRule2 = new Array();
  let arrRule3 = new Array();
  for (var j = k; j > 1; j--) {
    t = t - 1;
    tar = tar - 1;
    console.log("Printing tar : " + tar);
    var str1 = String(document.querySelector(`.t1`).innerHTML).includes(
      `<div class="disk${tar} d${tar} dk${t}" onclick="eventHandler(${tar})"></div>`
    );
    var str2 = String(document.querySelector(`.t2`).innerHTML).includes(
      `<div class="disk${tar} d${tar} dk${t}" onclick="eventHandler(${tar})"></div>`
    );
    var str3 = String(document.querySelector(`.t3`).innerHTML).includes(
      `<div class="disk${tar} d${tar} dk${t}" onclick="eventHandler(${tar})"></div>`
    );
    arrRule1.push(str1);
    arrRule2.push(str2);
    arrRule3.push(str3);
  }
  console.log(arrRule1);
  console.log(arrRule2);
  console.log(arrRule3);

  if (arrRule1.includes(true)) {
    t = 0;
  } else if (arrRule2.includes(true)) {
    t = 1;
  } else if (arrRule3.includes(true)) {
    t = 2;
  } else {
    console.log("PRINTING ERROR FROM checkingTheRules()  ");
    document.querySelector(`.disk${target - 100}`).classList.remove("df");
  }
};

let it = 0;
let tg2 = 3;
var str;
let checkToInsert = function (iter2, dk) {
  let arr = new Array();
  for (var k = 1; k < level; k++) {
    iter2 = iter2 - 1;
    dk = target - iter2;
    dk > 2 * level && dk <= 3 * level
      ? (dk = target - iter2 - 2 * level)
      : dk > level && dk <= 2 * level
      ? (dk = target - iter2 - level)
      : (dk = target - iter2);
    str = String(document.querySelector(`.t${it}`).innerHTML).includes(
      `<div class="disk${target - iter2} d${
        target - iter2
      } dk${dk}" onclick="eventHandler(${target - iter2})"></div>`
    );
    arr.push(str);
  }
  console.log("arr>>>>>>>>>>");
  console.log(arr);
  if (arr.includes(true)) {
    tg2 = 3;
  } else {
    console.log("READY TO INSERT BY FUNCTION");
    return true;
  }
  // return [...arr];
  // for (let x in arr) {
  //   if (arr[x] || arr[x-1]) {
  //     tg2 = 3;
  //   } else {
  //     return true;
  //   }
  // }
};

let checkWinner = function (iter) {
  let arrWin = new Array();

  for (var k = 1; k <= iter; k++) {
    var st = String(document.querySelector(`.t3`).innerHTML).includes(
      `<div class="disk${k + 2 * iter} d${
        k + 2 * iter
      } dk${k}" onclick="eventHandler(${k + 2 * iter})"></div>`
    );
    arrWin.push(st);
  }
  console.log(arrWin);
  if (arrWin.includes(false)) {
    return false;
  } else {
    return true;
  }
};

let HTML_handler = (i) => {
  console.log("Entered");
  var t;

  //// ERROR IS COMPULSORY FOR EXECUTION ///////////////////////////////////////////////

  try {
    try {
      if (target == 2 || target == 2 + level || target == 2 + 2 * level)
        document.querySelector(`.disk${target - 1}`).classList.remove("df");
      else if (target == 1 || target == 1 + level || target == 1 + 2 * level)
        document.querySelector(`.disk${target - 100}`).classList.remove("df");
      else
        for (var k = 3; k <= level; k++) {
          if (target == k || target == k + level || target == k + 2 * level) {
            console.log("Entered to run checkingTheRules   ");
            checkingTheRules(k);
            // try {
            //   console.log("CHECKING IN TRY");
            //   checking(level);
            // } catch {
            //   console.log("CHECKING IN CATCH");
            //   document
            //     .querySelector(`.disk${target - 1}`)
            //     .classList.remove("df");
            // }
          }
        }
      //else if(target == 3 || target==6 || target==9) document.querySelector(`.disk${target+1}`).classList.remove("df");
      document.querySelector(`.disk${target}`).classList.remove("dec");
    } catch (err) {
      console.log("ERROR" + `${err}`);
      var dk = target;
      dk > 2 * level && dk <= 3 * level
        ? (dk = target - 2 * level)
        : dk > level && dk <= 2 * level
        ? (dk = target - level)
        : (dk = target);
      console.log("dk value " + dk);
      //CHECKING TARGET///////////////////////////////////////////////////////////////

      if (
        String(document.querySelector(`.disk${target}`).classList) ==
        `disk${target} d${target} dk${dk} dec`
      ) {
        document.querySelector(`.disk${target}`).classList.remove("dec");
        let tg = target;
        if (target >= 1 && target <= level) {
          i == 2 ? (target += level) : i == 3 ? (target += 2 * level) : (t = 0);
        } else if (target >= 1 + level && target <= 2 * level) {
          i == 1 ? (target -= level) : i == 3 ? (target += level) : (t = 0);
        } else if (target >= 1 + 2 * level && target <= 3 * level) {
          i == 1 ? (target -= 2 * level) : i == 2 ? (target -= level) : (t = 0);
        }

        //INSERTING HTML BY CHECKING CONDITIONS OF GAME  ////////////////////////////////////////////////
        it = i;
        if (target == 2 || target == 2 + level || target == 2 + 2 * level) {
          if (
            !String(document.querySelector(`.t${i}`).innerHTML).includes(
              `<div class="disk${target - 1} d${target - 1} dk${
                dk - 1
              }" onclick="eventHandler(${target - 1})"></div>`
            )
          ) {
            document
              .querySelector(`.t${i}`)
              .insertAdjacentHTML(
                "afterbegin",
                `<div class="disk${target} d${target} dk${dk}" onclick="eventHandler(${target})"></div>`
              );
            document.querySelector(`.d${tg}`).remove();
          }
        } else if (
          target == 1 ||
          target == 1 + level ||
          target == 1 + 2 * level
        ) {
          document
            .querySelector(`.t${i}`)
            .insertAdjacentHTML(
              "afterbegin",
              `<div class="disk${target} d${target} dk${dk}" onclick="eventHandler(${target})"></div>`
            );
          document.querySelector(`.d${tg}`).remove();
        } else if (checkToInsert(level, dk)) {
          document
            .querySelector(`.t${i}`)
            .insertAdjacentHTML(
              "afterbegin",
              `<div class="disk${target} d${target} dk${dk}" onclick="eventHandler(${target})"></div>`
            );
          document.querySelector(`.d${tg}`).remove();
        }
        //document.querySelector(`.t${i}`).insertAdjacentHTML('afterbegin', `<div class="disk${target} d${target}" onclick="eventHandler(${target})"></div>` );

        //CHECKING WINNER ////////////////////////////////////////////////////////////////////////////////////

        console.log("clicked");
        target = 0;
        if (checkWinner(level)) {
          clearInterval(Interval);
          setTimeout(function () {
            document.querySelector(".view").classList.add("modal");
            let score = 0;
            if (min * 60 + sec <= 15 * (level - 2)) {
              score = 100;
            } else if (min * 60 + sec > 15 * (level - 2)) {
              score = Number(100 - (min * 30 + (sec - 15 * (level - 2))) / 2);
            }
            if (score <= 10) {
              score = 10;
            }
            id_variable = id_variable + 1;
            function sendInfo() {
              var info = {
                highScore: score,
                id: id_variable,
              };
              let request = new XMLHttpRequest();
              request.open("POST", `/static/tower/${JSON.stringify(info)}`);
              request.onload = () => {
                let flaskMsg = request.responseText;
                // document.querySelector('.highScore').textContent = Number(flaskMsg);
                // console.log(Number(document.querySelector(".highScore").textContent));
                // console.log(typeof (document.querySelector(".highScore").textContent));
                document.querySelector(".view").innerHTML = `<div class="ok">
          <div class="scoreBoard">
            <h3>WINNER</h3>
            <br />
            <h2>Time: ${minutes.innerHTML}:${seconds.innerHTML}</h2>
            <h2>Score: ${score}</h2>
            <h2>HighScore: ${Number(flaskMsg)}</h2>
          </div>
          <a class="home2" href="http://localhost:5000/home"></a>
          <div class="btn" onclick="reset()">RESTART</div>
        </div>
      </div>`;
              };
              request.send();
            }
            sendInfo();
          }, 1000);
        }
      }
    }
  } catch {
    console.log("ERROR");
  }
};
