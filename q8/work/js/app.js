// 定数としてURLやパラメータを分けて定義
const BASE_URL = "https://ci.nii.ac.jp/books/opensearch/search";
const FORMAT = "json";
const COUNT = 20;

$(function(){
  // ページ数を指定
  let pageCount = 0;
  // 前回の検索ワードを保存する変数
  let previousSearchWord = "";
  // 検索ボタンがクリックされたときに実行する処理
  $(".search-btn").on("click",function(){
    // 検索ワードに入力された値を代入する
    const searchWord = $("#search-input").val();
    // 検索ワードが前回と異なるもしくは前回の検索ワードが空の場合、ページ数をリセット
    if (searchWord !== previousSearchWord || previousSearchWord === "") {
      pageCount = 1;
      // .listsの子要素のみ削除(.listsの中身を空にする)
      $(".lists").empty();
      // 前回の検索ワードに再代入する
      previousSearchWord = searchWord;
      // 検索ワードが前回と同じ場合、ページ数を増やす
    } else {
      pageCount++;
    }
    // クエリパラメータを構築　指定したURLから検索ワードの情報を取得
    const settings = {
      url: `${BASE_URL}?title=${encodeURIComponent(searchWord)}&format=${FORMAT}&p=${pageCount}&count=${COUNT}`,
      method: "GET"
    };

    // ajaxが正常に実行されたかどうかで処理を分ける
    $.ajax(settings).done(function (response) {
      // 取得した情報をresultに代入する
      const result = response['@graph'];
      // 画面にresultを表示する
      displayResult(result)
      // 情報が取得されなかった場合はエラーを実行する
      }).fail(function (err) {
      // 画面にエラーを表示する
      displayError(err)
    });

    // ajaxが正常に実行されたときの処理
    function displayResult(result){
      // 検索値が見つかったときに実行する処理
      if (result[0].items?.length > 0) {
        // 前回表示したメッセージをリセットする
        $(".message").remove();
        // 引数のgetindexは配列のindex。getValはvalue。getValのみを使えば検索一覧を作成できる
        // 検索値が見つかった場合は、eachで全データ出力するまで繰り返し処理
        $.each(result[0].items, function (getindex, getVal) {
          // タイトル(getVal.title)の値が存在しているかを確認し、ある場合は値を表示、ない場合はテキストを定数へ代入
          const getTitle = $("<p>").html("タイトル：" + (getVal.title ? getVal.title : "タイトル不明")).prop("outerHTML");
          // 作者(getVal["dc:creator"])の値が存在しているかを確認し、ある場合は値を表示、ない場合はテキストを定数へ代入
          const getCreator = $("<p>").html("作者：" + (getVal["dc:creator"] ? getVal["dc:creator"] : "作者不明")).prop("outerHTML");
          // 出版社(getVal["dc:publisher"])の値が存在しているかを確認し、ある場合は値を表示、ない場合はテキストを定数へ代入
          const getPublisher = $("<p>").html("出版社：" + (getVal["dc:publisher"] ? getVal["dc:publisher"][0] : "出版社不明")).prop("outerHTML");
          // リンク(getVal.link["@id"])の値が存在しているかを確認し、ある場合は値を表示、ない場合はテキストを定数へ代入
          const getLink = $("<a>").attr("href",getVal.link["@id"]).attr("target","_blank").text("書籍情報").prop("outerHTML");
          // 検索値を表示する
          const getResult = `<li class="lists-item"><div class="list-inner">${getTitle}${getCreator}${getPublisher}${getLink}</div></li>`;
          // .listsの子要素の先頭にresultを追加
          $(".lists").prepend(getResult);
        });
      }
      else{
        // .listsの子要素のみ削除(.listsの中身を空にする)
        $(".lists").empty();
        // 前回表示したメッセージをリセットする
        $(".message").remove();
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
        $(".lists").before('<div class="message">正常に接続できませんでした。<br>Wi-Fiやモバイル回線が安定しているか確認し、インターネットに再接続してください。</div>');
      }
      // ステータスコードが400のときに実行する処理
      else if(err.status === 400){
        // 検索結果の前にメッセージを表示する
        $(".lists").before('<div class="message">HTTP ERROR 400<br>エラーが発生しています。<br>ブラウザのキャッシュまたはCookieを削除してください。</div>');
      }
      // ステータスコードが500のときに実行する処理
      else if(err.status === 500){
        // 検索結果の前にメッセージを表示する
        $(".lists").before('<div class="message">500 Internal Server Error<br>サーバー側に問題があります。<br>サーバーの障害情報を確認してください。</div>');
      }
      // ステータスコードが一致しないときに実行する処理
      else {
        $(".lists").before('<div class="message">通信できませんでした。<br>時間を置いてからアクセスしてください。</div>');
      }
    }
  });
});

$(function(){
  // リセットボタンがクリックされたときに実行する処理
  $(".reset-btn").on("click",function(){
    // ページ数をリセットする
    pageCount = 0;
    // 前回の検索ワードをリセットする
    previousSearchWord = "";
    // 前回の検索結果をリセットする
    $(".lists").empty();
    // 前回表示したメッセージをリセットする
    $(".message").remove();
    // 検索ワードをリセットする
    $("#search-input").val("");
  });
});