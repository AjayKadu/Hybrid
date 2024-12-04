function checkValidation(id,divId,errorMessage){

    var refOfId = document.getElementById(id);
    var refOfDivId = document.getElementById(divId);

    if(refOfId.value == ""){
        refOfDivId.innerText = errorMessage;
    }
    else{
        refOfDivId.innerText = "";
        console.log(refOfId.value);
    }
}


function checkValidationAge(id){
 
    var reftoAge = document.getElementById(id);

    if(reftoAge.value != ""){
        
        if(isNaN(reftoAge.value)){
            alert("Only number pls!")
        }
        else{
            
            var age = parseInt(reftoAge.value);

            if(age < 18 || age > 60)
                alert("Invalid age range");
            else{
                console.log(age);
            }
        }

    }
    else{
        alert("Pls! Enter Age");
    }

}





function checkValidationCountry(id){

    var refToCountry = document.getElementById(id);
    console.log("Country code selected is: "+ refToCountry.value);

}

function multipleHobbies(id){

    var refToHobbies = document.getElementById(id);
    var hobbiesArray = new Array();

    for(var i=0; i<refToHobbies.options.length; i++){
        
        var option = refToHobbies.options[i];
        if(option.selected)
            hobbiesArray.push(option.value);

    }
    
    console.log("Hobbies Selected "+ hobbiesArray);
    
}


function genderSelected(name){

    var refToGender = document.getElementsByName(name);

    var genderSelected = false;

    for(var j=0; j<refToGender.length; j++){

       var opt = refToGender[j];

       if(opt.checked){
        genderSelected = true;
        console.log("Gender Selected is" + opt.value);
        break;
       }
    }

    if(genderSelected == false){
        alert("Pls! selecte the Gender");
    }

}