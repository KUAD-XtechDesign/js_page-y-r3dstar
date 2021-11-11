$(function(){

  $("#intro p").hide().fadeIn(1000)
  //setTimeout(introAnime,2000);//2秒経った時にintroAnimeを実行
  $("#intro").on("click",introAnime)//クリックしたらintroAnimeを実行

  function introAnime(){//jqueryでフェードアウト、終わったらcontentAnime実行
    $("#intro").fadeOut(1000,contentAnime);
  }

  function contentAnime(){
    setTimeout(backAnime,300);//0.3秒後backAnime実行
    setTimeout(overAnime,2000);//2秒後personAnime実行
    setTimeout(battleAnime,2000);//2秒後carAnime実行
    setTimeout(logoAnime,2800);//3秒後foodAnime実行
    setTimeout(startAnime,2800);
  }
  
  //以下のアニメはCSSでやってみる
  //ここではanimeクラスつけるだけ
  function backAnime(){
    $("#back").addClass("anime")
  }

  function overAnime(){
    $("#over").addClass("anime")
  }

  function battleAnime(){
    $("#battle").addClass("anime")
  }

  function logoAnime(){
    $("#logo").addClass("anime")
  }

  function startAnime(){
    $("#start").addClass("anime")
  }
})