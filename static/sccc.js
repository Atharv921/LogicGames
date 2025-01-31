// // JavaScript program to check if a given
// // instance of 8 puzzle is solvable or not
 
// // A utility function to count inversions
// // in given array 'arr[]'
// // function getInvCount(arr)
// // {
// //     let inv_count = 0 ;
// //     for(let i=0;i<2;i++){
// //         for(let j=i+1;j<3;j++){
         
// //             // Value 0 is used for empty space
// //             if (arr[j][i] > 0 && arr[j][i] > arr[i][j])
// //                 inv_count += 1;
// //         }
// //      }
// //     return inv_count;
// // }
// // // This function returns true
// // // if given 8 puzzle is solvable.
// // function isSolvable(puzzle)
// // {
// //     // Count inversions in given 8 puzzle
// //     let invCount = getInvCount(puzzle);
// //     // return true if inversion count is even.
// //     return (invCount % 2 == 0);
// // }
 
// // // Driver code
 
// // // Value 0 is used for empty space
// // puzzle = [
// //     [1, 3, 5],
// //     [8, 2, 7],
// //     [6, 4, 0],
// // ];
// // if(isSolvable(puzzle))
// //     document.write("Solvable");
// // else
// //     document.write("Not Solvable");


// let problemArray = [
//     [1, 3, 5],
//     [8, 2, 7],
//     [6, 4, 0],
// ];


// let randomSet = () => Math.floor(Math.random() * 8) + 1;
    
// let itPresent = function(value,a,b,tmarray){
//     var iter=0;
//     for (var i = 0; i < 3; i++) {
//         for (var j = 0; j < 3; j++) {
//             if(a!=i || b!=j){
//                 if(value == tmarray[i][j]) {
//                     iter+=1;
//                 }
//             }

//         }
//     }
//     if(iter == 0){
//         return 1;
//     }
//     else{   return 0;   }
// }
    
// let problemCreator = function(){

//     var t;
//     var t1;
//     var tempararyArray = [];
//     for (var i=0;i<3;i++){
//         t = Object.assign({}, problemArray[i]);
//         t1 = Object.values(t);
//         tempararyArray.push(t1);
//     }
    
//     for (var i = 0; i < 3; i++) {
//         for (var j = 0; j < 3; j++) {
//             if(tempararyArray[i][j]!=0){
//             tempararyArray[i][j] = randomSet();
//             }
//         }
//         }
//     for (var i = 0; i < 3; i++) {
//         for (var j = 0; j < 3; j++) {
//             var n = 0;
//             var t = 1;
//             while(n<9) {   
//                 if(itPresent(tempararyArray[i][j],i,j,tempararyArray)){
//                     n+=1;
//                 }else{
//                     tempararyArray[i][j] = t;
//                     t+=1; 
//                 }
//             }
//         }
//     }
//     return [...tempararyArray];
// }
//     console.log("before>>>>>>>>");
//     console.log(problemArray);
//     let temperary = [...problemCreator()];
//     console.log("problemCreator>>>>>>>>>>");
//     console.log(temperary);
//     console.log("created>>>>>>>>>>>>>");
//     console.log(problemCreator());


//     let inverseCounter = function(){
//       while(1){
//         let arr1 = [];
//         let arr2 = problemCreator();
//         var t,t1;
//         for (var i=0;i<3;i++){
//             t = Object.assign({}, arr2[i]);
//             t1 = Object.values(t);
//             arr1.push(t1);
//         }
//         let arr = [];
//         for(var i=0;i<3;i++) arr.push(...arr1[i]);
//         console.log(arr);
//         let count = 0;
//         for(var n = 0; n<8;n++){
//             for (var m = n+1; m<8; m++){
//                 if(arr[n]>arr[m]){
//                     count+=1;
//                 }
//             }
//         }
//         if(!(count%2==0)){
//             console.log(count);
//             console.log("not solvable");
//             // tempararyArray = problemCreator();
//         }
//         else{
//             console.log(count);
//             return [...arr1];
//         }
//         }
//     }
//     problemArray = inverseCounter();
//     console.log("Final Created Array:>>>>>>>>");
//     console.log(problemArray);

//function towerOfHanoi(n, from_rod,  aux_rod,  to_rod)
//{
//    if(n==0) return;
//    towerOfHanoi(n-1,from_rod,to_rod,aux_rod);
//    console.log(`move ${n}th disk from ${from_rod} to ${to_rod}`)
//    towerOfHanoi(n-1,aux_rod,from_rod,to_rod);
//}
// var N = 3;
// towerOfHanoi(N, 'A', 'B', 'C');

let target = 0;
let sec = 00;
let min = 00;
let id_variable = 0;
let seconds = document.getElementById("sec");
let minutes = document.getElementById("min");
var Interval;
let htmlStart = `<div class="disk1 d1" onclick="eventHandler(1)"></div>`;
for (var i = 1;i < 3;i++){
  htmlStart = htmlStart+`<div class="disk${i+1} d${i+1}" onclick="eventHandler(${i+1})"></div>`
}
// let htmlStart = `<div class="disk1 d1" onclick="eventHandler(1)"></div>
//                     <div class="disk2 d2" onclick="eventHandler(2)"></div>
//                     <div class="disk3 d3" onclick="eventHandler(3)"></div>`;

// RESETTING ALL FOR BEGINNING'S BEFORE START POSITION ///////////////////////


document.querySelector(".view").innerHTML = `<div class="ok">
          <div class="scoreBoard">
            <h3>Rules</h3>
            <br/>
            <h2></h2>
            <h2></h2>
            <h2></h2>
          </div>
          <div class="btn" onclick="reset()">RESTART</div>
        </div>
      </div>`;


let reset = function () {
  min = 00;
  sec = 00;
  document.querySelector(".time").classList.add("hidden");
  document.querySelector(".t1").innerHTML = "";
  document.querySelector(".t2").innerHTML = "";
  document.querySelector(".t3").innerHTML = "";
  document.querySelector(".view").classList.remove("modal");
  document.querySelector(".view").innerHTML = "";
  document.querySelector(".st").textContent = "Start";
  // document.querySelector(".st").classList.toggle("hidden");
};

// SETTING AFTER STARITNG SITUATION FOR GAME //////////////////////////////////////////

let resetter = function () {
  min = 00;
  sec = 00;
  minutes.innerHTML = "0"+min;

  document.querySelector(".t1").innerHTML = htmlStart;
  document.querySelector(".t2").innerHTML = "";
  document.querySelector(".t3").innerHTML = "";
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
  if(min >= 1){
    minutes.innerHTML = "0" + min;
  }
  if (min > 9) {
    minutes.innerHTML = min;
  }
};

//// FOR STARTING TIMER AND START BUTTON EVENT TO CHANGE IT TO RETRY //////////////////////////////

let start = function () {
  clearInterval(Interval);
  Interval = setInterval(startTime, 999);
  resetter();
  document.querySelector(".st").textContent = "Retry";
  document.querySelector(".st").classList.add("retry");
  document.querySelector(".time").classList.remove("hidden");
};

//// FOR HIDING BORDER AND UNHIDING BORDER DISKS ////////////////////////////////////////////////

let eventHandler = (i) => {
  for (var j = 1; j <= 9; j++) {
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

let HTML_handler = (i) => {
  console.log("Entered");
  var t;

//// ERROR IS COMPULSORY FOR EXECUTION ///////////////////////////////////////////////

  try {
    try {
      if (target == 2 || target == 5 || target == 8)
        document.querySelector(`.disk${target - 1}`).classList.remove("df");
      else if (target == 3 || target == 6 || target == 9){
        try{
          document.querySelector(`.disk${target - 2}`).classList.remove("df");
        }
        catch{
          document.querySelector(`.disk${target - 1}`).classList.remove("df");
        }
      }
      else if (target == 1 || target == 4 || target == 7)
        document.querySelector(`.disk${target - 10}`).classList.remove("df");

      //else if(target == 3 || target==6 || target==9) document.querySelector(`.disk${target+1}`).classList.remove("df");
      document.querySelector(`.disk${target}`).classList.remove("dec");
    } catch (err) {
      console.log("ERROR" + `${err}`);

      //CHECKING TARGET///////////////////////////////////////////////////////////////

      if (
        String(document.querySelector(`.disk${target}`).classList) ==
        `disk${target} d${target} dec`
      ) {
        document.querySelector(`.disk${target}`).classList.remove("dec");
        let tg = target;
        if (target == 1 || target == 2 || target == 3) {
          i == 2 ? (target += 3) : i == 3 ? (target += 6) : (t = 0);
        }else if (target == 4 || target == 5 || target == 6) {
          i == 1 ? (target -= 3) : i == 3 ? (target += 3) : (t = 0);
        }else if (target == 7 || target == 8 || target == 9) {
          i == 1 ? (target -= 6) : i == 2 ? (target -= 3) : (t = 0);
        }

        //INSERTING HTML BY CHECKING CONDITIONS OF GAME  ////////////////////////////////////////////////

        if (target == 2 || target == 5 || target == 8) {
          if (
            !String(document.querySelector(`.t${i}`).innerHTML).includes(
              `<div class="disk${target - 1} d${
                target - 1
              }" onclick="eventHandler(${target - 1})"></div>`
            )
          ) {
            document
              .querySelector(`.t${i}`)
              .insertAdjacentHTML(
                "afterbegin",
                `<div class="disk${target} d${target}" onclick="eventHandler(${target})"></div>`
              );
            document.querySelector(`.d${tg}`).remove();
          }
        } 
        else if (target == 1 || target == 4 || target == 7) {
          document
            .querySelector(`.t${i}`)
            .insertAdjacentHTML(
              "afterbegin",
              `<div class="disk${target} d${target}" onclick="eventHandler(${target})"></div>`
            );
          document.querySelector(`.d${tg}`).remove();
        } 
        else if (target == 3 || target == 6 || target == 9) {
          if (
            !(String(document.querySelector(`.t${i}`).innerHTML).
            includes(`<div class="disk${target - 1} d${target - 1}" onclick="eventHandler(${target - 1})"></div>`) 
              ||
              String(document.querySelector(`.t${i}`).innerHTML).
            includes(`<div class="disk${target - 2} d${target - 2}" onclick="eventHandler(${target - 2})"></div>`)
            )
          ) {
            document
              .querySelector(`.t${i}`)
              .insertAdjacentHTML(
                "afterbegin",
                `<div class="disk${target} d${target}" onclick="eventHandler(${target})"></div>`
              );
            document.querySelector(`.d${tg}`).remove();
          }
        }
        //document.querySelector(`.t${i}`).insertAdjacentHTML('afterbegin', `<div class="disk${target} d${target}" onclick="eventHandler(${target})"></div>` );
        
        //CHECKING WINNER ////////////////////////////////////////////////////////////////////////////////////
        
        console.log("clicked");
        target = 0;
        if (
          String(document.querySelector(`.t3`).innerHTML).includes(
            `<div class="disk7 d7" onclick="eventHandler(7)"></div>`
          ) &&
          String(document.querySelector(`.t3`).innerHTML).includes(
            `<div class="disk8 d8" onclick="eventHandler(8)"></div>`
          ) &&
          String(document.querySelector(`.t3`).innerHTML).includes(
            `<div class="disk9 d9" onclick="eventHandler(9)"></div>`
          )
        ) {
            clearInterval(Interval);
            setTimeout(function () { 
                document.querySelector(".view").classList.add("modal");
              let score = 0;
              
                if(sec<=15){
                  score = 100;
                }
                else if (sec>15){
                  score = Number(100 - (min * 30 + (sec-15)) / 2);
                }
                if(score<=10){
                  score = 10;
              }
              id_variable = id_variable + 1;
              function sendInfo() {
                var info = {
                  'highScore': score,
                  'id': id_variable,
                }
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
                }
                request.send()
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
