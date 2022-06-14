const   mainGallery = document.querySelector('.csGallery'),
        csgContent = document.querySelector('.csgContent'),
        csgImages = [...document.querySelectorAll('.csgImg')];


csgImages.forEach((image, idx) => {
    image.style.backgroundImage = `url(img00/${idx + 1}.JPG)`;
})


let gsCurrent = 0,
    slide = 0;
        


const   doc = document.documentElement,
        appWidth = () => {
            galleryWidth = mainGallery.getBoundingClientRect().width;
            contentWidth = csgContent.getBoundingClientRect().width;

            doc.style.setProperty('--app-width', `${contentWidth}px`);
            gsCurrent = -slide * contentWidth;
            csgContent.style.transform = `translateX(${gsCurrent}px)`;
        };
window.addEventListener('resize', appWidth);
appWidth();
    



let wrCurrent = 0,
    wrTarget = 0,
    wrEase = 0.5;




function lerp(start, end, t) {
    return start * (1-t) + end * t;
}

    

mainGallery.addEventListener('mousedown', startMouseDown);
mainGallery.addEventListener('mouseup', startMouseUp);



let initialStart = 0,
    initialEnd,

    initialX = 0,
    initialY,
    endX,
    endY;

function startMouseDown(e){
    initialStart = Date.now();
    initialX = e.clientX;
    initialY = e.clientY;
}

function startMouseUp(e){
    initialEnd = Date.now();
    endX = e.clientX;
    endY = e.clientY;
    console.log(endX - initialX);
    if(initialEnd - initialStart < 800){
        swipe();
    }
}

function swipe(){

    if(endX - initialX < -50){
        if(gsCurrent !== -(contentWidth * 4)){

            if(gsCurrent >= -(contentWidth * 0)){
                gsCurrent -= contentWidth;
                slide++;
                csgContent.style.left = `${10}%`;
            }
            else if(gsCurrent < -(contentWidth * 0) && gsCurrent > -(contentWidth * 3)){
                gsCurrent -= contentWidth;
                slide++;
            }
            else if(gsCurrent < -(contentWidth * 2) && gsCurrent == -(contentWidth * 3)){
                gsCurrent -= contentWidth;
                slide++;
                csgContent.style.left = `${20}%`;
            }
        }
    }

    else if(endX - initialX > 50){
        if(gsCurrent !== 0){

            if(gsCurrent < -(contentWidth * 3)){
                gsCurrent += contentWidth;
                slide--;
                csgContent.style.left = `${10}%`;
            }
            else if(gsCurrent > -(contentWidth * 4) && gsCurrent < -(contentWidth * 1)){
                gsCurrent += contentWidth;
                slide--;
            }
            else if(gsCurrent > -(contentWidth * 2) && gsCurrent == -(contentWidth * 1)){
                gsCurrent += contentWidth;
                slide--;
                csgContent.style.left = `${0}%`;
            }
        }
    }

    csgContent.style.transform = `translateX(${gsCurrent}px)`;
    
}