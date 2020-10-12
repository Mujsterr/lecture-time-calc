
window.onload = function (){
    Particles.init({
        selector: '.background',
        connectParticles: 'true',
        sizeVariations: '4',
        speed: '1',
        maxParticles: 200,
        color: ['#C6BDBD','#282424','#865D5D']
    
    }); 

};

function myCalculator(){

    // Parsing Input, used parseFloat() for numspeed to catch the decimals
   
    var numLect = document.getElementById("numLect").value;
        numLect = parseInt(numLect);

    var numHours = document.getElementById("numHours").value;
        numHours = parseInt(numHours);

    var numMin = document.getElementById("numMin").value;
        numMin = parseInt(numMin);

    var numSpeed = document.getElementById("numSpeed").value;
        numSpeed = parseFloat(numSpeed);
    
   
    // Edge cases for when no input has been put in

        if (isNaN(numLect)){
            numLect = 1.0;
        } 

        if (isNaN(numSpeed)){
            numSpeed = 1.0;
        } 
        
        if (isNaN(numMin)){
            numMin = 0;
        }

    // console.log(numLect);
    // console.log(numHours);
    // console.log(numMin);
    // console.log(numSpeed);

    // Performing math on input, calculating total and using it to calculate hours and minutes

     var resultTotal = Math.round((( numHours*60) + 1 * numMin) / numSpeed) * numLect ;
     var resultMin = resultTotal % 60;
     var resultHours = Math.floor(resultTotal/60);

     
     // cases for formatting and outputing error messages

     if(resultMin < 10){
        resultMin = "0" + resultMin;
     }

     if (numSpeed == 0){
        $("#ErrorText").html("Please enter an appropriate playback speed");
     }
     if(isNaN(resultTotal)){
         $("#ErrorText").html("Please enter the amount of hours or minutes");
         $("#output").html("");
     }

     else {
        $("#output").val( resultHours + " Hours " + resultMin + " Minutes");
        $("#ErrorText").html("");

     }

     // Output in Jquery ***should try to do this in vanilla JS to keep a uniform use of language
     // Cases for formatting NaN results in the output                            green = isN and red = isNaN

        if(document.getElementById("ErrorText").innerHTML == "Please enter the amount of hours or minutes"){
            $("#output").css("border", "2px solid orangered");
            $("#output").css("border-radius", "3.5px");
            $("#output").html("");
            $("#watchtime").css("color", "red");
        }

        else if(document.getElementById("output").value == resultHours + " Hours " + resultMin + " Minutes"){
            $("#output").css("border", "2px solid green");
            $("#output").css("border-radius", "3.5px");
            $("#watchtime").css("color", "black");
        }
}

