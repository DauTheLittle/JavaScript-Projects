 //############################### 1.Square ###############################
 let buttonSquareClick = document.querySelector(".squareBtn");

 let squarenumber = 1;
 const addNextShape = function () {
     const span = document.createElement("span");
     span.textContent = squarenumber;
     if (squarenumber % 5 == 0) {
         span.classList.add("circle");
     }
     if (squarenumber % 10 == 0) {
         span.classList.add("circle1");
     }
     document.getElementById("square").appendChild(span);
     squarenumber++;
 }
 buttonSquareClick.addEventListener("click", addNextShape);

 //############################### 2.Ascending Numbers ###############################

 const buttonAscNumClick = document.querySelector(".ascNumBtn");

 let number = 1;
 const list = document.querySelector("ul");

 buttonAscNumClick.addEventListener("click", function () {
     const li = document.createElement("li");
     li.textContent = number;
     list.appendChild(li);
     if (number % 3 == 0) {
         li.classList.add("big");
     };

     number += 2;
 });
 //############################### 3.Game rock, paper, scissors ###############################
 const gameSummary = {
     numberOfGames: 0,
     wins: 0,
     losses: 0,
     draws: 0
 }

 const score = {
     playersChoice: "",
     computersChoice: "",
     winner: "",
 }
 const rock = document.querySelector(".rock");
 const paper = document.querySelector(".paper");
 const scissors = document.querySelector(".scissors");
 let gameShapes = ["rock", "paper", "scissors"];

 const shapes = [...document.querySelectorAll(".select img")];

 // USER SELECTION----------------------------------------------------------------------------------
 function shapeSelection(e) {
     score.playersChoice = this.dataset.option;
     shapes.forEach(shape => shape.style.boxShadow = "");
     e.target.style.boxShadow = "0 0 0 4px coral";
 };
 shapes.forEach(shape => shape.addEventListener("click", shapeSelection));

 // COMPUTERS SELECTION-----------------------------------------------------------------------------
 function computer() {
     let randomShape = Math.floor(Math.random() * gameShapes.length);
     score.computersChoice = gameShapes[randomShape];
 }

 // CHECKING RESULTS--------------------------------------------------------------------------------
 function checkResult(player, computer) {
     if (player === computer) {
         return "draw";
     } else if ((player === "rock" && computer === "scissors") || (player === "paper" && computer === "rock") || (player === "scissors" && computer === "paper")) {
         return "win";
     } else {
         return "loss";
     };
 }
 // PUBLISHING RESULTS-------------------------------------------------------------------------------

 function publishResult(player, computer, result) {
     document.querySelector('[data-summary="players-choice"]').textContent = player;
     document.querySelector('[data-summary="computers-choice"]').textContent = computer;


     if (result === "win") {
         document.querySelector("p.wins span").textContent = ++gameSummary.wins;
         document.querySelector('[data-summary="who-wins"]').textContent = "You won";
         console.log("win");
     } else if (result === "loss") {
         document.querySelector("p.losses span").textContent = ++gameSummary.losses;
         document.querySelector('[data-summary="who-wins"]').textContent = "You lost";
         console.log("loss");
     } else {
         document.querySelector("p.draws span").textContent = ++gameSummary.draws;
         document.querySelector('[data-summary="who-wins"]').textContent = "Draw";
         console.log("draw");
     }
     document.querySelector("p.numberOfGames span").textContent = ++gameSummary.numberOfGames;
 }
 // End of the game---------------------------------------------------------------------------
 function endGame() {
     document.querySelector(`[data-option="${score.playersChoice}"]`).style.boxShadow = "";
     score.playersChoice = "";
 }
 // Start of the game-------------------------------------------------------------------------
 function startGame() {
     if (!score.playersChoice) {
         return alert("Choose option");
     }
     computer();
     const gameResult = checkResult(score.playersChoice, score.computersChoice);
     publishResult(score.playersChoice, score.computersChoice, gameResult);
     endGame();
 }

 document.querySelector(".playButton").addEventListener("click", startGame);

 //############################### 4.Cursor background-color change ###############################
 const bcColorCursor = document.querySelector(".bcColorCursor");
 let bcColorCursorXY = document.querySelector(".bcColorCursorXY");

 bcColorCursor.addEventListener("mousemove", function (event) {
     const x = event.clientX;
     const y = event.clientY;
     bcColorCursorXY.textContent = x + ", " + y;
     bcColorCursor.style.backgroundColor = `rgb(${x/8}, ${y/5}, ${x/7})`;
 });

 //############################### 15.Machine writting effect ###############################
 const spnText = document.querySelector('.textMW');
 const spnCursor = document.querySelector('.cursor');
 const txt = ['Twinkle, twinkle, little star. How I wonder what you are. Up above the world so high. Like a diamond in the sky. Twinkle, twinkle little star. How I wonder what you are.',

     'Lulla-lulla-lullaby, Hush, little baby don\'t you. Hush, little baby don\'t say a word. Papa\'s gonna buy you a mocking bird. And if that mocking bird don\'t sing. Papa\'s gonna buy you a diamond ring. And if that diamond ring is brass. Papa\'s gonna buy you a looking glass.',

     'Somewhere over the rainbow. Way up high. And the dreams that you dream of. Once in a lullaby. Somewhere over the rainbow. Bluebirds fly. And the dreams that you dream of. Dreams really do come true.'
 ];

 let activeLetter = 0;
 let activeText = 0;

 const addLetter = () => {
     spnText.textContent += txt[activeText][activeLetter];
     activeLetter++;
     if (activeLetter === txt[activeText].length) {
         activeText++;
         if (activeText === txt.length) {
             return;
         }

         return setTimeout(() => {
             activeLetter = 0;
             spnText.textContent = "";
             addLetter();
         }, 1000);
     }
     setTimeout(addLetter, 100);
 }

 addLetter();

 const cursorAnimation = () => {
     spnCursor.classList.toggle('active');
 }
 setInterval(cursorAnimation, 400);

 //############################### 6.Growing words ###############################
 let letterSizeGW = 16;

 let btnGrowingWords = document.querySelector(".btnGrowingWords");
 let listGW = document.querySelectorAll(".listGW");

 btnGrowingWords.addEventListener("click", () => {
     listGW.forEach((item) => {
         item.style.display = "block";
         item.style.fontSize = letterSizeGW + "px";
     });
     letterSizeGW++;
 });

 //############################### 7.Growing numbers ###############################
 let sizeGN = 10;
 let orderElement = 1;
 let divGN = document.querySelector(".divGN");
 const init = () => {
     // ############# Normal button ################
     const btnGN = document.querySelector(".btnGN");
     btnGN.textContent = "Add 10 treats";
     btnGN.addEventListener("click", createLiElements);

     // ############# UL list ###############
     let listGN = document.createElement("ul");
     divGN.appendChild(listGN);
 };

 const createLiElements = ("click", () => {

     for (i = 0; i < 10; i++) {
         let li = document.createElement("li");
         divGN.appendChild(li);
         li.textContent = "Candy " + orderElement++;
         li.style.fontSize = sizeGN++ + "px";
     }
 });

 init();

 //############################### 8.Click background-color change ###############################
 let bcColorClick = document.querySelector(".bcColorClick");
 let bcColorClickXY = document.querySelector(".bcColorClickXY")
 bcColorClick.addEventListener("click", function (event) {
     const x = event.clientX;
     const y = event.clientY;
     if (x % 2 == 0 && y % 2 == 0) {
         bcColorClick.style.backgroundColor = "rgb(177, 83, 130)";
     } else if (x % 2 !== 0 && y % 2 !== 0) {
         bcColorClick.style.backgroundColor = "rgb(241, 166, 94)";
     } else {
         bcColorClick.style.backgroundColor = "gold";
     }
     bcColorClickXY.textContent = x + ", " + y;
 });

 //############################### 9.Moving square after click ###############################
 const movingSquareClick = document.querySelector(".movingSquareClick");

 let x;
 let y;
 movingSquareClick.style.left = `${x}px`;
 movingSquareClick.style.top = `${y}px`;
 let drawActive = false;
 let innerDivX;
 let innerDivY;

 movingSquareClick.addEventListener("mousedown", function (event) {
     drawActive = true;
     movingSquareClick.style.backgroundColor = "black";
     innerDivX = event.offsetX;
     innerDivY = event.offsetY;
 });

 movingSquareClick.addEventListener("mousemove", function (event) {
     if (drawActive) {
         x = event.clientX - innerDivX;
         y = event.clientY - innerDivY;
         movingSquareClick.style.left = `${x}px`;
         movingSquareClick.style.top = `${y}px`;
     };
 });

 movingSquareClick.addEventListener("mouseup", function () {
     drawActive = false;
     movingSquareClick.style.backgroundColor = "black";
 });

 //############################### 10.Change of background by keys ###############################
 let red = 100;
 let green = 100;
 let blue = 100;
 let bcColorKeys = document.querySelector(".bcColorKeys");

 bcColorKeys.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

 const changeColor = (e) => {
     console.log(e.keyCode, e.which);
     //87 - w (white)
     //83 - s (black)
     if (e.keyCode == 87) {
         if (red <= 255) {
             red += 10;
             green += 10;
             blue += 10;
             bcColorKeys.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
         }

     } else if (e.keyCode == 83) {
         if (red >= 0) {
             red -= 10;
             green -= 10;
             blue -= 10;
             bcColorKeys.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
         }
     }
 };

 window.addEventListener("keydown", changeColor);

 //############################### 11. Slider ###############################
 const slideList = [{
         img: "images/img1.jpg",
         text: 'ARCHITECTURE'
     },
     {
         img: "images/img2.jpg",
         text: 'ANIMALS'
     },
     {
         img: "images/img3.jpg",
         text: 'NATURE'
     }
 ];

 const image = document.querySelector('.sliderImg');
 const h1 = document.querySelector('.sliderh1');
 const dots = [...document.querySelectorAll('.dots span')]

 const time = 3000;
 let active = 0;


 const changeDot = () => {
     const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
     dots[activeDot].classList.remove('active');
     dots[active].classList.add('active');
 }

 const changeSlide = () => {
     active++;
     if (active === slideList.length) {
         active = 0;
     }
     image.src = slideList[active].img;
     h1.textContent = slideList[active].text;
     changeDot()
 }
 let indexInterval = setInterval(changeSlide, time)

 // Keys------------------------
 const keyChangeSlide = (e) => {
     console.log(e.keyCode);
     if (e.keyCode == 37 || e.keyCode == 39) {
         clearInterval(indexInterval)
         e.keyCode == 37 ? active-- : active++;
         if (active === slideList.length) {
             active = 0;
         } else if (active < 0) {
             active = slideList.length - 1;
         }
         image.src = slideList[active].img;
         h1.textContent = slideList[active].text;
         changeDot();
         indexInterval = setInterval(changeSlide, time)
     }
 }

 window.addEventListener('keydown', keyChangeSlide);

 //############################### 12.Random sentence ###############################
 const btnRS = document.querySelector(".btnRS");
 const underlineRS = document.querySelector(".underlineRS");

 const names = ["Dog", "Husband", "Wife", "Lucky day, No one"];

 const prefixs = ["Wiping the floor", "Cleaning dishes", "Killing spider", "Cleaning bathroom", "Making dinner", "Grocery shopping", "Painting living room", "Reparing doors", "Cleaning windows"];

 const nameGenerator = () => {
     const indexName = Math.floor(Math.random() * names.length);
     const indexPrefix = Math.floor(Math.random() * prefixs.length);
     underlineRS.textContent = `${prefixs[indexPrefix]}  - ${names[indexName]}`;
 }

 btnRS.addEventListener('click', nameGenerator);

 //############################### 13.Random jokes generator ############################### 
 let options = ["What do you call a hippie\'s wife? A Mississippi!", "Where did the computer go dancing? The disc-o!", "What do bees do if they need a ride? Wait at the buzz stop!", "What do you call a monkey that loves Doritos? A chipmunk!", "Why did the can crusher quit his job? Because it was soda pressing!", "What do you tell actors to break a leg? Because every play has a cast!"];

 document.querySelector(".add").addEventListener("click", function (e) {
     e.preventDefault();
     const input = document.querySelector("input");
     options.push(input.value);
     alert(`Dodano element "${input.value}"`);
     input.value = "";
 });

 document.querySelector(".showOptions").addEventListener("click", function () {
     alert(options.join(", "));
 });

 document.querySelector(".clean").addEventListener("click", function (e) {
     e.preventDefault();
     options.length = 0;
     document.querySelector("h1").textContent = ""; //.....
 });

 document.querySelector(".showAdvice").addEventListener("click", function () {
     let advice = Math.floor(Math.random() * options.length);
     document.querySelector(".jokeContainer").textContent = options[advice];
     console.log(advice);
 });

 //############################### 14. Time counter ###############################
 let timeCounter = document.querySelector(".timeCounter");
 let timeNumber = document.querySelector(".timeNumber");
 let minuts = 0;
 let seconds = 0;

 let timer = function () {
     if (seconds == 59) {
         minuts++;
     } else if (seconds >= 59) {
         seconds = 0;
     }
     timeNumber.textContent = `${minuts}   minuts ${seconds++} seconds`;
 }

 let everySecond = function () {
     setInterval(timer, 1000)
 };
 window.addEventListener("load", everySecond);

 //############################### 15.Scroll circle ###############################
 const shape = document.querySelector(".scrollCircle");

 let circleSizeChange = true;
 let circleSize = 30;
 shape.style.width = circleSize + "px";
 shape.style.height = circleSize + "px";
 window.addEventListener("scroll", function () {
     if (circleSizeChange) {
         circleSize += 10;
         shape.style.backgroundColor = "#" + "d9a626";
         shape.style.width = circleSize + "px";
         shape.style.height = circleSize + "px";
     } else {
         circleSize -= 10;
         shape.style.backgroundColor = "#" + "f1a65e";
         shape.style.width = circleSize + "px";
         shape.style.height = circleSize + "px";
     }

     if (circleSize >= window.innerHeight / 2) {
         circleSizeChange = !circleSizeChange;
     } else if (circleSize <= 20) {
         circleSizeChange = true;
     }
 });

 //############################### 16.Rectangle scroll ###############################
 let bar = document.querySelector(".rectangleAppear");

 let size = 100;
 let sizeChange = true;

 bar.style.backgroundColor = "rgb(177, 83, 130)";
 bar.style.height = size + "px";

 window.addEventListener("scroll", function () {
     if (sizeChange) {
         size += 10;
         bar.style.backgroundColor = "#" + "d9a626";
     } else {
         size -= 10;
         bar.style.backgroundColor = "rgb(241, 166, 94)";
     }
     bar.style.height = size + "px";

     if (size >= window.innerHeight / 2) {
         sizeChange = !sizeChange;
     } else if (size <= 0) {
         sizeChange = !sizeChange;
     }
 });