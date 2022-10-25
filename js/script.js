const getElement = (sele)=>{
    let ele = document.querySelector(sele);
    if(ele) return ele;
    throw Error(
        `${sele} not found`
    )
}

const toggleBtn = getElement('#toggleBtn');
const menu = getElement(".nav-items-container");

toggleBtn.addEventListener('click',()=>{
    menu.classList.toggle('show-links')
})