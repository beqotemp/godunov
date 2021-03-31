// //menu
document.getElementById('menu-cross').addEventListener("click", ()=>{
    document.getElementById("menu").classList.remove('active')
})
document.getElementById('menu-caller').addEventListener("click",()=>{
    document.getElementById("menu").classList.add('active')
})
// cookies
// window.addEventListener("load",()=>{
//     setTimeout(()=>{
//         document.getElementById("cookies").classList.add("show")
//     },2000)    
//     document.getElementById("close-cookies").addEventListener("click", ()=>{
//         document.getElementById("cookies").classList.remove("show")
//     })
// })


// modals
document.getElementById("modal-caller").addEventListener('click', ()=>{
    document.getElementById("site").classList.add("overflow")
    document.getElementById("modal").classList.add("active")
})
document.getElementById("modal-close").addEventListener('click', ()=>{
    document.getElementById("site").classList.remove("overflow")
    document.getElementById("modal").className = '';
})
// document.getElementById("modal-bg").addEventListener('click', ()=>{
//     document.getElementById("site").classList.remove("overflow")
//     document.getElementById("modal").classList.remove("active")
//     enable()
// })

// Portfolios 
let PortfolioClasses = ['techno','event','rocket','psk','balcan','hamcore']
let modal = document.getElementById("modal")
document.querySelectorAll('.case').forEach((item,event)=>{
    
    item.addEventListener("click",(event)=>{
        event.preventDefault()
        modal.classList.add('active')
        modal.classList.add( PortfolioClasses[item.dataset.number])
        document.getElementById("site").classList.add("overflow")
        
    })
})




