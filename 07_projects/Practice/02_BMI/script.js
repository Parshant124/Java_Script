const form = document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    
    if(height <= 0 || isNaN(height)){
        displayMessage("Kindly enter valid height")
    } else if(weight <= 0 || isNaN(weight)){
        displayMessage("Kindly enter valid weight")
    }  else {
        const BMI = (weight/(height/100)**2).toFixed(2)
        displayMessage(`You have a BMI of ${BMI}`)

        if(BMI < 18.6){
            displayGuide("You are Under Weight")
        }else if(BMI <= 24.9){
            displayGuide("Your weight is in normal range")
        }else if(BMI > 24.9){
            displayGuide("You are Overweight")
        }
    }

    function displayMessage(message){
        document.querySelector('#results').textContent = `${message}`
    }
    function displayGuide(message){
        document.querySelector('#guide').textContent = `${message}`
    }
})