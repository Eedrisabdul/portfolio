let menu_icon = document.getElementById("menu_icon")
menu_icon.addEventListener("click", function(){
    let nav_bar = document.getElementsByClassName("nav")[0];
    let hamburger = document.getElementById('hamburger')
    nav_bar.classList.toggle("active")
    if(hamburger.classList.contains("fa-bars")){
        hamburger.classList.replace("fa-bars","fa-x")
    } else{
        hamburger.classList.replace("fa-x","fa-bars")
    }
    // console.log(hamburger)

})



let dark=document.getElementsByClassName('moon')[0]
dark.addEventListener('click', function(){
   document.body.classList.toggle('dark_mode')
   let mode = document.getElementById("mode")
   if(mode.classList.contains("fa-moon")){
       mode.classList.replace("fa-moon","fa-sun")
   }else{
       mode.classList.replace("fa-sun","fa-moon")
   }
})

let text = document.getElementsByClassName('desc').innerHTML;
let desc = document.getElementsByClassName('desc')
desc.innerHTML = text.substring(0, 104)
let btn = document.getElementsByClassName('more');

for (let i=0; i < btn.lenght; i++){
    btn[i].addEventListener('click', (e)=> {
    e.preventDefault()
    // if(desc.innerHTML === text.substring(0, 104)) {
    //     desc.innerHTML = text.substring(0)
    //     btn.innerHTML ="Read less"
    // } else {
    //     desc.innerHTML = text.substring(0, 104)
    //     btn.innerHTML ="Learn More"
    // }
    
})}

// let text = document.getElementById('desc').innerHTML;
// let desc = document.getElementById('desc')
// desc.innerHTML = text.substring(0, 104)

// let btn = document.querySelectorAll(".more")()
// btn.addEventListener('click', function(e){
//     e.preventDefault()
//     if(desc.innerHTML === text.substring(0, 104)){
//         desc.innerHTML = text.substring(0)
//         btn.innerHTML = "Read Less"
//     }
//     else{
//         desc.innerHTML = text.substring(0,104)
//         btn.innerHTML = "Learn More"
//     }
// })


// function myFunction() {
//     var element = document.body;
//     element.classList.toggle("dark-mode");
//  }

// let toggle_mode = document.getElementById('toggle_mode')
// toggle_mode.addEventListener('click', function(){
//     b
// let mode = document.getElementsById("toogle")
// mode.addEventListener("click", function(){
//     let body = document.body
//     body.classList.toggle("dack_mode")

// })

// function myFunction() {
//     var body = document.body;
//     body.classList.toggle("dark-mode");
//  }