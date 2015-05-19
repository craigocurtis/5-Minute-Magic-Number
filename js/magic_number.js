// JavaScript Template

console.log("JavaScript Template loaded");

$(document).ready(function(){
	var $body = $('body');
	$body.css('background-color','black');
	/*
	var $welcome = $('#welcome');
	$welcome.hide().show("slow");
	$welcome.css('color','#F0F0F0');
	*/
	/* Global variable scope */
	var $value1 = "";
	var $btn1 = $('#btn1');

	$('#input1').on('keyup', function(){
		$value1 = $('#input1').val();
		$value1 = parseInt($value1);
		console.log($value1);
	});


	$('#btn').click(function(){		
		console.log("Clicked");
		var $random_number = Math.ceil(Math.random() * $value1);
		var $number1 = $('#number1');
		$btn1.html("Out of " + $value1);
		
		$number1.hide('fast');
		$('#number1').html($random_number);
		$('#number1').css('color','royalblue');
		$number1.show('slow');
		/*.css('background-color','white');*/
	});
	$('#btn2').click(function(){
		var $random_number2 = Math.ceil(Math.random() * 30);
		var $number2 = $('#number2');
		$number2.hide('slow');

		$('#number2').html($random_number2);
		$('#number2').css('color','tomato');
		$number2.show('fast');
		/*.css('background-color','white');*/
	});

	$('#btn3').click(function(){
		var $random_number3 = Math.ceil(Math.random() * 30);
		var $number3 = $('#number3');
		$number3.hide('fast');

		$('#number3').html($random_number3);
		$('#number3').css('color','chartreuse');
		$number3.show('fast');
		/*.css('background-color','white');*/
	});

});
