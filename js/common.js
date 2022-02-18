DOCTYPE='utf-8';
//マック10000万円分くらい豪遊して食べたい
$(function() {
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
        $('.grob_menu').toggle('open');
    });

});
//ハンバーガーメニュー制御
$(window).resize(function(){
var  winWin = $(window).width();
if($('.grob_menu').css('display')=="block"&&winWin > 767){
 $('.grob_menu').css('display','none');

};

});


//ナビゲーションバーのやつ
var content = document.querySelector('div.contents');
var onclick = document.getElementById('id');
// https://www.weblab.co.jp/staff/creator/8059.html　<=後で試す　たぶんこれ使ったほうがサイズでかくなる。どうせギャラリーでjqueryつかうし

function nav(onclick) {
switch (onclick.className) {
  case "home":
    console.log("home");
      content.innerHTML =
      "このサイトはえるのりろのポータルサイトです。サイト上のコンテンツの無断複製・転載はご遠慮ください。"+
      "<ul class='setsumei'><li>home -- この場所です</li><li>Gallary -- イラストなどの平面物を置きます</li><li>Game -- ゲームやアプリなどを置きます</li><li>about -- 製作者について</li><li>contact -- 連絡先及びSNS</li></ul>"+"<img src='' alt='' class='home1'>";

      content.setAttribute("id", "home");

      console.log(content);
    break;

    case "gallary":
      console.log("Gallary");
          content.innerHTML ="";
          content.setAttribute("id", "gallary");
          $(function(){
	           $("#gallary").load("parts.html #gallary");
           });
      break;

    case "ather":
        console.log("ather");
          content.setAttribute("id", "ather");
          $(function(){
            $("#game").load("parts.html #game");
          });
        break;

    case "about":
        console.log("about");
          content.setAttribute("id", "about");
          $(function(){
            $("#about").load("parts.html #about");
          });
        break;

    case "contact":
        console.log("contact");
          content.setAttribute("id", "contact");
          $(function(){
            $("#contact").load("parts.html #contact");
          });
        break;

  default:
console.log("error");

}};

$
