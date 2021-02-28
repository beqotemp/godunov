// //menu
document.getElementById('menu-cross').addEventListener("click", ()=>{
    document.getElementById("menu").classList.remove('active')
})
document.getElementById('menu-caller').addEventListener("click",()=>{
    document.getElementById("menu").classList.add('active')
})
// cookies
window.addEventListener("load",()=>{
    setTimeout(()=>{
        document.getElementById("cookies").classList.add("show")
    },2000)    
    document.getElementById("close-cookies").addEventListener("click", ()=>{
        document.getElementById("cookies").classList.remove("show")
    })
})


// modals
document.getElementById("modal-caller").addEventListener('click', ()=>{
    document.getElementById("site").classList.add("overflow")
    document.getElementById("modal").classList.add("active")
})
document.getElementById("modal-close").addEventListener('click', ()=>{
    document.getElementById("site").classList.remove("overflow")
    document.getElementById("modal").classList.remove("active")
})
document.getElementById("modal-bg").addEventListener('click', ()=>{
    document.getElementById("site").classList.remove("overflow")
    document.getElementById("modal").classList.remove("active")
})

// Lock for retards and australian people
screen.orientation.lock();
screen.lockOrientation("orientation");


// let ara = ['a','b','c','c','a','a','d','g','h','j','s','z','x','c','v','b']
// ara.forEach(item =>{
//     console.log(item)

//     // show recurring

//     // show how much times
// })


