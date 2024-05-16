document.addEventListener('DOMContentLoaded', function(){
    const button = document.getElementById('button')
    const element = document.getElementById(('element'))

    button.addEventListener('click', function(){

        const color = '#'+ Math.floor(Math.random()*16777215).toString(16)
        element.style.backgroundColor = color;
    })
})