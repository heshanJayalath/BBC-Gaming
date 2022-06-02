const searchArea = document.querySelector('.search');
const sideNavigationBar = document.querySelector('.side-navigation');
const adBar = document.querySelector('.ad-square');
const closeBtn = document.getElementById('side-nav-close-btn');

searchArea.addEventListener("click", () => {
    if(sideNavigationBar.classList.contains("side-navigation")){
        sideNavigationBar.classList.remove("side-navigation");
        adBar.classList.remove("ad-square");
    }
    sideNavigationBar.classList.add("show-side-navigation");
    adBar.classList.add('move-down-ad-square');
});

closeBtn.addEventListener('click',()=>{
    sideNavigationBar.classList.remove('show-side-navigation');
    sideNavigationBar.classList.add('side-navigation');
    adBar.classList.remove('move-down-ad-square');
    adBar.classList.add('ad-square')
})