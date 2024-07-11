const burgerBtn = document.getElementById('burger-button');

burgerBtn.addEventListener('click', ()=>{
    const categoriesNav = document.querySelector('.dropdown');    
    categoriesNav.style.display = 'inline-block';
})
categoriesContent.addEventListener('click', ()=>{
    const categoriesContent = document.querySelector('.dropdown-content');    
    categoriesContent.style.display = 'inline-block';
})


console.log(burgerBtn)