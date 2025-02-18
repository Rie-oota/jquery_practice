
// $(function () {
//   // 選択項目を変更したときに実行する処理
//   $(".select-box").on("change", function () {
//     // 選択した項目のvalue値を取得して変数select_itemに設定
//     // プルダウンの全項目を変数all_itemに設定
//     let select_item = $(this).val(),all_item = $(".food-list li");
//     // 「全て」を選択した場合は変数all_itemを表示
//     // 「全て」以外を選択した場合は、変数all_itemに対して繰り返し処理を実行
//     if(select_item === "all"){
//       all_item.show()
//     } else {
//       $.each(all_item, function (num, show_item) {
//         //繰り返し処理の内容を指定
//         //data-category-type属性を取得して変数category_itemに設定
//         let category_item = $(show_item).data("category-type");
//         //選択した項目が変数category_itemと同じ場合は変数show_itemを表示
//         //選択した項目が変数category_itemと異なる場合は変数show_itemを非表示 
//         if(select_item === category_item){
//           $(show_item).show()
//         } else {$(show_item).hide()
//         };
//       })
//     };
//   })
// })

$(function () {
  // 選択項目を変更したときに実行する処理
  $(".select-box").on("change", function () {
    // 選択した項目のvalue値を取得して変数select_itemに設定
    // プルダウンの全項目を変数all_itemに設定
    let select_item = $(this).val(),all_item = $(".food-list li");
    // 「全て」を選択した場合は変数all_itemを表示
    // 「全て」以外を選択した場合は、変数all_itemに対して繰り返し処理を実行
    if(select_item === "all"){
      all_item.show()
    } else {
      $(all_item).filter(function (num, show_item) {
        //繰り返し処理の内容を指定
        //data-category-type属性を取得して変数category_itemに設定
        let category_item = $(show_item).data("category-type");
        //選択した項目が変数category_itemと同じ場合は変数show_itemを表示
        //選択した項目が変数category_itemと異なる場合は変数show_itemを非表示 
        if(select_item === category_item){
          $(show_item).show()
        } else {$(show_item).hide()
        };
      })
    };
  })
})