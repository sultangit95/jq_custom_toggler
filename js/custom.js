$(function(){
  // ===== background js starts =====
  $(".spring").click(function(){
    $(".spring-bg").fadeIn().siblings().fadeOut();
  });

  $(".summer").click(function(){
    $(".summer-bg").fadeIn().siblings().fadeOut();
  });

  $(".monsoon").click(function(){
    $(".monsoon-bg").fadeIn().siblings().fadeOut();
  });

  $(".autumn").click(function(){
    $(".autumn-bg").fadeIn().siblings().fadeOut();
  });

  $(".p-winter").click(function(){
    $(".p-winter-bg").fadeIn().siblings().fadeOut();
  });

  $(".winter").click(function(){
    $(".winter-bg").fadeIn().siblings().fadeOut();
  });
  // ===== background js ends =====
  // ===== toggler js starts =====
  $(".toggler").click(function(){
    $(".list").slideToggle(500);
  });
  // ===== toggler js ends =====
});