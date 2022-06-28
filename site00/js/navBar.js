const   navcExplore = document.querySelector('.navcExplore'),
        navcAbout = document.querySelector('.navcAbout'),
        naviExploredLi = [...document.querySelectorAll('.exploredLi')],
        naviAboutLi = [...document.querySelectorAll('.aboutLi')],

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
    navcBackground.classList.remove('active');
    navNegative.classList.remove('active');
    
    navInfo.classList.remove('active');
    navInfoNegative.classList.remove('active');


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