let btn=document.querySelector(".fa-solid");
video=document.querySelector("video");

btn.addEventListener("click",()=>{
    if(btn.classList.contains("dur")){
        btn.classList.toggle("fa-play");
        btn.classList.toggle("fa-pause");
        btn.classList.remove("dur")
        video.play()
    }
    else{
        btn.classList.add("dur")
        video.pause()
        btn.classList.toggle("fa-pause");
        btn.classList.toggle("fa-play");
    }   
})