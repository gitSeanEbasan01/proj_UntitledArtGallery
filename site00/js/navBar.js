const   navcExplore = document.querySelector('.navcExplore'),
        navcAbout = document.querySelector('.navcAbout'),

        navcBackground = document.querySelector('.navCategoryBackground'),
        navNegative = document.querySelector('.navBarNegative'),
        
        navInfo = document.querySelector('.navInfo'),
        navInfoNegative = document.querySelector('.navInfoNegative');

navcExplore.addEventListener('click', clickExplore);
navcAbout.addEventListener('click', clickAbout);

navNegative.addEventListener('click', clickNegative);
navInfoNegative.addEventListener('click', clickNegative);

function clickExplore(){
    navcBackground.classList.add('active');
    navNegative.classList.add('active');

    navInfo.classList.add('active');
    navInfoNegative.classList.add('active');
};
function clickAbout(){
    navcBackground.classList.add('active');
    navNegative.classList.add('active');

    navInfo.classList.add('active');
    navInfoNegative.classList.add('active');
}




function clickNegative(){
    navcBackground.classList.remove('active');
    navNegative.classList.remove('active');
    
    navInfo.classList.remove('active');
    navInfoNegative.classList.remove('active');
};