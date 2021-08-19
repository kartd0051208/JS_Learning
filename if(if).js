let sex = "male";
let cm = 88 ;

if(sex == "male"){
  if(cm >=90){
    console.log("男生體型過胖");
  }else{console.log("男生體型正常")}
}else if(sex == "woman"){
  if(cm >=60){
    console.log(女生體型過胖);
  }else{"女生體型正常"}
}else{
  console.log("您給予的資料錯誤")
}
