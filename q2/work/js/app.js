$(function () {
  // オープンボタンをクリックしたときに実行する処理
  $(".modal_open_button").click(function () {
    // モーダルウィンドウをフェードインする
    $(".modal_win").fadeIn();
  });
  // クローズボタンをクリックしたときに実行する処理
  $(".modal_close_button").click(function () {
    // モーダルウィンドウをフェードアウトする
    $(".modal_win").fadeOut();
  });
});