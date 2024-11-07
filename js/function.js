
//グローバル変数の定義



//確率の設定値を足し合わせる関数---------
function sum(arrays) { 
  let a = 0;
  let b = 0;

  for (const j in arrays) {
    a += arrays[j]
  }
  return a;
}

//乱数を生成し、設定した確率に合わせて数値をセットする関数---------
function lot(tx1,tx2,tx3,tx4,tx5,tx6,tx7) {
  const data = {
    7: tx7, // 初期値：5%
    6: tx6, // 初期値：8%
    5: tx5, // 初期値：11%
    4: tx4, // 初期値：14%
    3: tx3, // 初期値：17%
    2: tx2, // 初期値：20%
    1: tx1, // 初期値：25%
  }

  //乱数生成
  const rand = Math.floor(Math.random() * 100)

  //変数定義
  let result = 0
  let rate = 0

  for (const prop in data) {
    rate += data[prop]
    if (rand <= rate) {
      result = prop
      break
    }
  }
  return result
}

function array_every() { 
  if (tape_array.every(num => num === 0)) {
    return true;
  }
}


//あたり判定-------------------------------------------------
function judge(lot_array) {

  var filter1 = lot_array.filter(element => element === "1");
  var filter2 = lot_array.filter(element => element === "2");
  var filter3 = lot_array.filter(element => element === "3");
  var filter4 = lot_array.filter(element => element === "4");
  var filter5 = lot_array.filter(element => element === "5");
  var filter6 = lot_array.filter(element => element === "6");
  var filter7 = lot_array.filter(element => element === "7");

  var str = "";

  if (filter1.length >= 5) {
    str = "7等当選"
    return str;
    
  } else if (filter2.length >= 5) { 
    str = "6等当選"
    return str;

  } else if (filter3.length >= 5) {
    str = "5等当選"
    return str;

  } else if (filter4.length >= 5) {
    str = "4等当選"
    return str;

  } else if (filter5.length >= 5) {
    str = "3等当選"
    return str;

  } else if (filter6.length >= 5) {
    str = "2等当選"
    return str;

  } else if (filter7.length >= 5) {
    str = "1等当選"
    return str;

  } else {
    str = "ハズレ"
    return str;
  }

}

//ボタン押下------------------------------------------------
$("#button").on("click", function () {

  //抽選結果の初期化
  $("#result_value").html("削って！！");

  //配列の初期化
  var canvas001 = document.getElementById("canvas001");
  var canvas002 = document.getElementById("canvas002");
  var canvas003 = document.getElementById("canvas003");
  var canvas004 = document.getElementById("canvas004");
  var canvas005 = document.getElementById("canvas005");
  var canvas006 = document.getElementById("canvas006");
  var canvas007 = document.getElementById("canvas007");
  var canvas008 = document.getElementById("canvas008");
  var canvas009 = document.getElementById("canvas009");

  //フラグON
  //銀テープのON/OFFのフラグ変数
  tape_array = new Array(1, 1, 1, 1, 1, 1, 1, 1, 1); //グローバル変数
  console.log(tape_array);

  if (canvas001.getContext) {
    var context001 = canvas001.getContext("2d");//2次元描画
    //四角形
    context001.fillStyle = '#808080';
    context001.fillRect(0, 0, 180, 180);//塗りつぶされた四角形
    // context001.clearRect(30, 30, 120, 120);//四角形の範囲を削除
    // context001.strokeRect(40, 40, 100, 100);//輪郭線の四角形
  }

  if (canvas002.getContext) {
    var context002 = canvas002.getContext("2d");//2次元描画
    //四角形
    context002.fillStyle = '#808080';
    context002.fillRect(0, 0, 180, 180);//塗りつぶされた四角形
    // context001.clearRect(30, 30, 120, 120);//四角形の範囲を削除
    // context001.strokeRect(40, 40, 100, 100);//輪郭線の四角形
  }

  if (canvas003.getContext) {
    var context003 = canvas003.getContext("2d");//2次元描画
    //四角形
    context003.fillStyle = '#808080';
    context003.fillRect(0, 0, 180, 180);//塗りつぶされた四角形
    // context001.clearRect(30, 30, 120, 120);//四角形の範囲を削除
    // context001.strokeRect(40, 40, 100, 100);//輪郭線の四角形
  }

  if (canvas004.getContext) {
    var context004 = canvas004.getContext("2d");//2次元描画
    //四角形
    context004.fillStyle = '#808080';
    context004.fillRect(0, 0, 180, 180);//塗りつぶされた四角形
    // context001.clearRect(30, 30, 120, 120);//四角形の範囲を削除
    // context001.strokeRect(40, 40, 100, 100);//輪郭線の四角形
  }

  if (canvas005.getContext) {
    var context005 = canvas005.getContext("2d");//2次元描画
    //四角形
    context005.fillStyle = '#808080';
    context005.fillRect(0, 0, 180, 180);//塗りつぶされた四角形
    // context001.clearRect(30, 30, 120, 120);//四角形の範囲を削除
    // context001.strokeRect(40, 40, 100, 100);//輪郭線の四角形
  }

  if (canvas006.getContext) {
    var context006 = canvas006.getContext("2d");//2次元描画
    //四角形
    context006.fillStyle = '#808080';
    context006.fillRect(0, 0, 180, 180);//塗りつぶされた四角形
    // context001.clearRect(30, 30, 120, 120);//四角形の範囲を削除
    // context001.strokeRect(40, 40, 100, 100);//輪郭線の四角形
  }

  if (canvas007.getContext) {
    var context007 = canvas007.getContext("2d");//2次元描画
    //四角形
    context007.fillStyle = '#808080';
    context007.fillRect(0, 0, 180, 180);//塗りつぶされた四角形
    // context001.clearRect(30, 30, 120, 120);//四角形の範囲を削除
    // context001.strokeRect(40, 40, 100, 100);//輪郭線の四角形
  }

  if (canvas008.getContext) {
    var context008 = canvas008.getContext("2d");//2次元描画
    //四角形
    context008.fillStyle = '#808080';
    context008.fillRect(0, 0, 180, 180);//塗りつぶされた四角形
    // context001.clearRect(30, 30, 120, 120);//四角形の範囲を削除
    // context001.strokeRect(40, 40, 100, 100);//輪郭線の四角形
  }

  if (canvas009.getContext) {
    var context009 = canvas009.getContext("2d");//2次元描画
    //四角形
    context009.fillStyle = '#808080';
    context009.fillRect(0, 0, 180, 180);//塗りつぶされた四角形
    // context001.clearRect(30, 30, 120, 120);//四角形の範囲を削除
    // context001.strokeRect(40, 40, 100, 100);//輪郭線の四角形
  }

  

  var tx_arr = new Array(
    Number(document.getElementById('textbox1').value),
    Number(document.getElementById('textbox2').value),
    Number(document.getElementById('textbox3').value),
    Number(document.getElementById('textbox4').value),
    Number(document.getElementById('textbox5').value),
    Number(document.getElementById('textbox6').value),
    Number(document.getElementById('textbox7').value),
  )

  if (sum(tx_arr) === 100) {
    
    //配列の初期化
    lot_array = new Array(); //グローバル関数

    //乱数から1〜7までの数字を生成して配列にセット
    for (let i = 1; i < 10; i++) {
      lot_array.push(lot(tx_arr[0], tx_arr[1], tx_arr[2], tx_arr[3], tx_arr[4], tx_arr[5], tx_arr[6],));
    }
    console.log(lot_array);
    console.log(judge(lot_array));

    //UIに数字を表示
    $("#num1").html(lot_array[0]);
    $("#num2").html(lot_array[1]);
    $("#num3").html(lot_array[2]);
    $("#num4").html(lot_array[3]);
    $("#num5").html(lot_array[4]);
    $("#num6").html(lot_array[5]);
    $("#num7").html(lot_array[6]);
    $("#num8").html(lot_array[7]);
    $("#num9").html(lot_array[8]);

    //抽選結果を表示
    // $("#result_value").html(judge(lot_array));

  } else { 
    alert("確率は足し合わせて100 % になるように設定してください");
  }

});

//隠しテープを押下------------------------------------------------
$("#canvas001").on("click", function () {
  var canvas001 = document.getElementById("canvas001");
  var context001 = canvas001.getContext("2d");//2次元描画
  context001.clearRect(0, 0, 180, 180);

  tape_array[0] = 0;
  console.log(tape_array);
  if (array_every()) { 
    $("#result_value").html(judge(lot_array));
  }
});

$("#canvas002").on("click", function () {
  var canvas002 = document.getElementById("canvas002");
  var context002 = canvas002.getContext("2d");//2次元描画
  context002.clearRect(0, 0, 180, 180);

  tape_array[1] = 0;
  console.log(tape_array);
  if (array_every()) {
    $("#result_value").html(judge(lot_array));
  }
});

$("#canvas003").on("click", function () {
  var canvas003 = document.getElementById("canvas003");
  var context003 = canvas003.getContext("2d");//2次元描画
  context003.clearRect(0, 0, 180, 180);

  tape_array[2] = 0;
  console.log(tape_array);
  if (array_every()) {
    $("#result_value").html(judge(lot_array));
  }
});

$("#canvas004").on("click", function () {
  var canvas004 = document.getElementById("canvas004");
  var context004 = canvas004.getContext("2d");//2次元描画
  context004.clearRect(0, 0, 180, 180);

  tape_array[3] = 0;
  console.log(tape_array);
  if (array_every()) {
    $("#result_value").html(judge(lot_array));
  }
});

$("#canvas005").on("click", function () {
  var canvas005 = document.getElementById("canvas005");
  var context005 = canvas005.getContext("2d");//2次元描画
  context005.clearRect(0, 0, 180, 180);

  tape_array[4] = 0;
  console.log(tape_array);
  if (array_every()) {
    $("#result_value").html(judge(lot_array));
  }
});

$("#canvas006").on("click", function () {
  var canvas006 = document.getElementById("canvas006");
  var context006 = canvas006.getContext("2d");//2次元描画
  context006.clearRect(0, 0, 180, 180);

  tape_array[5] = 0;
  console.log(tape_array);
  if (array_every()) {
    $("#result_value").html(judge(lot_array));
  }
});

$("#canvas007").on("click", function () {
  var canvas007 = document.getElementById("canvas007");
  var context007 = canvas007.getContext("2d");//2次元描画
  context007.clearRect(0, 0, 180, 180);

  tape_array[6] = 0;
  console.log(tape_array);
  if (array_every()) {
    $("#result_value").html(judge(lot_array));
  }
});

$("#canvas008").on("click", function () {
  var canvas008 = document.getElementById("canvas008");
  var context008 = canvas008.getContext("2d");//2次元描画
  context008.clearRect(0, 0, 180, 180);

  tape_array[7] = 0;
  console.log(tape_array);
  if (array_every()) {
    $("#result_value").html(judge(lot_array));
  }
});

$("#canvas009").on("click", function () {
  var canvas009 = document.getElementById("canvas009");
  var context009 = canvas009.getContext("2d");//2次元描画
  context009.clearRect(0, 0, 180, 180);

  tape_array[8] = 0;
  console.log(tape_array);
  if (array_every()) {
    $("#result_value").html(judge(lot_array));
  }
});
