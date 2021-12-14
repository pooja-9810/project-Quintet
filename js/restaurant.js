'use strict';


$(document).ready(function(){
   

    


$('#btn1').click( function() {
    $('#parabt1').css('color', 'white');         
    $('#parabt1').html('thank you for booking.');
    $('#parabt2').html('');
    $('#parabt3').html('');
    $('#parabt4').html('');
    $('#hh2').html('You have booked a reservaion at Nakamura Palace.');
    $('#pp2').html('Enter additional information to comfirm your booking.');
})
$('#btn2').click( function() {
    $('#parabt2').css('color', 'white');         
    $('#parabt2').html('thank you for booking.');
    $('#parabt3').html('');
    $('#parabt4').html('');
    $('#parabt1').html('');
    $('#hh2').html('You have booked a reservaion at Hoftgarten Dinner.');
    $('#pp2').html('Enter additional information to comfirm your booking.');

})
$('#btn3').click( function() {
    $('#parabt3').css('color', 'white');         
    $('#parabt3').html('thank you for booking.');
    $('#parabt4').html('');
    $('#parabt1').html('');
    $('#parabt2').html('');
    $('#hh2').html('You have booked a reservaion at Cheval Blanc.');
    $('#pp2').html('Enter additional information to comfirm your booking.');


})
$('#btn4').click( function() {
    $('#parabt4').css('color', 'white');         
    $('#parabt4').html('thank you for booking.');
    $('#parabt1').html('');
    $('#parabt2').html('');
    $('#parabt3').html('');
    $('#hh2').html('You have booked a reservaion at Remmezo.');
    $('#pp2').html('Enter additional information to comfirm your booking.');


})

$('#comfirm_btn').click( function() {
    let num = $('#no_din').val();
    let time = $('#res_time').val();
    if(num == ''){
        $('#no_din').next().text('Please enter number.');
    }else if( time== ''){
        $('#res_time').next().text('Please enter time.'); 
    }
    
    else  {
        $('#confirmmessage').html('Your reservation for '+num+' people at '+time+' is confirmed.');
    }


})
})
