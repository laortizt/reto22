const contents = document.querySelectorAll('content')//se agrega content
const listItems = document.querySelectorAll('nav ul li')// se agrega nav ul li

listItems.forEach((item, idx) => {
    item.addEventListener('click', () => { //se agrega click
        hideAllContents()//SE AGREGA
        hideAllItems()//SE AGREGA

        item.classList.add('active') //se agrega active
        contents[idx].classList.add('show')//aqui
    })
})

function hideAllContents() {
    contents.forEach(content => content.classList.remove('show'))
}


function hideAllItems() {
    listItems.forEach(item => item.classList.remove('active'))
}

