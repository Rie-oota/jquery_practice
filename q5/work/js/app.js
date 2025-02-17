$(function () {
  // タブのホバー時に実行する処理
  $(".dropdwn li").hover(function () {
    // ul属性を取得してスライドアニメーションで表示
    $(this).children("ul").stop().slideDown()
  });
  // タブからマウスが離れる時に実行する処理
  $(".dropdwn li").mouseleave(function () {
    // ul属性を取得してスライドアニメーションで非表示
    $(this).children("ul").stop().slideUp()
  });
});