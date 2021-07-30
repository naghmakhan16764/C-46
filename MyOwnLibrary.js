function createCounters() {
  redCounter = createSprite(width / 2, height / 2, 45, 45);
  redCounter.addImage("redCounterImg", redCounterImg);
  redCounter.scale = 0.05;

  striker = createSprite(width/2, 505, 25, 25);
  striker.addImage("strikerImg", strikerImg);
  striker.scale = 0.2;

  for (var i = 0; i < 9; i = i + 1) {
    black.push(createSprite(225, 225));
    black[i].addImage("blackCounterImg", blackCounterImg);
    black[i].scale = 0.05;
  }

  for (var j = 0; j < 9; j = j + 1) {
    white.push(createSprite(225, 225));
    white[j].addImage("whiteCounterImg", whiteCounterImg);
    white[j].scale = 0.05;
  }
}

function placeCounters() {
  black[0].x = width / 2 - 20;
  black[0].y = height / 2;

  black[1].x = width / 2 + 10;
  black[1].y = height / 2 + 20;

  black[2].x = width / 2 + 10;
  black[2].y = height / 2 - 20;

  black[3].x = width / 2 - 30;
  black[3].y = height / 2 - 20;

  black[4].x = width / 2 + 30;
  black[4].y = height / 2 - 20;

  black[5].x = width / 2 - 30;
  black[5].y = height / 2 + 20;

  black[6].x = width / 2 + 30;
  black[6].y = height / 2 + 20;

  black[7].x = width / 2;
  black[7].y = height / 2 + 40;

  black[8].x = width / 2;
  black[8].y = height / 2 - 40;

  white[0].x = width / 2 + 20;
  white[0].y = height / 2;

  white[1].x = width / 2 - 10;
  white[1].y = height / 2 - 20;

  white[2].x = width / 2 - 10;
  white[2].y = height / 2 + 20;

  white[3].x = width / 2 - 40;
  white[3].y = height / 2;

  white[4].x = width / 2 + 40;
  white[4].y = height / 2;

  white[5].x = width / 2 - 20;
  white[5].y = height / 2 - 40;

  white[6].x = width / 2 + 20;
  white[6].y = height / 2 - 40;

  white[7].x = width / 2 - 20;
  white[7].y = height / 2 + 40;

  white[8].x = width / 2 + 20;
  white[8].y = height / 2 + 40;
}

