$(function () {
  // 選択項目を変更したときに実行する処理
  $(".select-box").on("change", function () {
    // 選択した項目のvalue値を取得して変数bに設定
    // プルダウンの全項目を変数cに設定
    var b = $(this).val(),c = $(".food-list li");
    // 「全て」を選択した場合は変数cを表示
    // 「全て」以外を選択した場合は、変数cに対して繰り返し処理を実行
    "all" === b ? c.show() : $.each(c, function (e, a) { 
      //繰り返し処理の内容を指定
      //data-category-type属性を取得して変数dに設定
      var d = $(a).data("category-type");
      //選択した項目が変数dと同じ場合は変数aを表示
      //選択した項目が変数dと異なる場合は変数aを非表示 
      b === d ? $(a).show() : $(a).hide() });
  });
});