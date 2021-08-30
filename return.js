function calcTotalScore(chineseScore,mathScore){
  // console.log(chineseScore+mathScore)};
  return chineseScore + mathScore;
}

// console.log 只是把執行的值印出來，並沒有回傳出來。

// return 的意思就是回傳，把東西給回傳出來。

let personTotalScore= calcTotalScore(33,77);

console.log(personTotalScore);
