// 檢查成績是否及格的函式

function checkScore(score)
{
 if(score >= 60){
  return '及格';}
  else{
  return '不及格';
}}
let tomScore = checkScore(60);
let chickenScore = checkScore(80);
let mathScore = checkScore(50);

console.log(tomScore);
console.log(mathScore);
