$(document).ready(function() { 
	$('.ryu').mouseenter(function() {
	/*{
    alert('mouse entered .ryu div');
  }); */
	    $('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	/* 1. $(document).ready(function() {
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  }) 
  .mouseleave(function() {
    alert('mouse left');
  });
}); or 2 
	$('.ryu').mouseleave(function() {
    alert('mouse left .ryu div');
  }); */
	.mouseleave(function() {
	$('.ryu-ready').hide();
	$('.ryu-still').show();
    })

    .mousedown(function() {
    	/* console.log('mousedown')

    }) */
    //play hadouken sound
     playHadouken();
     $('.ryu-ready').hide();
     $('.ryu-throwing').show();	
     $('.hadouken').show().animate(
	  {'left': '1040px'},
		  500,
		  function() {
		    $(this).hide();
		    $(this).css('left', '540px');
	  
	  })
	//);

     
     //$('.hadouken').show();
     //animate hadouken to the right of the screen
    })
     
     .mouseup(function() {
      /*	console.log('mouseup')
     }) */
     
     $('.ryu-throwing').hide();
     $('.ryu-ready').show();
     $('.hadouken').hide();
     })


   
   //$('.ryu').keydown(function() {
   	//alert('x presesd'); 
/*
   	var i = jQuery.Event( 'keydown', { keyCode: 88 } ) ;
   	$( 'body' ).trigger( i );

   	.keypress(function(keydown  i )) {
	    alert('x presesd'); 
$('body').keydown

*/
/*  ('.ryu').keydown(function() {
  alert( "Handler for .keydown() called." );
});  */


$('body').keydown(function(e){
        if(e.keyCode == 88){
            //alert('x has been entered'); }
            $('.ryu-ready').hide();
            $('.ryu-cool').show();
            }
        })

     $('body').keyup(function() {
          	$('.ryu-cool').hide();
            $('.ryu-still').show();
          


/*$(document).ready(function(){
  $("input").keyup(function(){
    $("input").css("background-color","red");
  });
$("input").keydown(function(){
    $("input").css("background-color","green");
  }); */



         // $("input").keyup(function(){
    //$("input").css("background-color","red");
  //});
            

         
            
            




})





function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();

}
 });












	