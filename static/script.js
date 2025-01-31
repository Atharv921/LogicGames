//declarations

let gameStructure = document.querySelector(".struct");
let retry = document.querySelector(".retry");
let re = document.querySelector(".re");
let next = document.querySelector(".next");
let ne = document.querySelector(".ne");
let st = document.querySelector(".st");
let timer = document.getElementById("h2");
let startStatus = "on";
let id_variable = 0;
next.classList.add("hidden");
re.classList.remove("retry");
ne.classList.remove("next");
var problemArray = [
  [1, 3, 5],
  [7, 2, 8],
  [6, 4, 0],
];

var winnerArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 0],
];

//reusable functions

let getKeyByValue = (object, value) =>
  Object.keys(object).find((key) => object[key] === value);

let index = (item) => {
  for (let i = 0; i < 3; i++) {
    var arr = Object.values(problemArray[i]);
    if (arr.includes(item)) { 
      var ans = [i, Number(getKeyByValue(problemArray[i], item))];
      return ans;
    }
  }
};

let randomSet = () => Math.floor(Math.random() * 8) + 1;

let itPresent = function (value, a, b, tmarray) {
  var iter = 0;
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (a != i || b != j) {
        if (value == tmarray[i][j]) {
          iter += 1;
        }
      }
    }
  }
  if (iter == 0) {
    return 1;
  } else {
    return 0;
  }
};

let problemCreator = function () {
  var t;
  var t1;
  var tempararyArray = [];
  for (var i = 0; i < 3; i++) {
    t = Object.assign({}, problemArray[i]);
    t1 = Object.values(t);
    tempararyArray.push(t1);
  }

  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (tempararyArray[i][j] != 0) {
        tempararyArray[i][j] = randomSet();
      }
    }
  }
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      var n = 0;
      var t = 1;
      while (n < 9) {
        if (itPresent(tempararyArray[i][j], i, j, tempararyArray)) {
          n += 1;
        } else {
          tempararyArray[i][j] = t;
          t += 1;
        }
      }
    }
  }
  return [...tempararyArray];
};
console.log("before>>>>>>>>");
console.log(problemArray);
let temperary = [...problemCreator()];
console.log("problemCreator>>>>>>>>>>");
console.log(temperary);
console.log("created>>>>>>>>>>>>>");
console.log(problemCreator());

let inverseCounter = function () {
  while (1) {
    let arr1 = [];
    let arr2 = problemCreator();
    var t, t1;
    for (var i = 0; i < 3; i++) {
      t = Object.assign({}, arr2[i]);
      t1 = Object.values(t);
      arr1.push(t1);
    }
    let arr = [];
    for (var i = 0; i < 3; i++) arr.push(...arr1[i]);
    console.log(arr);
    let count = 0;
    for (var n = 0; n < 8; n++) {
      for (var m = n + 1; m < 8; m++) {
        if (arr[n] > arr[m]) {
          count += 1;
        }
      }
    }
    if (!(count % 2 == 0)) {
      console.log(count);
      console.log("not solvable");
      // tempararyArray = problemCreator();
    } else {
      console.log(count);
      return [...arr1];
    }
  }
};
var temp = [];
let setProblemArray = function () {
  problemArray = inverseCounter();
  console.log("Final Created Array:>>>>>>>>");
  console.log(problemArray);

  var t, t1;
  temp = [];
  for (var i = 0; i < 3; i++) {
    t = Object.assign({}, problemArray[i]);
    t1 = Object.values(t);
    temp.push(t1);
  }
};

let updateArray = function (arr) {
  var k = 1;
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      let con = arr[i][j] + "";
      var kElement = document.getElementById(`${k}`);
      kElement.textContent = con;
      kElement.style.cursor = "pointer";
      kElement.classList.remove("hidden");
      if (con == "0") {
        kElement.classList.add("hidden");
      }
      k = k + 1;
    }
  }
};

//create structure of game and add all numbers
var str = "";
for (var n = 1; n <= 9; n++) {
  str = str + `<div class="numbers" id="${n}"></div>`;
}
gameStructure.innerHTML = str;
updateArray(winnerArray);

let output = "stop";
//timer
let sec = 00;
let min = 00;
let seconds = document.getElementById("sec");
let minutes = document.getElementById("min");
let start = document.getElementById("start");
var Interval;

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
  if (min > 9) {
    minutes.innerHTML = min;
  }
};

  startEvent = function() {
    if(startStatus=="on"){
      setProblemArray();
      clearInterval(Interval);
      Interval = setInterval(startTime, 999);
      output = "start";
      st.classList.add("hidden");
      
      //initial
      updateArray(problemArray);
      startStatus = "off";
      
    }
    st.removeAttribute("id", "start");
    re.classList.add("retry");
  };
  
//Start

gameStructure.addEventListener("click", function (event) {
  event.preventDefault();
  var e = Number(event.target.textContent);
  if (e >= 1) console.log(index(e));
  var a = index(e)[0];
  var b = index(e)[1];
  if (output == "start") {
    if (a - 1 >= 0) {
      if (problemArray[a - 1][b] == 0) {
        problemArray[a - 1][b] = problemArray[a][b];
        problemArray[a][b] = 0;
        updateArray(problemArray);
      }
    }
    if (a + 1 <= 2) {
      if (problemArray[a + 1][b] == 0) {
        problemArray[a + 1][b] = problemArray[a][b];
        problemArray[a][b] = 0;
        updateArray(problemArray);
      }
    }
    if (b - 1 >= 0) {
      if (problemArray[a][b - 1] == 0) {
        problemArray[a][b - 1] = problemArray[a][b];
        problemArray[a][b] = 0;
        updateArray(problemArray);
      }
    }
    if (b + 1 <= 2) {
      if (problemArray[a][b + 1] == 0) {
        problemArray[a][b + 1] = problemArray[a][b];
        problemArray[a][b] = 0;
        updateArray(problemArray);
      }
    }
  }

  var iter = 0;

  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      console.log();
      if (winnerArray[i][j] == problemArray[i][j]) {
        iter += 1;
      }
    }
  }
  if (iter == 9) {
    clearInterval(Interval);
    setTimeout(function () {
      //let score = Number(100 - (min * 30 + sec) / 2);
      let score = 0;
      if(sec<=20){
        score = 100;
      }
      else if (sec>20){
        score = Number(100 - (min * 30 + (sec-20)) / 2);
      }
      if(score<=10){
        score = 10;
      }

      id_variable = id_variable + 1;
      function sendInfo() {
        var info = {
          highScore: score,
          id: id_variable,
        };
        let request = new XMLHttpRequest();
        request.open("POST", `/static/arrange/${JSON.stringify(info)}`);
        request.onload = () => {
          let flaskMsg = request.responseText;
          timer.classList.add("hidden");
          re.classList.remove("retry");
          next.classList.remove("hidden");
          ne.classList.add("next");
          gameStructure.innerHTML = `<div class="fix"><h1>WINNER</h1><br><h3>Time: <p>${minutes.innerHTML}:${seconds.innerHTML}</p></h3><br><h3>Score: ${score}</h3><br><h3>HighScore: ${Number(flaskMsg)}</h3></div>`;
        };
        request.send();
      }
      sendInfo();
      
    }, 500);
  }
});

re.addEventListener("click", (event) => {
  event.preventDefault();
  var t, t1;
  problemArray = [];
  for (var i = 0; i < 3; i++) {
    t = Object.assign({}, temp[i]);
    t1 = Object.values(t);
    problemArray.push(t1);
  }
  min = "00";
  sec = "00";
  minutes.innerHTML = min;
  seconds.innerHTML = sec;
  clearInterval(Interval);
  Interval = setInterval(startTime, 999);
  var str = "";
  for (var n = 1; n <= 9; n++) {
    str = str + `<div class="numbers" id="${n}"></div>`;
  }
  gameStructure.innerHTML = str;
  updateArray(temp);
});



ne.addEventListener("click", (event) => {
  event.preventDefault();
  timer.classList.remove("hidden");
  st.setAttribute("id", "start");
  output = "stop";
  min = "00";
  sec = "00";
  minutes.innerHTML = min;
  seconds.innerHTML = sec;
  var str = "";
  for (var n = 1; n <= 9; n++) {
    str = str + `<div class="numbers" id="${n}"></div>`;
  }
  gameStructure.innerHTML = str;
  updateArray(winnerArray);
  timer.classList.remove("hidden");
  ne.classList.remove("next");
  next.classList.add("hidden");
  st.classList.remove("hidden");
  startStatus = "on";
});
