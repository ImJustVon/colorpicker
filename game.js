var $choice;
var max;
var min = 0;
var color;
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
    choseColor(min,max);

  })

  $('#game').on('click', 'td', function(){
    if ($(this).hasClass(color)){
      $('#rightorwrong').empty();
      $('#rightorwrong').append('You are correct!');
      $('#again').append('<button>Again?</button>');

    } else {
      $('#rightorwrong').empty();
      $('#rightorwrong').append('Incorrect, try again.')
    }


})
$('#again').on('click', 'button', function(){
  $('#rightorwrong').empty();
  $('#colorToPick').empty();
  choseColor(min,max);
  $(this).parent().empty();
})

})
//crates easy mode
function makeEasyMode() {
  var $game = $('<tr></tr>');
  $game = $game.append('<td class="red"></td>');
  $game = $game.append('<td class="green"></td>');
  $game = $game.append('<td class="yellow"></td>');
  $game = $game.append('<td class="blue"></td>');
  $('#game').append($game);
  max = 3;
}
//creates intermediate level
function makeIntermediate() {
  var $game = $('<tr></tr>');
  $game = $game.append('<td class="red"></td>');
  $game = $game.append('<td class="green"></td>');
  $game = $game.append('<td class="yellow"></td>');
  $game = $game.append('<td class="blue"></td>');
  $game = $game.append('<td class="orange"></td>');
  $game = $game.append('<td class="indigo"></td>');
  $('#game').append($game);
  max = 5;
}
//creates hard mode
function makeHardMode() {
  var $game = $('<tr></tr>');
  $game = $game.append('<td class="red"></td>');
  $game = $game.append('<td class="green"></td>');
  $game = $game.append('<td class="yellow"></td>');
  $game = $game.append('<td class="blue"></td>');
  $game = $game.append('<td class="orange"></td>');
  $game = $game.append('<td class="indigo"></td>');
  $game = $game.append('<td class="purple"></td>');
  $game = $game.append('<td class="pink"></td>');
  $('#game').append($game);
  max = 7;
}
//sets color to be the name of the class chosen and appends dom
function choseColor(min,max){
  var index = randomNumber(min, max);
  $choice = $('td').eq(index);
  color = $choice.attr('class');
  $('#colorToPick').append(color);
}
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
