$(function () {
  // HTMLが読み込まれたときに実行する処理
  // 文字色を緑に変更
  $("#q1").css("color", "green");
});

$(function () {
  // Q1-2のボタンをクリックしたときに実行する処理
  $("#q2").click(function () {
    // Q1-2のボタンの色をピンクに変更 
    $(this).css("background", "pink");
  });
});

$(function () {
  // Q1-3のボタンをクリックしたときに実行する処理
  $("#q3").click(function () {
    // Q1-3のボタンを3秒かけてフェードアウトする 
    $(this).fadeOut(3000);
  });
});

$(function () {
  // Q1-4のボタンをクリックしたときに実行する処理
  $("#q4").click(function () {
    // Q1-4のボタンの幅を変更
    $(this).css("width", "300");
    // Q1-4のボタンのパディングを変更
    $(this).css("padding", "50");
    // Q1-4のボタンの文字サイズを変更
    $(this).css("font-size", "20px");
  });
});

$(function () {
  // Q1-5のボタンをクリックしたときに実行する処理
  $("#q5").click(function () {
    // Q1-5のボタンの前にDOMを挿入する 
    $(this).before("DOMの前");
    // Q1-5のボタンの後にDOMを挿入する 
    $(this).after("DOMの後");
    // Q1-5のボタン内の前にDOMを挿入する 
    $(this).prepend("DOMの中の前");
    // Q1-5のボタン内の後にDOMを挿入する 
    $(this).append("DOMの中の後");
  });
});

$(function () {
  // Q1-6のボタンをクリックしたときに実行する処理
  $("#q6").click(function () {
    // Q1-6のボタンを2秒かけて移動 
    $(this).animate({"margin-top":"100px","margin-left":"100px"},2000);
  });
});

$(function () {
  // Q1-7のボタンをクリックしたときに実行する処理
  $("#q7").click(function () {
    // idのノードをコンソールに表示 
    console.log(this);
  });
});

$(function () {
  // Q1-8のボタンをホバーしたときに実行する処理
  $("#q8").mouseover(function () {
    // Q1-8のボタンにclass属性を追加する
    $(this).addClass("large");
  });
  $("#q8").mouseout(function () {
    // Q1-8のボタンのclass属性を削除する
    $(this).removeClass("large") ;
  });
});

$(function () {
  // Q1-9のリスト要素をクリックしたときに実行する処理
  $("#q9 li").click(function () {
    // クリックした要素が何番目にあるのかを取得して変数に設定する
    const num = $(this).index();
    // 変数をアラート表示する
    alert(num);
  });
});

$(function () {
  // Q1-10のボタンをクリックしたときに実行する処理
  $("#q10 li").click(function () {
    // クリックした要素が何番目にあるのかを取得して変数に設定する
    const num = $(this).index();
    // 変更箇所をコンソールに表示
    console.log($("#q11 li").eq(num))
    // Q1-11のボタンにclass属性を追加する 
    $("#q11 li").eq(num).addClass("large-text")
  });
});


