// const burgerBtnElements = document.querySelectorAll('#burger-button, #burger-img');

// for(let i=0; i<burgerBtnElements.length; i++){
//     burgerBtnElements[i].addEventListener('click', ()=>{
//         const categoriesNav = document.querySelector('.dropdown');    
//         categoriesNav.style.display = 'inline-block';
//     })
// }

// const categoriesContent = document.querySelector('.dropdown-content');    
// categoriesContent.addEventListener('click', ()=>{
//     categoriesContent.style.display = 'inline-block';
// })

function burgerMenu(event){
    console.log(event)
    const categoriesNav = document.querySelector('#top-nav');
    const burgerIcon = document.querySelector('#burger-img');

    categoriesNav.classList.toggle('reveal');
    burgerIcon.classList.toggle('burger-close-icon');
    burgerIcon.classList.toggle('burger-icon');

    if ('burger-icon' == burgerIcon.className){
        burgerIcon.src = './assets/images/burger.png'
        burgerIcon.alt = 'burger icon'
    }
    else if ('burger-close-icon' == burgerIcon.className){
        burgerIcon.src = './assets/images/icons8-close-window-50.png'
        burgerIcon.alt = 'burger close icon'
    }
}

// function 

addGlobalEventListener('click', burgerMenu, '#burger-img');
addGlobalEventListener('click', burgerMenu, '#burger-button');

function addGlobalEventListener(typeOfEvent, callback, selector, stopPropagation=true) {
    document.addEventListener(typeOfEvent, (eventObj) => {
        if (eventObj.target.matches(selector)) callback(eventObj);
        if (stopPropagation) eventObj.stopPropagation();
    })
}