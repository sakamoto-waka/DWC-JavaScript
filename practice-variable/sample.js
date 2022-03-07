// const nickname = 'Taro';
// console.log(nickname);
// nickname = 'jiro';
// console.log(nickname);

// function foo() {
//   let x = 'webcamp';
//   // ここからがブロック（｛｝のこと）スコープ（ローカルスコープ）変数
//   {
//     let y = 'hello webcamp';
//   }
//   console.log(x);
//   // ブロック外なのでエラーになる↓
//   console.log(y);
// }

// foo();

// for(let i = 0; i < 10; i++) {
//   console.log(i);
// }

// // iは（）内で定義されたものなので↓エラーになる
// console.log(i);

// // ホスティング
// var str = 'webcamp'

// function foo() {
//   console.log(str);
//   var str = 'dmm webcamp';
//   console.log(str);
// }

// foo();

// // 必ずiはletで宣言するべし
// for(let i = 0; i < 10; i++) {
//   console.log(i);
// }