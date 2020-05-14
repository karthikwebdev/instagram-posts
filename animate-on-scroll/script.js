const sectionInnerElements = document.querySelectorAll("section h2")
document.querySelector('header h1').style.transform = "translate(0)"
document.querySelector('header h1').style.opacity = 1

document.addEventListener("scroll",()=>{
    let scrollPosition = document.documentElement.scrollTop 
    let windowHeight = screen.height

    sectionInnerElements.forEach((element,index) => {
        let elementPosition = element.offsetTop;
        if(scrollPosition > elementPosition-(4*windowHeight/7)){
            element.style.opacity = 1
            element.style.transform = 'translateX(0)'
        }else{
            element.style.opacity = 0
            if(index % 2 == 0){
                element.style.transform = 'translateX(-30vw)'
            }else{
                element.style.transform = 'translateX(30vw)'    
            }
        }
    })
})












