const   navcExplore = document.querySelector('.navcExplore'),
        navcAbout = document.querySelector('.navcAbout'),
        naviExploredLi = [...document.querySelectorAll('.exploredLi')],
        naviAboutLi = [...document.querySelectorAll('.aboutLi')],

        navceExit = document.querySelector('.navceExit'),

        navcContainer = document.querySelector('.navCategoryContainer'),
        navcBackground = document.querySelector('.navCategoryBackground'),
        navNegative = document.querySelector('.navBarNegative'),
        
        navInfo = document.querySelector('.navInfo'),
        navInfoNegative = document.querySelector('.navInfoNegative');

navcExplore.addEventListener('click', clickExplore);
navcAbout.addEventListener('click', clickAbout);

// navceExit.addEventListener('click', clickExploreExit);

navNegative.addEventListener('click', clickNegative);
navInfoNegative.addEventListener('click', clickNegative);

function clickExplore(){
    navcExplore.classList.add('active');

    navcAbout.classList.remove('active');
    
    navcContainer.classList.add('active');
    navcBackground.classList.add('active');
    navNegative.classList.add('active');

    navInfo.classList.add('active');
    navInfoNegative.classList.add('active');

    navceExit.classList.add('active');

    setTimeout(() => {
        navceExit.addEventListener('click', clickExploreExit);
        navcExplore.removeEventListener('click', clickExplore);
    })


    setTimeout(() => {
        naviExploredLi.forEach((li, idx) =>{
            setTimeout(() => {
                li.classList.add('active');
            }, idx * 100 );
        });
    }, 300);

    naviAboutLi.forEach((li, idx) =>{
        setTimeout(() => {
            li.classList.remove('active');
        }, idx == 0 ? (idx+1) * 100 :
        idx == 1 ? idx * 0
        : idx * 100 );
    });

};
function clickAbout(){
    navcAbout.classList.add('active');

    navcExplore.classList.remove('active');
    
    navcBackground.classList.add('active');
    navNegative.classList.add('active');

    navInfo.classList.add('active');
    navInfoNegative.classList.add('active');


    setTimeout(() => {
        naviAboutLi.forEach((li, idx) =>{
            setTimeout(() => {
                li.classList.add('active');
            }, idx * 100 );
        });
    }, 300);

    naviExploredLi.forEach((li, idx) =>{
        setTimeout(() => {
            li.classList.remove('active');
        }, idx == 0 ? (idx+1) * 200 :
        idx == 1 ? idx * 100 :
        idx == 2 ? (idx-1) * 0
        : idx * 100 );
    });
}




function clickNegative(){
    navceExit.classList.remove('active');
    
    navcExplore.classList.remove('active');
    navcAbout.classList.remove('active');

    navcContainer.classList.remove('active');
    navcBackground.classList.remove('active');
    navNegative.classList.remove('active');
    
    navInfo.classList.remove('active');
    navInfoNegative.classList.remove('active');

    setTimeout(() => {
        navceExit.removeEventListener('click', clickExploreExit);
        navcExplore.addEventListener('click', clickExplore);
    }, 500);


    naviExploredLi.forEach((li, idx) =>{
        setTimeout(() => {
            li.classList.remove('active');
        }, idx == 0 ? (idx+1) * 200 :
        idx == 1 ? idx * 100 :
        idx == 2 ? (idx-1) * 0
        : idx * 100 );
    });

    naviAboutLi.forEach((li, idx) =>{
        setTimeout(() => {
            li.classList.remove('active');
        }, idx == 0 ? (idx+1) * 100 :
        idx == 1 ? idx * 0
        : idx * 100 );
    });
};

function clickExploreExit(){
    navceExit.classList.remove('active');

    navcExplore.classList.remove('active');
    navcAbout.classList.remove('active');

    navcContainer.classList.remove('active');
    navcBackground.classList.remove('active');
    navNegative.classList.remove('active');
    
    navInfo.classList.remove('active');
    navInfoNegative.classList.remove('active');

    setTimeout(() => {
        navceExit.removeEventListener('click', clickExploreExit);
        navcExplore.addEventListener('click', clickExplore);
    }, 500);

    naviExploredLi.forEach((li, idx) =>{
        setTimeout(() => {
            li.classList.remove('active');
        }, idx == 0 ? (idx+1) * 200 :
        idx == 1 ? idx * 100 :
        idx == 2 ? (idx-1) * 0
        : idx * 100 );
    });

    naviAboutLi.forEach((li, idx) =>{
        setTimeout(() => {
            li.classList.remove('active');
        }, idx == 0 ? (idx+1) * 100 :
        idx == 1 ? idx * 0
        : idx * 100 );
    });

};

