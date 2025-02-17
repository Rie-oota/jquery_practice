$(function () {
  // タブをクリックしたときに実行する処理
  $(".nav li").click(function () {
    // クリックしたタブのインデックス番号を取得
    let num = $(".nav li").index(this);
    // リストのclass属性を追加
    $(".description li").addClass("is-hidden");
    // クリックしたタブに対応するリストのclass属性を削除
    $(".description li").eq(num).removeClass("is-hidden");
  });
});