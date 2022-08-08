// hamburger menu
function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}
// turn the hamburger into an X
$('#click_advance').click(function() {
  $('#display_advance').toggle('1000');
  $("i", this).toggleClass("fas fa-bars fas fa-x");
});
