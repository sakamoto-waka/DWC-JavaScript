// // documentがhtml(表示画面)を取得したあとにjQueryを実行させる関数、
// htmlとの紐付けを行っている。
// $(document).ready(function(){
//   $(セレクタ).メソッド(パラメータ);
//     $(cssのやつ).何を行うか(その内容を書き換える、指定しない場合メソッドを取得)
//   どこに対してなにを行うか
//   $('body').html('<h1>Hello jQuery!!</h1>');
//　　「bodyタグ内のHTMLを<h1>Hello jQuery!!</h!>で書き換えなさい」の意味
// });

// 省略形
$(function(){
  // jQueryプログラム内容

// 色変え
  // $('.box1').css({
  //   'background-color': '#0000FF',
  //   'height': '100px'
  // });

// 非表示　→　表示（スライドダウン）
  // $('.box1').slideDown();
  // 表示　→　非表示（スライドアップ）
  // $('.box1').slideUp();

// 非表示　→　表示　＋　色変え
  // $('.box1').show();
  // $('.box1').css({'background-color': '#0000FF'});

// 非表示　→　一瞬だけ表示
  // $('.box1').hide();

// スライドダウン後色変えてスライドアップ
  // $('.box1').slideDown(function(){
  //   $('.box1').css({
  //     'background-color': 'blue',
  //     'width': '200px',
  //     'height': '100px',
  //   }).slideUp();
  // });

// mouseoverでボーダー、離れると消える
  // $('.box1').mouseover(function() {
  //   $('.box1').css({'background-color': '#0000FF'});
  // });
  // $('.box1').mouseout(function() {
  //   $('.box1').css({'background-color': '#FF0000'});
  // });
    // ↓↓↓↓↓書き換え↓↓↓↓↓
  // $('.box1').mouseover(function() {
  //   $('.box1').addClass('box1-ext');
  // });
  // $('.box1').mouseout(function() {
  //   $('.box1').removeClass('box1-ext');
  // });

// スライドアップで消えていくアニメーション
  // $('.bg1').on('click', function() {
  //   $('.bg1').slideUp();
  // });

  // $('.bg2').on('click', function() {
  //   $('.bg2').slideUp();
  // });

  // $('.bg3').on('click', function() {
  //   $('.bg3').slideUp();
  // });

  // $('.bg4').on('click', function() {
  //   $('.bg4').slideUp();
  // });

    // ↓↓↓↓↓書き換え↓↓↓↓↓

  // $('.box1').on('click', function() {
  //   $(this).slideUp();
  // });

  $('button').on('click', function() {
    $('ul').children().css('color', 'red');
  });


});