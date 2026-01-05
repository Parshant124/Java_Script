const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
const body = document.querySelector('body')
// const color = ['grey','red','yellow','orange','green','blue','brown','black']
// let i =0
let interval;

// start.addEventListener('click',function(e){
//     interval = setInterval(()=>{
//     body.style.backgroundColor = color[i%8]
//     i++
//     },1000)
// })

const randomColor = function(){
    let hex = "0123456789ABCDEF"
    let color = "#"
    for(let i=0; i<6; i++){
        const random = parseInt(Math.random()*16)
        color += hex[random]
    }
    return color
}

function changeColor(){
    const color = randomColor()
    body.style.backgroundColor = color
}

function startInterval(){
    if(!interval)
    interval = setInterval(changeColor,1000)
}
start.addEventListener('click',startInterval)


stop.addEventListener('click',function(e){
    clearTimeout(interval)
    interval = null
})