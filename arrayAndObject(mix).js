
// 陣列來說，他都是放幾筆幾筆資料[0][1]

// 這樣就算是 資料結構。
let market = [
  {
    bossName:"tom",
    bananaNum:6,
    appleNum:7,
    isClose:false,
  },
  {
    bossName:"John",
    bananaNum:9,
    appleNum:10,
    isClose:true,
  }
];
// 這個讀取回傳方式是整個陣列
// console.log(market);

// 讀取方式，讀取裡頭的 屬性
console.log(market[1].bossName);
// 這個回傳 物件的屬性
// 找屬性都是用「.」去找
