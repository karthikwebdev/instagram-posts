document.addEventListener("scroll",()=>{
    //let scrollPosition = document.body.scrollTop; ---> Safari
    let scrollPosition = document.documentElement.scrollTop 
    let windowHeight = screen.height
    let documentHeight = document.documentElement.scrollHeight

    let indicatorWidth =(scrollPosition / (documentHeight - windowHeight)) * 100
    document.querySelector("#indicator").style.width = `${indicatorWidth}%`
})