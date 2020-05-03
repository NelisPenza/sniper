'use strict';

(function main() {
  const mouseClickCoordinatesElement = document.getElementById('mouseClickCoordinates');
  const countElement = document.getElementById('count');
  const canvasElement = document.getElementById('canvas');
  const context = canvasElement.getContext('2d');
  const stepTarget = 5;
  const gameTime = 5;
  const start = 0;
  const mouseClickLog = [];
  let finalScore = 0;
  const timeoutTarget = 1000;


  function processTarget() {
    function randomInteger(min, max) {
      const rand = min + Math.random() * (max + 1 - min);
      return Math.floor(rand);
    }
    const originX = randomInteger(window.innerWidth / 4, window.innerWidth / 4 * 3);
    const originY = randomInteger(window.innerHeight / 4, window.innerHeight / 4 * 3);
    console.log(originX, originY);

    function drowTarget(originX, originY) {
      canvasElement.width = window.innerWidth;
      canvasElement.height = window.innerHeight;
      context.beginPath();
      for (let i = 10; i >= 0; i--) {
        const radius = i * stepTarget;
        context.arc(originX, originY, radius, 0, 2 * Math.PI);
      }
      context.stroke();
      context.closePath();
    }
    drowTarget(originX, originY);

    const bcs2ucs = (mouseX, mouseY) => window.mapCoordinates(mouseX, mouseY, originX, originY);

    document.addEventListener('click', (event) => {
      const [x, y] = bcs2ucs(event.clientX, event.clientY);
      const pointGame = window.quadrants(x, y, stepTarget);
      console.log(pointGame);
      finalScore += pointGame;
      countElement.innerText = ` Ваш выстрел: ${pointGame} `;
      mouseClickCoordinatesElement.innerText = `Счет игры: ${finalScore}`;
    });
  }

  function countGameTime(start, gameTime) {
    let current = start;
    const timerGame = setInterval(function () {
      processTarget();
      if (current === gameTime - 1) {
        clearInterval(timerGame);
      }
      current++;
    }, timeoutTarget);
  }
  countGameTime(start, gameTime);




  // // drowTarget(originX, originY);
  //
  // let timerId = setTimeout(function () {
  //   timerId = setTimeout(processTarget, 1000);
  // }, 1000);

  // let countGameTime = 0;
  // setInterval(function (originX, originY) {
  //
  //   if (countGameTime < gameTime) {
  //     setTimeout(drowTarget, 1000);
  //   }
  //   countGameTime++;
  // }, 1000);

  // document.addEventListener('mousemove', (event) => {
  //   const mouseX = event.clientX;
  //   const mouseY = event.clientY;
  //   mouseCoordinatesElement.innerText = `(${mouseX}, ${mouseY})`;
  // });
//
//   function process() {
//     function randomInteger(min, max) {
//       const rand = min + Math.random() * (max + 1 - min);
//       return Math.floor(rand);
//     }
//     const originX = randomInteger(window.innerWidth / 4, window.innerWidth / 4 * 3);
//     const originY = randomInteger(window.innerHeight / 4, window.innerHeight / 4 * 3);
//
//     const drowTarget = (originX, originY) => {
//       canvasElement.width = window.innerWidth;
//       canvasElement.height = window.innerHeight;
//       context.beginPath();
//       for (let i = 10; i <= 100; i + 10) {
//         context.arc(originX, originY, i, 0, 2 * Math.PI);
//       }
//       context.fillStyle = 'red';
//       context.stroke();
//       context.closePath();
//     };
//
//     drowTarget(originX, originY);
//
//   }
// process();

  // const bcs2ucs = (mouseX, mouseY) => {
  //
  //   return window.mapCoordinates(mouseX, mouseY, originX, originY);
  // };



  // document.addEventListener('click', (event) => {
  //   const [x,y] = mouseX
  //
  // })


  // const
  //
  // window.setTimer(process, 1000);
  // radian = Math.sqrt(x*x + y*y);
  // // eslint-disable-next-line no-console
  // console.log(window.mapCoordinates(600, 400, 640, 480));
  //
  // // eslint-disable-next-line no-console
  // console.log(window.quadrants(100, 100));
}());
