//3D scroll

let zSpacing= -1000;
let lastPos=zSpacing/5;
let $frames=document.getElementsByClassName('frame');
let frames=Array.from($frames);
let zVals=[]

window.onscroll=function(){
    let top=document.documentElement.scrollTop;
    let delta=lastPos-top;
    lastPos=top;
    frames.forEach(function(n,i) {
        zVals.push((i*zSpacing)+zSpacing);
        zVals[i]+=delta*-5;
        let frame=frames[i];
        let transform=`translateZ(${zVals[i]}px)`;
        let opacity = zVals[i]<Math.abs(zSpacing)/1.5?1:0;

    frame.setAttribute('style', `transform:${transform}; opacity:${opacity}`)
    })
}

window.scrollTo(0,1)

//audio

let soundButton=document.querySelector('.soundbutton');
let audio=document.querySelector('.audio');
soundButton.addEventListener('click', e=>{
    soundButton.classList.toggle('paused');
    audio.paused ? audio.play() : audio.pause();
})

window.onfocus=function(){
    soundButton.classList.contains('paused') ? audio.pause() : audio.play()
};

window.onblur = function() {
    audio.pause();
}