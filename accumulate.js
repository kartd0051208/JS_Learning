// let count = 0;

// function test(){
//   count+=1;
//   console.log('test1')
// }
// test();
// test();
// console.log(`目前您紀錄了${count}次`)
let count = 0;
function checkNumber(myInput){
  count += 1 ; 
//   不同情況出現就要+1 
  if (myInput % 2 ==0){
    return '是偶數';
  }else{
    return '是奇數';
  };
  
}

let ccccNumber = checkNumber(222);
console.log(ccccNumber);


console.log(`目前您紀錄了${count}次`)
