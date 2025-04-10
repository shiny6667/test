// This file contains utility functions for the Rhino Matching Game.

export function isMatch(text1, text2, data) {
  return data.some(
    (pair) =>
      (pair[0] === text1 && pair[1] === text2) ||
      (pair[1] === text1 && pair[0] === text2)
  );
}

export function checkGameOver(
  tiles,
  startTime,
  elapsedTime,
  gameContainer,
  gameOver
) {
  const allHidden = tiles.every((tile) => tile.classList.contains("hidden"));
  if (allHidden) {
    const endTime = Date.now();
    const totalTime = (endTime - startTime) / 1000;
    elapsedTime.textContent = totalTime.toFixed(2);
    gameContainer.style.display = "none";
    gameOver.style.display = "block";
  }
}

export function playAudio(text) {
  const encodedText = encodeURIComponent(text);
  const audio = new Audio(
    `https://dict.youdao.com/dictvoice?type=2&audio=${encodedText}`
  );
  audio.play();
}

export function startGame(startButton, gameContainer, initGame) {
  startButton.style.display = "none";
  gameContainer.style.display = "grid";
  initGame(); // 确保调用初始化游戏函数
}

export function restartGame(gameOver, gameContainer, initGame) {
  gameOver.style.display = "none";
  gameContainer.style.display = "grid";
  initGame(); // 确保调用初始化游戏函数
}
