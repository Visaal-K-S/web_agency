const bar = document.getElementById("bars");
const times = document.getElementById("nav_close");
const links = document.getElementById("nav_links")
links.style.left = "-100%";
bar.addEventListener("click", ()=>{
    bar.style.transform = "rotate(180deg)";
    links.style.left = "0";
    setTimeout(function(){
        bar.style.display="none";
        times.style.display = "initial";
        times.style.transform = 'rotate(0deg)';
    },200);
})

times.addEventListener("click", ()=>{
    times.style.transform = "rotate(180deg)";
    links.style.left = "-100%";
    setTimeout(function(){
        times.style.display="none";
        bar.style.display = "initial";
        bar.style.transform = 'rotate(0deg)';
    },200);
})

