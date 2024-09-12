function burgerMenu(event){
    console.log(event)
    const categoriesNav = document.querySelector('#top-nav');
    const burgerIcon = document.querySelector('#burger-img');

    categoriesNav.classList.toggle('hidden');
    burgerIcon.classList.toggle('burger-close-icon');
    burgerIcon.classList.toggle('burger-icon');

    if (burgerIcon.className.includes('burger-icon')){
        burgerIcon.src = './public/images/burger.png'
        burgerIcon.alt = 'burger icon'
    }
    else if (burgerIcon.className.includes('burger-close-icon')){
        burgerIcon.src = './public/images/icons8-close-window-50-no-border.png'
        burgerIcon.alt = 'burger close icon'
    }
}

function openCategoriesMenu(event){
    dropdownContent = document.querySelector(".dropdown-content")
    dropdownButton = document.querySelector(".dropbtn")
    dropdownContent.classList.toggle("hidden");
    if(!dropdownContent.className.includes("hidden")){
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