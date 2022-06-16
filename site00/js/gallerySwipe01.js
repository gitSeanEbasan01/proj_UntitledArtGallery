const   awMainGallery = document.querySelector('.awGallery'),
        awgContent = document.querySelector('.awgContent'),
        awgImages = [...document.querySelectorAll('.awgImg')];



let awgsCurrent = 0,
    awSlide = 0;
        


const   awDoc = document.documentElement,
        awAppWidth = () => {
            awContentWidth = awgContent.getBoundingClientRect().width;

            awDoc.style.setProperty('--app-awwidth', `${awContentWidth}px`);
            awgsCurrent = -awSlide * awContentWidth;
            awgContent.style.transform = `translateX(${awgsCurrent}px)`;
        };
window.addEventListener('resize', awAppWidth);
awAppWidth();
    
    

awMainGallery.addEventListener('mousedown', startMouseDown);
awMainGallery.addEventListener('mouseup', startMouseUp);



let awInitialStart = 0,
    awInitialEnd,

    awInitialX = 0,
    awEndX;

function startMouseDown(e){
    awInitialStart = Date.now();
    awInitialX = e.clientX;
}

function startMouseUp(e){
    awInitialEnd = Date.now();
    awEndX = e.clientX;
    console.log(awEndX - awInitialX);
    if(awInitialEnd - awInitialStart < 800){
        awSwipe();
    }
}

function awSwipe(){

    if(awEndX - awInitialX < -50){
        if(awgsCurrent !== -(awContentWidth * 6)){

            if(awgsCurrent >= -(awContentWidth * 0)){
                awgsCurrent -= awContentWidth;
                awSlide++;
                awgContent.style.left = `${10}%`;
            }
            else if(awgsCurrent < -(awContentWidth * 0) && awgsCurrent > -(awContentWidth * 5)){
                awgsCurrent -= awContentWidth;
                awSlide++;
            }
            else if(awgsCurrent < -(awContentWidth * 4) && awgsCurrent == -(awContentWidth * 5)){
                awgsCurrent -= awContentWidth;
                awSlide++;
                awgContent.style.left = `${20}%`;
            }
        }
    }

    else if(awEndX - awInitialX > 50){
        if(awgsCurrent !== 0){

            if(awgsCurrent < -(awContentWidth * 5)){
                awgsCurrent += awContentWidth;
                awSlide--;
                awgContent.style.left = `${10}%`;
            }
            else if(awgsCurrent > -(awContentWidth * 6) && awgsCurrent < -(awContentWidth * 1)){
                awgsCurrent += awContentWidth;
                awSlide--;
            }
            else if(awgsCurrent > -(awContentWidth * 2) && awgsCurrent == -(awContentWidth * 1)){
                awgsCurrent += awContentWidth;
                awSlide--;
                awgContent.style.left = `${0}%`;
            }
        }
    }

    awgContent.style.transform = `translateX(${awgsCurrent}px)`;
    
}