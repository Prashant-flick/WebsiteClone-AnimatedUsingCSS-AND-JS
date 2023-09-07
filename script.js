// --------------------cursor-movement------------------------//
const crsr = document.querySelector("#cursor");
const crsrblur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x - 10 +"px";
    crsr.style.top = dets.y - 10 +"px";
    crsrblur.style.left = dets.x - 200 +"px";
    crsrblur.style.top = dets.y - 200 +"px";
})

gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.7,
    height: "90px",
    scrollTrigger:{
        trigger: "#nav",
        scroll: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger:{
        trigger: "#main",
        scroll: "body",
        // markers: true,
        start: "top -30%",
        end: "top -80%",
        scrub: 1,
    }
})

gsap.from("#about-us img, #about-us-in",{
    y: 50,
    opacity: 0,
    duration: 4,
    scrollTrigger:{
        trigger: "#about-us",
        scroller: "body",
        // markers: true,
        start: "top 55%",
        end: "top 52%",
        scrub: 1,
    }
})

gsap.from(".about-nextpage-section",{
    scale: 0.8,
    opacity: 0,
    duration: 1,
    scrollTrigger:{
        trigger: ".about-nextpage-section",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 68%",
        scrub: 1,
    }
})

gsap.from("#quote-left",{
    y: -60,
    x: -40,
    duration: 1,
    scrollTrigger:{
        trigger: "#quote-left",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 50%",
        scrub: 2,
    }
})

gsap.from("#quote-right",{
    y: 60,
    x: 40,
    duration: 3,
    tranition: 0.5,
    scrollTrigger:{
        trigger: "#quote-left",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 60%",
        scrub: 2,
    }
})

document.querySelectorAll('#nav h4')
.forEach(elem => {
    elem.addEventListener("mouseenter", function(){
        // crsr.classList.replace("cursor-hover", "cursor")
        elem.style.transition = "all ease 0.6s"
        crsr.style.scale = 3
        crsr.style.backgroundColor = "transparent"
        crsr.style.border = "0.1px solid #95C11E"
    })
    elem.addEventListener("mouseleave", function(){
        // crsr.classList.replace("cursor-hover", "cursor")
        crsr.style.scale = 1
        crsr.style.backgroundColor = "#95C11E"
        crsr.style.border = "none"
    })
})

document.querySelectorAll('#footer h3')
.forEach(elem => {
    elem.addEventListener("mouseenter", function(){
        // crsr.classList.replace("cursor-hover", "cursor")
        elem.style.transition = "all ease 0.6s"
        elem.style.color = "white";
        crsr.style.scale = 3
        crsr.style.backgroundColor = "transparent"
        crsr.style.border = "0.1px solid white"
    })
    elem.addEventListener("mouseleave", function(){
        // crsr.classList.replace("cursor-hover", "cursor")
        elem.style.color = "black";
        crsr.style.scale = 1
        crsr.style.backgroundColor = "#95C11E"
        crsr.style.border = "none"
    })
})



