// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function numberBlocksRequired(max, min, sides) {
  const diff = max - min;
  let numOfBlocks = 0;
  let i = 1;
  for (; i < diff; i++) {
    numOfBlocks += sides * 2 * i
  }
  numOfBlocks += 2 * diff
  return numOfBlocks;
}

function findPeak(max, min) {
  return max + (max - min);
}

function corelogic(subArr, K, sides) {
  const max = Math.max(...subArr);
  const min = Math.min(...subArr);
  let peak = 0,
    curpeak;
  const blocks = numberBlocksRequired(max, min, sides);
  if (blocks > K) {
    return -1;
  } else {
    return findPeak(max, min);
  }
}

function solution(H, K) {
  // write your code in JavaScript (Node.js 6.4.0)
  const maxHeight = Math.max(...H);

  const indexArr = [];

  for (let i in H) {
    if (H[i] === maxHeight) {
      indexArr.push(i);
    }
  }
  let peak = maxHeight;
  const newArr = H;
  if (indexArr.length > 1) {
    for (let i = 0; i < indexArr.length; i++) {
      const subArr = newArr.slice(indexArr[i], indexArr[i + 1]);
      curpeak = corelogic(subArr, K, 2);
      if (peak < curpeak) {
        peak = curpeak;
      }
    }
  } else {
    const subArr1 = newArr.slice(0, indexArr[0] + 1);
    const subArr2 = newArr.slice(indexArr[0], H.length);
    let peak1 = corelogic(subArr1, K, 1);
    let peak2 = corelogic(subArr2, K, 1);
    peak1 = peak1 > peak2 ? peak1 : peak2;
    peak = peak > peak1 ? peak : peak1;
  }

  return peak;

}