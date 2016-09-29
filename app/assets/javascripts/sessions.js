// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function(){

	$(".wrapper").on("click", ".register-form" , function(event){
		event.preventDefault();
		var request = $.ajax({
      url: "/parents/new",
      method: "GET",
    });

    request.done(function (response) {
   
      $(".register-form").remove();
      $(".login-button").remove();
      $(".form-signin-heading").after(response)
    });
	});


		$(".wrapper").on("click", ".login-button" , function(event){
		event.preventDefault();
		var request = $.ajax({
      url: "/login",
      method: "GET",
    });

    request.done(function (response) {
    	$(".register-button").remove();
      $(".login-button").remove();
      $(".middle").append(response)
    });
	});





});