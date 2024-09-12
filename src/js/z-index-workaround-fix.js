// workaround to hide search icon with dropdown menu open
let dropdown = document.querySelector('.dropdown'),
dropdownChildren = dropdown.children,
searchIcon = document.querySelector('.search-icon-wrapper')
function isOnTop() {
    return [...dropdownChildren].some(div =>
        div.getBoundingClientRect().left > (searchIcon.getBoundingClientRect().right+140)
    );
}
document.querySelector('.dropdown').addEventListener('mouseover', ()=>{
    if(!isOnTop()){
        searchIcon.style.display = 'none'
        
        for(let i=0; i < dropdownChildren.length; i++){
            if(!isOnTop()){
                dropdownChildren[i].addEventListener('mouseover', ()=>{
                    searchIcon.style.display = 'none'
                })
            }
            dropdownChildren[i].addEventListener('mouseout', ()=>{
                searchIcon.style.display = 'flex'
            })
        }
    }
})
document.querySelector('.dropdown').addEventListener('mouseout', ()=>{
    searchIcon.style.display = 'flex'
})