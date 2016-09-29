var $choice;
var max;

var color;
var num;
$(document).ready(function(){
  //listens for click on difficulty selector then runs the difficulty based on button clicked
  $('button').click(function(){
    $('#difficulty').remove();
    $('#instructions').remove();

    if ($(this).hasClass('easy')){
      makeEasyMode();

    } else if ($(this).hasClass('intermediate')) {
      makeIntermediate();
    } else {
      makeHardMode();
    }
    //appends dom with chosen color
    choseColor(max);

  })

  $('#game').on('click', 'div', function(){
    if ($(this).hasClass(color)){
      $('#rightorwrong').empty();
      $('#rightorwrong').append('You are correct!');
      changeColor($(this));
      setTimeout(removeColor, 2000, $(this));
      $('#again').append('<button>Again?</button>');

    } else {
      $('#rightorwrong').empty();
      $('#rightorwrong').append('Incorrect, try again.')
    }


})
$('#again').on('click', 'button', function(){
  $('#rightorwrong').empty();
  $('#colorToPick').empty();
  choseColor(max);
  $(this).parent().empty();
})

})
var $red = '<div class="red"></div>';
var $green = '<div class="green"></div>';
var $yellow = '<div class="yellow"></div>';
var $blue = '<div class="blue"></div>';
var $orange = '<div class="orange"></div>';
var $indigo = '<div class="indigo"></div>';
var $purple = '<div class="purple"></div>';
var $pink = '<div class="pink"></div>';
var colorDivs = [$red,$green,$yellow,$blue,$orange,$indigo,$purple,$pink];
//crates easy mode
function makeEasyMode() {
  max = 3;
  var numbersArray = [];

  while (numbersArray.length<4) {
    num = randomNumber(max);
    if (numbersArray.every(check)){
      $('#game').append(colorDivs[num]);
      numbersArray.push(num);
    }
  }
}
//creates intermediate level
function makeIntermediate() {
  max = 5;
  var numbersArray = [];

  while (numbersArray.length<6) {
    num = randomNumber(max);
    if (numbersArray.every(check)){
      $('#game').append(colorDivs[num]);
      numbersArray.push(num);
    }
  }
}
//creates hard mode
function makeHardMode() {
  max = 7;
  var numbersArray = [];

  while (numbersArray.length<8) {
    num = randomNumber(max);
    if (numbersArray.every(check)){
      $('#game').append(colorDivs[num]);
      numbersArray.push(num);
    }
  }
}
//sets color to be the name of the class chosen and appends dom
function choseColor(max){
  var index = randomNumber(max);
  $choice = $('div > div').eq(index);
  console.log($choice);
  color = $choice.attr('class');
  $('#colorToPick').append(color);
}
function randomNumber(max){
    return Math.floor(Math.random() * (1 + max - 0) + 0);
}
function changeColor($object){
  $object.removeClass(color);
  $object.addClass('toggle');
}
function removeColor($object){
  $object.addClass(color);
  $object.removeClass('toggle');
}
function check(value){
  return value != num;
}
