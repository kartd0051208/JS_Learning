let tomStatus = {
  name:"Tom",
  age:30,
  degree:36.5,
  status:"",
}

tomStatus.degree = "36.5";

if(tomStatus.degree>=37.5){
  console.log("你不得進入");
  tomStatus.status="您不得進入";
}else{
  console.log("您可以進入");
  tomStatus.status="您可以進入";
}
// 可以把if 的狀態做在物件的狀態上。
// 可以把字母的狀態賦予/覆蓋上去。

console.log(tomStatus);
