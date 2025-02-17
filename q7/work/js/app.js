$(function () {
  // アカウント作成ボタンがクリックされたときに実行する処理
  $(".btn__submit").on("click", function () {
    // 名字の項目をコンソールに表示 
    console.log("名字");
    // 名字のテキストをコンソールに表示 
    console.log($("#family__name").val());
    // 名前の項目をコンソールに表示 
    console.log("名前");
    // 名前のテキストをコンソールに表示 
    console.log($("#given__name").val());
    // 生年月日の項目をコンソールに表示 
    console.log("生年月日");
    // 生年月日のvalueの値をコンソールに表示 
    console.log($(".year").val() + "年" + $(".month").val() + "月" + $(".day").val() + "日");
    // 性別の項目をコンソールに表示 
    console.log("性別");
    // 性別のvalueの値をコンソールに表示 
    console.log($('[name="gender"]:checked').val());
    // 職業の項目をコンソールに表示 
    console.log("職業");
    // 職業のvalueの値をコンソールに表示 
    console.log($(".occupation").val());
    // アカウント名の項目をコンソールに表示 
    console.log("アカウント名");
    // アカウント名のテキストをコンソールに表示 
    console.log($("#account__name").val());
    // メールアドレスの項目をコンソールに表示 
    console.log("メールアドレス");
    // メールアドレスのテキストをコンソールに表示 
    console.log($("#email").val());
    // パスワードの項目をコンソールに表示 
    console.log("パスワード");
    // パスワードのテキストをコンソールに表示 
    console.log($("#password").val());
    // 確認用パスワードの項目をコンソールに表示 
    console.log("確認用パスワード");
    // 確認用パスワードのテキストをコンソールに表示 
    console.log($("#duplication__password").val());
    // 住所の項目をコンソールに表示 
    console.log("住所");
    // 住所のテキストをコンソールに表示 
    console.log($("#address").val());
    // 電話番号の項目をコンソールに表示 
    console.log("電話番号");
    // 電話番号のテキストをコンソールに表示 
    console.log($("#tel").val());
    // 購買情報の項目をコンソールに表示 
    console.log("購買情報");
    // 選択された購買情報のvalueの値をコンソールに表示 
    console.log($('[name="subscription"]:checked').each(function () {
      console.log($(this).val()) }));
  });
});