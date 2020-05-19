const toggle = () => {
    document.body.classList.toggle('dark')
} 
document.querySelector('#sun').addEventListener('click',toggle)
document.querySelector('#moon').addEventListener('click',toggle)