
const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );

function insertValue(value) {
    result.value += value;
  }
  
  function clearResult() {
    result.value = '';
  }
  
  function backspace() {
    result.value = result.value.slice(0, -1);
  }
  
  function calculate() {
    let expression = result.value;
    let answer = eval(expression);
    result.value = answer;
  }

  //this is wer give kelvin const with the number 293
const kelvin = 0;
//i sub Celsius from kelvin
const celsius = kelvin-273;
//i write a code that read on fahrenheit furmular the part is were all convertion heppen
let fahrenheit = celsius * (9 / 5) + 32;
//.floor() to round down the fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);
console.log(`the temperature is ${fahrenheit}
degrees fahrenheit.`)

$(function(){
  $("p").click (function(){
    $(this).hide();
  });
});