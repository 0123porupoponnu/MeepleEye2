// ===== Build007.4 将棋風効果音 =====

// app.js の一番上に追加
const shogiSound = new Audio("meeple/shogi_crisp.wav");
shogiSound.volume = 0.38;

// card.onclick の x.count-- の前に追加
// shogiSound.currentTime = 0;
// shogiSound.play();
