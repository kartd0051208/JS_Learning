// object修改物件
let home ={
  momName:"aaa",
  dadName:"bbb",
  dogs:3,
  isWakeUp:true,
};
home.momName="Jane"
home.dogs -=1;
home.dogs=home.dogs +=4;

console.log(home);


// 刪除物件裡頭的屬性
let Ahome={
  momName:"aaa",
  dadName:"bbb",
  dogs:3,
  isWakeUp:true,
}
delete Ahome.dogs
console.log(Ahome);
console.log(Ahome.dogs);

// 讀取物件屬性的方法，但大多數還是用. 比較多，這是用字串的方式讀取
let a = Ahome.dogs;
console.log(Ahome[a]); 
