$(function(){
  // ページ数を指定
  let pageCount = 1
  // 検索ボタンがクリックされたときに実行する処理
  $(".search-btn").on("click",function(){
    // 検索ワードに入力された値を代入する
    const searchWord = $("#search-input").val();
    // 検索ワードに入力された値をコンソールに表示
    console.log(searchWord);
    // 指定したURLから検索ワードの情報を取得
    const settings = {
    url: "https://ci.nii.ac.jp/books/opensearch/search?title=" + searchWord + "&format=json&p=" + pageCount + "&count=20",
    method: "GET"
  }

  // ajaxが正常に実行されたかどうかで処理を分ける
  $.ajax(settings).done(function (response) {
    // 取得した情報をresultに代入する
    const result = response['@graph'];
    // コンソールにresultを表示する
    console.log(result);
    // 画面にresultを表示する
    displayResult(result)
    // 情報が取得されなかった場合はエラーを実行する
    }).fail(function (err) {
    // 画面にエラーを表示する
    displayError(err)
  });

  // ajaxが正常に実行されたときの処理
  function displayResult(result){
    // 前回の検索結果をリセットする
    $(".lists").empty();
    // 前回表示したメッセージをリセットする
    $(".message").remove();
    // 検索値が見つかったときに実行する処理
    if (result[0].items?.length > 0) {
      // 引数のgetindexは配列のindex。getValはvalue。getValのみを使えば検索一覧を作成できる
      // 検索値が見つかった場合は、eachで全データ出力するまで繰り返し処理
      $.each(result[0].items, function (getindex, getVal) {
        // タイトル(getVal.title)の値が存在しているかを確認し、ある場合は値を表示、ない場合はテキストを定数へ代入
        const getTitle = getVal.title ? getVal.title : "タイトル不明";
        // 作者(getVal["dc:creator"])の値が存在しているかを確認し、ある場合は値を表示、ない場合はテキストを定数へ代入
        const getCreator = getVal["dc:creator"] ? getVal["dc:creator"] : "作者不明";
        // 出版社(getVal["dc:publisher"])の値が存在しているかを確認し、ある場合は値を表示、ない場合はテキストを定数へ代入
        const getPublisher = getVal["dc:publisher"] ? getVal["dc:publisher"][0] : "出版社不明";
        // リンク(getVal.link["@id"])の値が存在しているかを確認し、ある場合は値を表示、ない場合はテキストを定数へ代入
        const getLink = getVal.link["@id"]
        // 検索値を表示する
        const getResult = '<li class="lists-item"><div class="list-inner"><p>タイトル：' + getTitle
        + "</p><p>作者：" + getCreator + "</p><p>出版社："
        + getPublisher + '</p><a href="' + getLink + '" target="_blank">書籍情報</a></div></li>';
        // .listsの子要素の先頭にresultを追加
        $(".lists").prepend(getResult);
      });
    }
    else{
      // .listsの子要素のみ削除(.listsの中身を空にする)
      $(".lists").empty();
      // .listsの前にDOM追加
      $(".lists").before('<div class="message">検索結果が見つかりませんでした。<br>別のキーワードで検索して下さい。</div>');
    }
  };

  // ajaxが正常に実行されなかったときの処理
  function displayError(err){
    // 前回の検索結果をリセットする
    $(".lists").empty();
    // 前回表示したメッセージをリセットする
    $(".message").remove();
    // ステータスコードが0のときに実行する処理
    if(err.status === 0){
      // 検索結果の前にメッセージを表示する
      $(".lists").before('<div class="message">正常に接続できませんでした。<br>インターネットに接続されていません。</div>');
    }
    // ステータスコードが400のときに実行する処理
    else if(err.status === 400){
      // 検索結果の前にメッセージを表示する
      $(".lists").before('<div class="message">検索キーワードが誤っています。</div>');
    }
    // ステータスコードが500のときに実行する処理
    else if(err.status === 500){
      // 検索結果の前にメッセージを表示する
      $(".lists").before('<div class="message">サーバー側に問題があります。</div>');
    }
  }

});
});

$(function(){
  // リセットボタンがクリックされたときに実行する処理
  $(".reset-btn").on("click",function(){
    // 前回の検索結果をリセットする
    $(".lists").empty();
    // 前回表示したメッセージをリセットする
    $(".message").remove();
    // 検索ワードをリセットする
    $("#search-input").val("");
  });
});