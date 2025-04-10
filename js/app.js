import {
  playAudio,
  isMatch,
  checkGameOver,
  startGame,
  restartGame,
} from "./utils.js";

let data = []; // 用于存储从外部加载的数据

async function loadData() {
  try {
    const response = await fetch("./data.json"); // 加载外部 JSON 文件
    if (!response.ok) throw new Error("Failed to load data");
    data = await response.json();
    data.forEach((pair) => {
      pair[1] = decodeHtmlEntities(pair[1]); // 解码 HTML 实体
    });
  } catch (error) {
    console.error("Error loading data:", error);
  }
}

function decodeHtmlEntities(str) {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = str;
  return textarea.value;
}

const gameContainer = document.getElementById("game-container");
const startButton = document.getElementById("start-button");
const gameOver = document.getElementById("game-over");
const elapsedTime = document.getElementById("elapsed-time");
const restartButton = document.getElementById("restart-button");
let tiles = [];
let firstTile = null;
let startTime;

function getRandomData() {
  const shuffled = data.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 6);
}

function initGame() {
  startTime = Date.now();
  const selectedData = getRandomData();
  const shuffledData = selectedData
    .flatMap((pair) => pair)
    .sort(() => Math.random() - 0.5);

  gameContainer.innerHTML = "";
  tiles = [];

  shuffledData.forEach((text, index) => {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    tile.innerHTML = text;
    tile.dataset.index = index;
    gameContainer.appendChild(tile);
    tiles.push(tile);

    tile.addEventListener("click", () => handleTileClick(tile));
  });
}

function createParticles(x, y) {
  const particleContainer = document.createElement("div");
  particleContainer.classList.add("particle-container");
  particleContainer.style.left = `${x}px`;
  particleContainer.style.top = `${y}px`;

  for (let i = 0; i < 10; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");
    particleContainer.appendChild(particle);
  }

  document.body.appendChild(particleContainer);

  setTimeout(() => {
    particleContainer.remove();
  }, 1000); // 粒子效果持续 1 秒
}

function handleTileClick(tile) {
  if (tile.classList.contains("hidden") || tile === firstTile) return;

  tile.style.backgroundColor = "#d0f0d0";
  playAudio(tile.innerText); // 使用 utils.js 中的 playAudio 函数

  if (!firstTile) {
    firstTile = tile;
  } else {
    const firstText = firstTile.textContent.trim();
    const secondText = tile.textContent.trim();

    if (isMatch(firstText, secondText, data)) {
      // 通过参数传递 data
      setTimeout(() => {
        const rect1 = firstTile.getBoundingClientRect();
        const rect2 = tile.getBoundingClientRect();

        createParticles(
          (rect1.left + rect1.right) / 2,
          (rect1.top + rect1.bottom) / 2
        );
        createParticles(
          (rect2.left + rect2.right) / 2,
          (rect2.top + rect2.bottom) / 2
        );

        firstTile.classList.add("hidden");
        tile.classList.add("hidden");
        firstTile = null;
        checkGameOver(tiles, startTime, elapsedTime, gameContainer, gameOver);
      }, 300);
    } else {
      firstTile.classList.add("shake");
      tile.classList.add("shake");
      setTimeout(() => {
        firstTile.style.backgroundColor = "rgba(255, 255, 255, 0.4)";
        tile.style.backgroundColor = "rgba(255, 255, 255, 0.4)";
        firstTile.classList.remove("shake");
        tile.classList.remove("shake");
        firstTile = null;
      }, 500);
    }
  }
}

// 在游戏初始化前加载数据
startButton.addEventListener("click", async () => {
  await loadData(); // 确保数据加载完成
  startGame(startButton, gameContainer, initGame);
});

restartButton.addEventListener("click", async () => {
  await loadData(); // 确保数据加载完成
  restartGame(gameOver, gameContainer, initGame);
});
