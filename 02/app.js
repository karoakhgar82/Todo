const addform = document.querySelector('.add')
const todos = document.querySelector('.todos')
const search = document.querySelector('.search input')
const mainsearch = document.querySelector('.search')


addform.addEventListener('submit', e =>{
    e.preventDefault()
    const generate = todo => {
        const html =`<li class="list-group-item d-flex justify-content-between alighn-item-center">
        <span>${todo}</span>
        <i class="fa fa-trash-o delete" ></i>
        </li>`
        todos.innerHTML += html
    }
    const newcontent =  addform.add.value.trim()
    if(newcontent.length){
        generate(newcontent)
        addform.reset() 
    }    
});


todos.addEventListener('click', e =>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove()
    }
})


const filtertodos = (term) => {
    Array.from(todos.children).filter((todo) => !todo.textContent.includes(term)).forEach((todo) => todo.classList.add('filtered') )


    Array.from(todos.children).filter((todo) => todo.textContent.includes(term)).forEach((todo) => todo.classList.remove('filtered') )
}

mainsearch.addEventListener('submit', e =>{
    e.preventDefault()
});
search.addEventListener('keyup', e =>{
    e.preventDefault()
    const term = search.value.trim()
    filtertodos(term)
});