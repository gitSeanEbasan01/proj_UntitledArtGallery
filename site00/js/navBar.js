const   navcExplore = document.querySelector('.navcExplore'),
        navcAbout = document.querySelector('.navcAbout'),

        navcBackground = document.querySelector('.navCategoryBackground'),
        navNegative = document.querySelector('.navBarNegative');

navcExplore.addEventListener('click', clickExplore);
navcAbout.addEventListener('click', clickExplore);
navNegative.addEventListener('click', clickNegative);

function clickExplore(){
    navcBackground.classList.add('active');
    navNegative.classList.add('active');
};

function clickNegative(){
    navcBackground.classList.remove('active');
    navNegative.classList.remove('active');
    console.log("clicked");
};