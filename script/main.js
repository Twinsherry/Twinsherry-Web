alert("这只是一个测试界面"+"(*╹▽╹*)艾米卡酱升级js技能中xd");


// Just Practice
console.log("Cat_Over_Flow".length);

console.log("Luttefair".charAt(0));

console.log("Hikari Sakurai".replace("Hikari Sakurai","樱小路露娜"))

console.log("Hikari Sakurai".toLocaleUpperCase())


// 布尔类型
// 比大小 &&与 ||或  !非

// 变量

// var全局 let局部 ？？？
var name = "Sherry";
console.log(name);
name="Amika";
console.log(name);

let a = 1;
console.log(a);
a = a+1;
console.log(a);

b = 114514;
console.log(b);
b = 1919810;
console.log(b);

var x;
x = "3" + 4 + 5;
console.log(x);
// 全部转换为字符串，数据类型改变
var henghengaa ;
henghengaa = 1 + 1 + 4 + 5 + 1 +"4";
console.log("henghengaa的值是"+henghengaa);
console.log("味道被清理掉了！");

// 等号
// 双等号：console.log(123 == "123"); true 数字转换为字符串
// 1 == true 0 == false
// 三等号：console.log(123 === "123") false 没有类型自动转换


console.log(0 == false); 
console.log(0 != false);
console.log(0 !== false);   //不转换
console.log(0 === false);

// 控制结构
// if
var x = "Hikari";
var y = "Tairitsu";

if (x == "Hikari" && y == "Tairitsu"){
  console.log("光与对立，回忆与歌");
} else {
  console.log("创造一个没有对立的世界");
}

if (x == "Hikari" && y == "Tairitsu"){
  console.log("光与对立，回忆与歌");
} else if (x=="光" && y == "对立"){
  console.log("欢迎来到arcaea的世界");
} else {
  console.log("无音的调和");
}
// while在JavaScript中不常用

// while(){
// }

// do while

var fen = 1919810; 
var n = 114514;

// do{
//   n = n + 16;
//   console.log(n);
// } while (fen > n);
//   console.log(n+"啊啊啊啊啊啊啊啊");

// var & let 作用域 var没有作用域，可以任意访问，代码块里的也可以访问，代码块里的let无法被外部访问
// 多使用let，var用完不会释放而占据内存

// for

var HJ = 1;
for(let qd =0; qd<5; qd++){
  HJ++;
  console.log(HJ);
}

// 三目表达式
var age = 16;

var allowed = (age >=18) ? "Yes" : "No";

console.log(allowed);