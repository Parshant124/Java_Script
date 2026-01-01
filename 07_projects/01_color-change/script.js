const buttons = document.querySelectorAll(".button")  // Selecting all elements with class button
const body = document.querySelector("body")           // Selecting the body, so we can change the color

buttons.forEach( (button) => {
    button.addEventListener('click', function(e){
        // general one-liner code
        // body.style.backgroundColor = e.target.id
        
        // switch-case approach

        switch(e.target.id){
            case "grey" :
                body.style.backgroundColor = 'grey'
                break;
            case 'white':
                body.style.backgroundColor = 'white'
                break;
            case 'blue':
                body.style.backgroundColor = 'blue'
                break;
            case 'yellow':
                body.style.backgroundColor = 'yellow'
                break;
            default:
                break;
        }
    })
})
