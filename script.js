//counter

var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();


  var distance = countDownDate - now;


  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

 
  document.querySelector(".counter-time").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById(".counter-time").innerHTML = "EXPIRED";
  }
}, 1000);



//counter




$(function(){
var galleryimages=$(".image-block").find("img").first()
    var images=[
        "slide_show/img6.png",
        "slide_show/img1.png",
        "slide_show/img2.png",
        "slide_show/img3.png",
        "slide_show/img4.png",
        "slide_show/img5.png"
        
    ]
   
    var i=0;
    setInterval(function(){
        i=(i+1) % images.length;
        galleryimages.fadeOut(function(){
            $(this).attr("src",images[i])
             $(this).fadeIn()
            
        })
        
    },1500)
        
        
        
        })