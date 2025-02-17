$(function () {
  // メニューボタンをクリックしたときに実行する処理
  $(".drawer_button").click(function () {
    // ボタンのclass属性を切り替え
    $(this).toggleClass("active");
    // ナビのclass属性を切り替え
    $("nav").toggleClass("open");
    // 背景の表示と非表示を切り替え
    $(".drawer_bg").fadeToggle();
  });
  // 背景をクリックしたときに実行する処理
  $(".drawer_bg").click(function () {
    // ボタンのclass属性を削除
    $(".drawer_button").removeClass("active");
    // ナビのclass属性を削除
    $("nav").removeClass("open");
    // 背景を非表示
    $(this).hide();
  });
});