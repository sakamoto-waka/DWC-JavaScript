$(function() {
  $('#back a').on('click', function(event) {
    // $('セレクタ名').animate({
    //   変化対象のプロパティ名:変化値
    // }, アニメーションの動作時間);

    // body要素またはhtml要素 →　ページ全体の意味
    $('body, html').animate( {
      // 一番上へ
      scrollTop: 0
      // 動作時間
    }, 800);
    // aタグの無効化
    event.preventDefault();
  })
});