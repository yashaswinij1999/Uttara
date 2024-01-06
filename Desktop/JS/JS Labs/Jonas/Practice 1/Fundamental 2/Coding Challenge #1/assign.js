"use strict";

/* Using Arrow Function 
const dolphinCalAvgScore = (score1, score2, score3) => {
  const avgScore = (score1, score2, score3) / 3;
  return avgScore;
};

const dolphinAvgScore = dolphinCalAvgScore(44, 23, 71);
console.log(dolphinAvgScore);

const KoalasCalAvgScore = (score1, score2, score3) => {
  const avgScore = (score1, score2, score3) / 3;
  return avgScore;
};
*/

/* Function declartion */

const avgScore = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let dolAvgScore = avgScore(44, 23, 71);
let koaAvgScore = avgScore(65, 54, 49);

console.log(dolAvgScore, koaAvgScore);

function checkWinner(dolAvgScore, koaAvgScore) {
  if (dolAvgScore > 2 * koaAvgScore) {
    console.log(`dolAvgScore wins the competation with ${dolAvgScore} score`);
  } else {
    if (koaAvgScore > 2 * dolAvgScore) {
      console.log(`koaAvgScore wins the competation with ${koaAvgScore} score`);
    } else {
      console.log(`No one wins the game`);
    }
  }
}

checkWinner(dolAvgScore, koaAvgScore);

dolAvgScore = avgScore(85, 54, 41);
koaAvgScore = avgScore(23, 34, 27);
console.log(dolAvgScore, koaAvgScore);
checkWinner(dolAvgScore, koaAvgScore);
