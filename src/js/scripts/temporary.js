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
document.getElementById("modal-close").addEventListener('click', ()=>{
    document.getElementById("site").classList.remove("overflow")
    document.getElementById("modal").className = '';
})
document.getElementById("special-modal-close").addEventListener('click', ()=>{
    document.getElementById("site").classList.remove("overflow")
    document.getElementById("special-modal").className = '';
})
// Portfolios 
let fullProjectName = ['Технокультура', 'Eventoutlet', 'Rocket Shina','ПСК','Balkan LPG Market','Hamcore']
let PortfolioClasses = ['techno','event','rocket','psk','balcan','hamcore']
let modal = document.getElementById("modal")
document.querySelectorAll('.case').forEach((item)=>{
    
    item.addEventListener("click",(event)=>{
        event.preventDefault()
        modal.classList.add('active')
        modal.classList.add( PortfolioClasses[item.dataset.number])
        document.getElementById("site").classList.add("overflow")
        document.getElementById("project-name-modal").innerHTML = fullProjectName[item.dataset.number]
    })
})

let articClasses = [
    'what-know-art', 
    'philosophy-art', 
    'four-hell-circles-art',
    'why-tilda-art',
    'how-much-art',
    'micro-interface-art',
    'dark-patternt-art',
    'harizmatic-art',
    'balkan-conf-art',
    'eventoutleet-art'
]

document.querySelectorAll('.article-cart').forEach((item)=>{
    item.addEventListener("click", (event)=>{
        event.preventDefault()
        modal.classList.add('active')
        modal.classList.add('headless')
        document.getElementById("site").classList.add("overflow")
        modal.classList.add( articClasses[item.dataset.number])
    })
})
function showOffer() {
    setTimeout(()=>{
        document.getElementById("special-modal").classList.add("active")
        document.getElementById("site").classList.add("overflow")
    },30000)
}

if(window.location.href.indexOf("why-tilda") > -1) {
    modal.classList.add('active')
    modal.classList.add('headless')
    document.getElementById("site").classList.add("overflow")
    modal.classList.add( articClasses[3])
    showOffer();
 }
 if(window.location.href.indexOf("how-much") > -1) {
    modal.classList.add('active')
    modal.classList.add('headless')
    document.getElementById("site").classList.add("overflow")
    modal.classList.add( articClasses[4])
    showOffer();
 }
 if(window.location.href.indexOf("what-know") > -1) {
    modal.classList.add('active')
    modal.classList.add('headless')
    document.getElementById("site").classList.add("overflow")
    modal.classList.add( articClasses[0])
    showOffer();
 }

 


 