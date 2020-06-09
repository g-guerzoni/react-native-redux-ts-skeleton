import { reels, prizes } from '../constants/reel';

export default function spin() {
  const reelsResult: string[] = randomReels();
  return checkPrizeByReel(reelsResult);
}

function randomReels() {
  return reels.map((reel: string[]) => {
    return reel[Math.floor(Math.random() * Math.floor(reel.length))];
  });
}

function checkPrizeByReel(reel: string[]) {
  const reelMap: { [key: string]: number } = {};

  reel.forEach((fruit) => {
    reelMap[fruit] = reelMap[fruit] ? reelMap[fruit] + 1 : 1;
  });

  const prizeResult = prizes.find(
    (prize) => reelMap[prize.fruit] === prize.value
  ) || { prize: 0 };

  return { reel, prize: prizeResult.prize };
}
