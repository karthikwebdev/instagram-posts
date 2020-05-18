const toggleModal = () => {
    document.querySelector('.modal').classList.toggle('open')
    document.querySelector('.overlay').classList.toggle('open')
}

document.querySelector('.btn#modal_trigger').addEventListener('click',toggleModal)
document.querySelector('.btn#close_modal').addEventListener('click',toggleModal)
document.querySelector('.overlay').addEventListener('click',toggleModal)