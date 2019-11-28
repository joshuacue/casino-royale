var $inner = $('.inner'),
  spinBoard = $('#spin'),
  newGame = $('#reset'),
  $data = $('.data'),
  $mask = $('.mask'),
  //maskDefault = 'Place Your Bets',
  timer = 9000;

var red = [32, 19, 21, 25, 34, 27, 36, 30, 23, 5, 16, 1, 14, 9, 18, 7, 12, 3];

newGame.hide();

$mask.text(/*maskDefault*/'');

spinBoard.on('click', function () {

  // number logic
  var randomNumber = Math.floor(Math.random() * 36),
    color = null;
  $inner.attr('data-spinto', randomNumber).find('li:nth-child(' + randomNumber + ') input').prop('checked', 'checked');
  // prevent repeated clicks on the spin button by hiding it
  $(this).hide();
  // disabled the reset button until the ball has stopped spinning
  newGame.addClass('disabled').prop('disabled', 'disabled').show();

  $('.placeholder').remove();
  $('.board').addClass('one');
  $('.data').addClass('oner');
  var speed = 30;s
  var distance = 0;
  var decelerate = 35;
  var s = setInterval(function(){
    decelerate = (decelerate - 0.1);
    distance = 100+((decelerate)*speed*1.1);
    speed =speed-0.18;
  if(speed<-15){
    speed=-15;
  }
    $('.data').css({'transform': 'rotate('+ distance+'deg)'});
    $('.board').css({'transform': 'rotate('+ distance*(-1)+'deg)'});
    if(decelerate<11)
    clearInterval(s);
  },decelerate-0.1);





  setTimeout(function () {
  }, timer / 2);

  setTimeout(function () {
  }, timer + 500);



  setTimeout(function () {
    newGame.removeClass('disabled').prop('disabled', '');

    if ($.inArray(randomNumber, red) !== -1) {
      color = 'red'
    } else {
      color = 'black'
    };
    if (randomNumber == 0) {
      color = 'green'
    };

    $('.result-number').text(randomNumber);
    $data.addClass('reveal');
    $inner.addClass('rest');
     
    var isEven = randomNumber%2?' ODD':' EVEN';
    $thisResult = '<li class="previous-result color-' + color + '"><span class="previous-number">' + randomNumber +' :'+isEven+'</span><span class="previous-color">' + color.toUpperCase() + '</span></li>';

    $('.previous-list').prepend($thisResult);


  }, timer);

});


newGame.on('click', function () {
  $inner.attr('data-spinto', '').removeClass('rest');
  $(this).hide();
  spinBoard.show();
  $data.removeClass('reveal');
});

var myElement = document.getElementById('board');
$(myElement).on("click", function (ev) {
  if (!newGame.hasClass('disabled')) {
    if (spinBoard.is(':visible')) {
      spinBoard.click();
    } else {
      newGame.click();
    }
  }
});