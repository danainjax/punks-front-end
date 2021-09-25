class Modal {
    constuctor(){
        this.addCloseEventListener()
    }

get modal(){
    return document.querySelector('#myModal')
}

get main() {
    return document.querySelector('#modal-main')
}

open = () => {
    this.modal.style.display = "block"
}

close = () => {
    this.modal.style.display = "none"
}

addCloseEventListener = () => {
    
    this.modal.addEventListener('click', (e) => {
        if(e.target.classList.contains('close') || e.target.id === "myModal") {
            modal.main.innerHTML = ""
            this.close()
        }
    })
}

}