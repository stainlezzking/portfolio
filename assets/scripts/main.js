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

class User {
    constructor(name){
        this.name = name
    }
}
//  add typing effect  c
// add a drop down in the about section, this will also lazy load the image
// add drop down in the projects to view built with 
// remember to convert into normal jvs using babel fotr compatibility
