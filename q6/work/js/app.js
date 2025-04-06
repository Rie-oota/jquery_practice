$(function () {
  // 選択項目を変更したときに実行する処理
  $(".select-box").on("change", function () {
    // 選択した項目のvalue値を取得して変数selectItemに設定
    const selectItem = $(this).val();
    // リスト全体を非表示
    $(".food-list li").hide();
    // 「全て」またはを変数categoryと同じ項目を選択した場合は表示
    $(".food-list li").filter(function (){
      const category = $(this).data("category-type");
    return selectItem === "all" || selectItem === category;
    }).show();
  });
});