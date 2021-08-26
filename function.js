// 機器人 一早啟- 起床叔牙洗臉。
// 設定早起活動的指令 名稱 

// 這個就像是註冊一個行為 名稱 給她
function  morningAction(){
  console.log("起床");
  cleanHead();
  console.log("出門");
}

// 機器人的晚上活動。
function nightAction(){
  console.log("回家");
  cleanHead();
  console.log("睡覺");
}

function cleanHead(){
  console.log("刷牙");
  console.log("刮鬍子");
  console.log("洗臉");
};

// 在這裡執行。
// 這是function 指令啟動的寫法。
morningAction();
morningAction();

nightAction();
cleanHead();
