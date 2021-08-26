// 客人進來

let peopleStatus= [
  {
  name:"Tom",
  age:33,
  status:"",
  }
]; 

peopleStatus[0].degree=36.5;

console.log(peopleStatus[0]);

if(peopleStatus[0].degree>=37.5 ){
  peopleStatus[0].status = "您不得進入";
  console.log("您不得進入")
}else{
  peopleStatus[0].status = "您可以進入";
  console.log("您可以進入");
}
