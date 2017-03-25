// console.log('this is a debug message');

function solution(S, K) {
  // write your code in JavaScript (Node.js 6.4.0)
  if (!S) {
    return -1
  }

  const validSms = [];
  while (S.length) {
    if (S.length <= K) {
      validSms.push(S);
      S = '';
    } else {
      for (let i = K; i > 0; i--) {
        if (!S.substring(0, K).includes(' ')) {
          return -1;
        }
        if (S[i] === ' ') {
          validSms.push(S.slice(0, i));
          S = S.slice(i + 1, S.length);
          break;
        }
      }
    }
  }
  return validSms.length;
}