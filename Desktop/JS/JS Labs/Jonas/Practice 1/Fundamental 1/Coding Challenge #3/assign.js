// const dolphinScore1 = 96;
// const dolphinScore2 = 108;
// const dolphinScore3 = 89;

// const koalaScore1 = 88;
// const koalaScore2 = 91;
// const koalaScore3 = 110;

// const dolAvgScore = dolphinScore1 + dolphinScore2 + dolphinScore3;
// const kolAvgScore = koalaScore1 + koalaScore2 + koalaScore3;

// if (dolAvgScore > kolAvgScore) {
//   console.log(`dolphins team wins the trophy with score ${dolAvgScore}`);
// } else {
//   console.log(`koala team wins the trophy with score ${kolAvgScore}`);
// }

// const dolphinScore1 = 97;
// const dolphinScore2 = 112;
// const dolphinScore3 = 101;

// const koalaScore1 = 109;
// const koalaScore2 = 95;
// const koalaScore3 = 123;

// const minimumScore = 100;

// const dolAvgScore = dolphinScore1 + dolphinScore2 + dolphinScore3;
// const kolAvgScore = koalaScore1 + koalaScore2 + koalaScore3;

// if (dolAvgScore > kolAvgScore && dolAvgScore > minimumScore) {
//   console.log(`dolphins team wins the trophy with score ${dolAvgScore}`);
// } else if (kolAvgScore > dolAvgScore && kolAvgScore > minimumScore) {
//   console.log(`koala team wins the trophy with score ${kolAvgScore}`);
// } else {
//   console.log(`the match becomes a draw`);
// }

const dolphinScore1 = 97;
const dolphinScore2 = 60;
const dolphinScore3 = 101;

const koalaScore1 = 109;
const koalaScore2 = 95;
const koalaScore3 = 20;

const minimumScore = 100;

const dolAvgScore = (dolphinScore1 + dolphinScore2 + dolphinScore3) / 3;
const kolAvgScore = (koalaScore1 + koalaScore2 + koalaScore3) / 3;

console.log(dolAvgScore, kolAvgScore);

if (dolAvgScore > kolAvgScore && dolAvgScore >= minimumScore) {
  console.log(`dolphins team wins the trophy with score ${dolAvgScore}`);
} else if (kolAvgScore > dolAvgScore && kolAvgScore >= minimumScore) {
  console.log(`koala team wins the trophy with score ${kolAvgScore}`);
} else if (
  dolAvgScore === kolAvgScore &&
  dolAvgScore >= minimumScore &&
  kolAvgScore >= minimumScore
) {
  console.log(`the match becomes a draw`);
} else {
  console.log("no one wins trophy");
}
