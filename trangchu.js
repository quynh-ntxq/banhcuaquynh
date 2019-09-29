// alert("Đây là trang của Quỳnh");
function CachLam() {
    alert("Đã ấn vào")
}
document.getElementById("tieude").addEventListener("click", CachLam);
document.querySelector(".click1").addEventListener("click", function () {
    var mota = document.querySelector(".mota");
    mota.style.display = "block";
    document.querySelector(".baogia").style.display = "none";
    document.querySelector(".cachlam").style.display = "none";
});
document.querySelector(".click2").addEventListener("click", function () {
    var baogia = document.querySelector(".baogia");
    baogia.style.display = "block";
    document.querySelector(".mota").style.display = "none";
    document.querySelector(".cachlam").style.display = "none";
});
document.querySelector(".click3").addEventListener("click", function () {
    document.querySelector(".baogia").style.display = "none";
    document.querySelector(".mota").style.display = "none";
    document.querySelector(".cachlam").style.display = "block";
});
$(function() {  
  $(".slider-for").slick({
    centerMode: true,
    centerPadding:'60px',
    slidesToShow: 1,
    slidesToScroll:1,
    
arrows:false,
fade: true,

asNavFor:'.slider-nav',

variableWidth: false,

    dots: false,
  infinite: true,
  
  
  adaptiveHeight:false,


  })
  $(".slider-nav").slick({
    dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  centerMode: true,
  variableWidth: false,
  slidesToScroll:1,
  centerPadding:'60px',
  asNavFor:'.slider-for',
  adaptiveHeight:false,
  focusOnSelect:true 
  })
})

                  