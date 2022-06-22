const   osMainGallery = document.querySelector('.osGallery'),
        osgContent = document.querySelector('.osgContent'),
        osgImages = [...document.querySelectorAll('.osgImg')];



let osgsCurrent = 0,
    osSlide = 0;
        


const   osDoc = document.documentElement,
        osAppWidth = () => {
            osContentWidth = osgContent.getBoundingClientRect().width;

            osDoc.style.setProperty('--app-oswidth', `${osContentWidth}px`);
            osgsCurrent = -osSlide * osContentWidth;
            osgContent.style.transform = `translateX(${osgsCurrent}px)`;
        };
window.addEventListener('resize', osAppWidth);
osAppWidth();
    
    

osMainGallery.addEventListener('mousedown', startMouseDown);
osMainGallery.addEventListener('mouseup', startMouseUp);



let osInitialStart = 0,
    osInitialEnd,

    osInitialX = 0,
    osEndX;

function startMouseDown(e){
    osInitialStart = Date.now();
    osInitialX = e.clientX;
}

function startMouseUp(e){
    osInitialEnd = Date.now();
    osEndX = e.clientX;
    console.log(osEndX - osInitialX);
    if(osInitialEnd - osInitialStart < 800){
        osSwipe();
    }
}

function osSwipe(){

    if(osEndX - osInitialX < -50){
        if(osgsCurrent !== -(osContentWidth * 3)){

            if(osgsCurrent >= -(osContentWidth * 0)){
                osgsCurrent -= osContentWidth;
                osSlide++;
                osgContent.style.left = `${10}%`;
            }
            else if(osgsCurrent < -(osContentWidth * 0) && osgsCurrent > -(osContentWidth * 2)){
                osgsCurrent -= osContentWidth;
                osSlide++;
            }
            else if(osgsCurrent < -(osContentWidth * 1) && osgsCurrent == -(osContentWidth * 2)){
                osgsCurrent -= osContentWidth;
                osSlide++;
                osgContent.style.left = `${20}%`;
            }
        }
    }

    else if(osEndX - osInitialX > 50){
        if(osgsCurrent !== 0){

            if(osgsCurrent < -(osContentWidth * 2)){
                osgsCurrent += osContentWidth;
                osSlide--;
                osgContent.style.left = `${10}%`;
            }
            else if(osgsCurrent > -(osContentWidth * 3) && osgsCurrent < -(osContentWidth * 1)){
                osgsCurrent += osContentWidth;
                osSlide--;
            }
            else if(osgsCurrent > -(osContentWidth * 2) && osgsCurrent == -(osContentWidth * 1)){
                osgsCurrent += osContentWidth;
                osSlide--;
                osgContent.style.left = `${0}%`;
            }
        }
    }

    osgContent.style.transform = `translateX(${osgsCurrent}px)`;
    
}