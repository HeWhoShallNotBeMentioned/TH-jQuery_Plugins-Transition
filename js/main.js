$(".animsition").animsition({
  inClass: 'fade-in-up-lg',
  outClass: 'flip-out-x',
  linkElement: 'header a',
  inDuration: 1000,
  outDuration: 600
});

$('.header').sticky();
$('#work').sticky({
  topSpacing: 64,
  getWidthFrom: '.container',
  responsiveWidth: true
});

 $('.header').on('sticky-start', function() {
  $('.description').html('We build <strong>great</strong> apps.');
 });

 $('.header').on('sticky-end', function() {
  $('.description').html('We build apps.');
 });

 $('#work').on('sticky-start', function() {
   $('#work').append("<span class='email'><a href='mailto:webmaster@example.com'>  EMail Us </a></span>");
 });

 $('#work').on('sticky-end', function() {
   $(".email").remove();
 });

 $(".slides").slick({
   fade: true,
   autoplay: true,
   autoplaySpeed: 1800,
   arrows: false,
   dots: true
 });

 $(".teamSlides").slick({
   autoplay: true,
   autoplaySpeed: 3000,
   dots: true,
   slidesToShow: 4,
   slidesToScroll: 4
 });
