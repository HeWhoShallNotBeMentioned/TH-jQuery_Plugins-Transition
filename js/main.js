$(".animsition").animsition({
  inClass: 'fade-in-up-lg',
  outClass: 'flip-out-x',
  linkElement: 'header a',
  inDuration: 1000,
  outDuration: 600
});

$('.header').sticky();

 $('.header').on('sticky-start', function() {
  $('.description').html('We build <strong>great</strong> apps.');
 });

 $('.header').on('sticky-end', function() {
  $('.description').html('We build apps.');
 });
