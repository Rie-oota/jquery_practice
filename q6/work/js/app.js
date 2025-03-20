$(function () {
  // 選択項目を変更したときに実行する処理
  $(".select-box").on("change", function () {
    // 選択した項目のvalue値を取得して変数select_itemに設定
    const select_item = $(this).val();
    $(".food-list li").hide();
    // 「全て」またはを変数categoryと同じ項目を選択した場合は表示
    $(".food-list li").filter(function (){
      const category = $(this).data("category-type");
    return select_item === "all" || select_item === category;
    }).show();
  });
});