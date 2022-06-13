const   mainGallery = document.querySelector('.csGallery'),
        csgContent = document.querySelector('.csgContent'),
        csgImages = [...document.querySelectorAll('.csgImg')];





let gsCurrent = 0,
    slide = 0;
        


const   doc = document.documentElement,
        appWidth = () => {
            galleryWidth = mainGallery.getBoundingClientRect().width;
            doc.style.setProperty('--app-width', `${galleryWidth}px`);
            gsCurrent = -slide * galleryWidth;
            csgContent.style.transform = `translateX(${gsCurrent}px)`;
        };
window.addEventListener('resize', appWidth);
appWidth();

// const   doc = document.documentElement,
//         appHeight = () => {
//             galleryHeight = mainGallery.getBoundingClientRect().height
//             doc.style.setProperty('--app-height', `${galleryHeight}px`);
//             gsCurrent = -slide * galleryHeight;
//             csgContent.style.transform = `translateY(${gsCurrent}px)`;
//         };
// window.addEventListener('resize', appHeight);
// appHeight();
    
    

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
    if(initialEnd - initialStart < 800 && initialEnd - initialStart > 0){
        swipe();
    }
}

function swipe(){

    if(endX - initialX < -50){
        if(gsCurrent !== -(galleryWidth * 4)){
            gsCurrent -= galleryWidth;
            slide++;
        }
    }

    else if(endX - initialX > 50){
        if(gsCurrent !== 0){
            gsCurrent += galleryWidth;
            slide--;
        }
    }

    // if(endY - initialY < -50){
    //     if(gsCurrent !== -(galleryHeight * 4)){
    //         gsCurrent -= galleryHeight;
    //         slide++;
    //     }
    // }

    // else if(endY - initialY > 50){
    //     if(gsCurrent !== 0){
    //         gsCurrent += galleryHeight;
    //         slide--;
    //     }
    // }


    csgContent.style.transform = `translateX(${gsCurrent}px)`;
    // csgContent.style.transform = `translateY(${gsCurrent}px)`;
    
}