$(function () {
  // タブをクリックしたときに実行する処理
  $(".nav li").click(function () {
    // クリックしたタブのインデックス番号を取得
    var a = $(".nav li").index(this);
    // リストのclass属性を追加
    $(".description li").addClass("is-hidden");
    // クリックしたタブに対応するリストのclass属性を削除
    $(".description li").eq(a).removeClass("is-hidden");
  });
});