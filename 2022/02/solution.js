import { input } from "./input.js";

const Scores = {
  Rock: 1,
  Paper: 2,
  Scissors: 3,
  Win: 6,
  Lose: 0,
  Draw: 3,
};

const part1 = input
  .trim()
  .split('\n')
  .reduce((sum, round) => {
    const [opponent, you] = round.split(' ');

    if (you === 'X') {
      sum += Scores.Rock;
      if (opponent === 'A') sum += Scores.Draw;
      if (opponent === 'B') sum += Scores.Lose;
      if (opponent === 'C') sum += Scores.Win;
    }
    
    if (you === 'Y') {
      sum += Scores.Paper;
      if (opponent === 'A') sum += Scores.Win;
      if (opponent === 'B') sum += Scores.Draw;
      if (opponent === 'C') sum += Scores.Lose;
    }
    
    if (you === 'Z') {
      sum += Scores.Scissors;
      if (opponent === 'A') sum += Scores.Lose;
      if (opponent === 'B') sum += Scores.Win;
      if (opponent === 'C') sum += Scores.Draw;
    }

    return sum;
  }, 0);

  const part2 = input
    .trim()
    .split('\n')
    .reduce((sum, round) => {
      const [opponent, expected] = round.split(' ');

      if (expected === 'X') {
        sum += Scores.Lose;
        if (opponent === 'A') sum += Scores.Scissors;
        if (opponent === 'B') sum += Scores.Rock;
        if (opponent === 'C') sum += Scores.Paper;
      }
      
      if (expected === 'Y') {
        sum += Scores.Draw;
        if (opponent === 'A') sum += Scores.Rock;
        if (opponent === 'B') sum += Scores.Paper;
        if (opponent === 'C') sum += Scores.Scissors;
      }
      
      if (expected === 'Z') {
        sum += Scores.Win;
        if (opponent === 'A') sum += Scores.Paper;
        if (opponent === 'B') sum += Scores.Scissors;
        if (opponent === 'C') sum += Scores.Rock;
      }

      return sum;
    }, 0);

console.log('Answer Part 1:', part1);
console.log('Answer Part 2:', part2);