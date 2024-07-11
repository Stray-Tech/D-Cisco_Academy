const burgerBtnElements = document.querySelectorAll('#burger-button, #burger-img');

for(let i=0; i<burgerBtnElements.length; i++){
    burgerBtnElements[i].addEventListener('click', ()=>{
        const categoriesNav = document.querySelector('.dropdown');    
        categoriesNav.style.display = 'inline-block';
    })
}

const categoriesContent = document.querySelector('.dropdown-content');    
categoriesContent.addEventListener('click', ()=>{
    categoriesContent.style.display = 'inline-block';
})


console.log(burgerBtn)