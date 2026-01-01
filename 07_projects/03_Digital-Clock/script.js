const clock = document.querySelector('#clock')


setInterval(function(){
    const date = new Date();
    clock.innerHTML = date.toLocaleTimeString()
},1000)       // syntax, 1000 represents time of refresh in ms

