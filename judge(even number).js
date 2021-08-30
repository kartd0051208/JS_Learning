// 小程式沒有最佳解法，只有當下最適合
// 小步測試，反覆驗證
// 先驗證自己的想法對不對，再寫完整程式
// let myInput =4 ;
// let checkNumber = myInput%2 == 0 ;
// console.log(checkNumber);

// if(myInput%2 == 0){
//   console.log('是偶數');
// }else{
//   console.log('不是偶數');
// }

// 也可做成functiom
function checkNumber(myInput){
  // let myInput =4 ;
  if(myInput %2 == 0){
  console.log('是偶數');
}else{
  console.log('不是偶數');
}
}

// checkNumber();
// checkNumber(111);

let checkSevenNumber = checkNumber(7);
console.log(checkSevenNumber);
