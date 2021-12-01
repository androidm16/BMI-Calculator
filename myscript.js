function calculateBmi() {
    var weight = document.bmiForm.weight.value
    var height = document.bmiForm.height.value
    if(weight > 0 && height > 0){	
    var finalBmi = weight=(height*height)
    document.bmiForm.bmi.value = finalBmi;
    if(finalBmi < 18.5){
    document.bmiForm.meaning.value = "That you are too thin."
    }
    else if(finalBmi > 18.5 && finalBmi < 25){
    document.bmiForm.meaning.value = "That you are healthy."
    }
    else if(finalBmi > 25){
    document.bmiForm.meaning.value = "That you are overweight."
    }
    }
    else{
    alert("Please Fill in everything correctly")
    }
    }