const form = document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)        // function se value stirng mein aayegi, usse int mein typecast kiya h
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    const guide = document.querySelector("#guide")

    if(height <= 0 || isNaN(height)){
        results.innerHTML = "Please enter a valid height"
    }
    else if(weight <= 0 || isNaN(weight)){
        results.innerHTML = "Kindly enter a valid weight"
    }
    else{
        const BMI = (weight/(height/100)**2).toFixed(2)
        // results.innerHTML = BMI      // works
        results.innerHTML = `<span>${BMI}</span>`

        if(BMI < 18.6){
            guide.innerHTML = 'Under Weight'
            guide.style.color = 'red'
        }
        else if(BMI <= 24.9){
            guide.innerHTML = 'Normal Weight'
            guide.style.color = 'white'
        }
        else{
            guide.innerHTML = 'Overweight'
            guide.style.color = 'orange'
        }
    }    
})