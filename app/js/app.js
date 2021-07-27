var $start_value = 0;
var $set_startValue = 0;
var $second_value = 0;
var $set_secondValue = 0;
var $result_value = 0;
var $last_cal = "";
var $screen_output;

//comma adding each 3 digits
var pattern = /(\d)(?=(\d\d\d)+(?!\d))/g;
var repl = "\$1,";

// var addString = [];
// var i = 0;

//event when clicking zahl button
$('.zahl').click(function(){
    var addValue;
    $screen_output = $('.screen__output').val();

    if($screen_output == "0"){
        $screen_output = "";
    }

    if($set_startValue == 1) {
        if($set_secondValue == 0){
            $screen_output = "";
        }
        addValue = $(this).val();
        $screen_output += addValue;
        //$screen_output = $screen_output.replace(pattern,repl);
        $('.screen__output').val($screen_output);
        $second_value = $('.screen__output').val();
        //alert('sc' + $second_value);
        $set_secondValue = 1;
    }
    
    else {
        addValue = $(this).val();
        // addString[i] = addValue;
        $screen_output += addValue;
        // i++;
        //$screen_output = $screen_output.replace(pattern,repl);
        $('.screen__output').val($screen_output);
        $start_value = $('.screen__output').val();
        //alert($start_value);
    }
    
    
});


//event when clicking delete button
$('.key__delete').click(function(){
    $screen_output = $('.screen__output').val();

    //delete last character in string
    $screen_output = $screen_output.slice(0,-1);
    //i--;
    $('.screen__output').val($screen_output);

    //add value outputscreen into start_value
    if($set_startValue == 0) {
        $start_value = $('.screen__output').val();
    }
    else {
        $second_value = $('.screen__output').val();
    }
});


//event when clicking calculation button + - x /
$('.calculate').click(function(){
    if($last_cal == ""){
        if(isNaN($start_value)){
            $('.screen__output').val("Math-Error");
            $set_startValue = 0;
        }
        else {
            $set_startValue = 1;
            $last_cal = $(this).val();
        }
    }
    else {
        if(isNaN($start_value)){
            $('.screen__output').val("Math-Error");
            $set_startValue = 0;
        }
        else {
            $set_startValue = 1;
            if($set_secondValue == 1){
                if(isNaN($second_value)){
                    $('.screen__output').val("Math-Error");
                    $set_secondValue = 0;
                }
                else {
                    if($last_cal == "+") {
                        $result_value = parseFloat($start_value) + parseFloat($second_value);
                        $result_value = Math.round($result_value*10000)/10000;
                        $('.screen__output').val($result_value);
                        //set start value as result value to calculate again
                        $start_value = $result_value;
                        $set_secondValue = 0;
                        $last_cal = $(this).val();
                    }
        
                    else if($last_cal == "-") {
                        $result_value = parseFloat($start_value) - parseFloat($second_value);
                        $result_value = Math.round($result_value*10000)/10000;
                        $('.screen__output').val($result_value);
                        //set start value as result value to calculate again
                        $start_value = $result_value;
                        $set_secondValue = 0;
                        $last_cal = $(this).val();
                    }
        
                    else if($last_cal == "x") {
                        $result_value = parseFloat($start_value) * parseFloat($second_value);
                        $result_value = Math.round($result_value*10000)/10000;
                        $('.screen__output').val($result_value);
                        //set start value as result value to calculate again
                        $start_value = $result_value;
                        $set_secondValue = 0;
                        $last_cal = $(this).val();
                    }
        
                    else if($last_cal == "/") {
                        if($second_value == "0") {
                            $('.screen__output').val("Math-Error");
                            $set_secondValue = 0;
                        }
                        else {
                            $result_value = parseFloat($start_value) / parseFloat($second_value);
                            $result_value = Math.round($result_value*10000)/10000;
                            $('.screen__output').val($result_value);
                            //set start value as result value to calculate again
                            $start_value = $result_value;
                            $set_secondValue = 0;
                            $last_cal = $(this).val();
                        }
                    }
                    
                }
            }
        }    
    }
    
});

//event when click equal button
$('.key__equal').click(function(){
    if($set_startValue == 1 && $set_secondValue == 1 && $last_cal != ""){
        if($last_cal == "+") {
            $result_value = parseFloat($start_value) + parseFloat($second_value);
            $result_value = Math.round($result_value*10000)/10000;
            $('.screen__output').val($result_value);
            //set start value as result value to calculate again
            $start_value = $result_value;
            $set_secondValue = 0;
            $last_cal = $(this).val();
        }
    
        else if($last_cal == "-") {
            $result_value = parseFloat($start_value) - parseFloat($second_value);
            $result_value = Math.round($result_value*10000)/10000;
            $('.screen__output').val($result_value);
            //set start value as result value to calculate again
            $start_value = $result_value;
            $set_secondValue = 0;
            $last_cal = $(this).val();
        }
    
        else if($last_cal == "x") {
            $result_value = parseFloat($start_value) * parseFloat($second_value);
            $result_value = Math.round($result_value*10000)/10000;
            $('.screen__output').val($result_value);
            //set start value as result value to calculate again
            $start_value = $result_value;
            $set_secondValue = 0;
            $last_cal = $(this).val();
        }
    
        else if($last_cal == "/") {
            if($second_value == "0") {
                $('.screen__output').val("Math-Error");
                $set_secondValue = 0;
            }
            else {
                $result_value = parseFloat($start_value) / parseFloat($second_value);
                $result_value = Math.round($result_value*10000)/10000;
                $('.screen__output').val($result_value);
                //set start value as result value to calculate again
                $start_value = $result_value;
                $set_secondValue = 0;
                $last_cal = $(this).val();
            }
        }
    }
});

//event when click reset button
$('.key__reset').click(function(){
    $start_value = 0;
    $set_startValue = 0;
    $second_value = 0;
    $set_secondValue = 0;
    $result_value = 0;
    $last_cal = "";
    $('.screen__output').val('0');
});


 /** event für theme changing */
var $theme_baseLevel = 1;
var $theme_nextLevel = 1;
    //level zahl click
    $('.theme__level').click(function(){
        $theme_nextLevel = parseInt($(this).html());
        var translateX = ($theme_nextLevel - $theme_baseLevel) * 24;
        $('.toggle').css('transform','translateX('+translateX+'px)');7
        //remove curent theme and add next theme to every elements on page
        $('*').removeClass('theme1 theme2 theme3').addClass('theme'+$theme_nextLevel+'');
    });

    $('.level__barToggle').click(function(){
        if($theme_nextLevel >= 3){
            $theme_nextLevel = 0;
        }
        $theme_nextLevel = $theme_nextLevel + 1;
        var translateX = ($theme_nextLevel - $theme_baseLevel) * 24;
        $('.toggle').css('transform','translateX('+translateX+'px)');
        //remove curent theme and add next theme to every elements on page
        $('*').removeClass('theme1 theme2 theme3').addClass('theme'+$theme_nextLevel+''); 
    });


//add class theme1 to every elements on page
$(document).ready(function(){
    $('*').addClass('theme1');
});
    

