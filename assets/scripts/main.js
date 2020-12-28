" use strict"

let introElem = document.querySelector(".banner .caption span")
let introText = introElem.innerText
let position = 0;
let time = 300

//  this is the Typing effect function
const typing = ()=>{
 time = ((Math.random()*200) + 150)   
 // delay time
    if(position <= introText.length){
    let intro = introText.slice(0,position)
    introElem.innerHTML = intro;
    position ++ ;   
    setTimeout(typing,time)
    }else{
        setTimeout(typing,3000)
        position = 1;
    }

}
typing();
// ###########################################

//  drop down Feature

let toggleMe = document.querySelector("section.about p i")
let mePicture = document.querySelector("section.about img.me")

toggleMe.addEventListener("click", ()=>{
    if(mePicture.getAttribute("data-url")){
        mePicture.classList.add("show_me_picture")

        mePicture.parentElement.firstElementChild.style.display = "flex"
        url = mePicture.getAttribute("data-url")
        mePicture.setAttribute("src", url)
        // removing attribute so it just toggles the classlist next time its clicked
        mePicture.removeAttribute("data-url")
        mePicture.addEventListener("load", ()=>{
            mePicture.parentElement.firstElementChild.style.display = "none"
        })
    }else{
       mePicture.classList.toggle("show_me_picture")     
    }
//  Learn scroll jvs so that when scrolled past this pic it removes the show_me_picture class
})


prevScrollPos = window.pageYOffset
window.onscroll = function(){
    // scroll display nav 
    if(prevScrollPos < (window.pageYOffset) && window.pageYOffset >300){
        document.querySelector("nav").style.top = "-60px"
        prevScrollPos = window.pageYOffset
    }else{
        document.querySelector("nav").style.top = "0px"
        prevScrollPos = window.pageYOffset
    }
    // check if element is in viewport
   let pos = document.querySelector(".about .me").getBoundingClientRect()
   let ele = document.querySelector(".about .me").pageYOffset
   console.log(pos.width,pos.height , ele)
    
   if(window.pageYOffset > 1000){
        document.querySelector(".backToTop").style.display = "block"
    }else{
        document.querySelector(".backToTop").style.display = "none"
    }
}
//  add typing effect  
// add a drop down in the about section, this will also lazy load the image
// make the nav fixed and display on scroll up
// remember to convert into normal jvs using babel fotr compatibility
