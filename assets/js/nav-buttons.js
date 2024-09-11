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
        burgerIcon.src = './assets/images/icons8-close-window-50-no-border.png'
        burgerIcon.alt = 'burger close icon'
    }
}

function openCategoriesMenu(event){
    dropdownContent = document.querySelector(".dropdown-content")
    dropdownButton = document.querySelector(".dropbtn")
    dropdownContent.classList.toggle("reveal");
    if(Object.values(dropdownContent.classList).includes("reveal")){
        dropdownButton.innerHTML = "▴"
    }
    else{
        dropdownButton.innerHTML = "▾"
    }
}

addGlobalEventListener('click', burgerMenu, '#burger-img');
addGlobalEventListener('click', burgerMenu, '#burger-button');
addGlobalEventListener('click', openCategoriesMenu, '.dropdown');
addGlobalEventListener('click', openCategoriesMenu, '.dropbtn');

function addGlobalEventListener(typeOfEvent, callback, selector, stopPropagation=true) {
    document.addEventListener(typeOfEvent, (eventObj) => {
        if (eventObj.target.matches(selector)) callback(eventObj);
        if (stopPropagation) eventObj.stopPropagation();
    })
}