const   csGallery = document.querySelector('.csGallery'),
        csgContent = document.querySelector('.csgContent'),
        images = [...document.querySelectorAll('.csgImg')],
        
        galleryWidth = csGallery.getBoundingClientRect().width,
        contentWidth = csgContent.getBoundingClientRect().width;




let gsCurrent = 0,
    slide = 0;




const   doc = document.documentElement,
        appWidth = () => {
            doc.style.setProperty('--app-width', `${galleryWidth}px`);
            gsCurrent = -slide * galleryWidth;
            csgContent.style.transform = `translateY(${gsCurrent}px)`;
        };
window.addEventListener('resize', appWidth);
appWidth();
    



csGallery.addEventListener('mousedown', startMouseDown);
csGallery.addEventListener('mouseup', startMouseUp);



// ------------------------------------------------------------------------ Dragging / Mouse Drag ------------------------------------------------------------------------

let initialStart = 0,
    initialEnd,

    initialX = 0,
    endX;

function startMouseDown(e){
    initialStart = Date.now();
    initialX = e.clientX;
}

function startMouseUp(e){
    initialEnd = Date.now();
    endX = e.clientX;
    console.log(endX - initialX);
    if(initialEnd - initialStart < 800){
        swipe();
    }
}


function swipe(){
    if(endX - initialX < -50){
        if(gsCurrent !== -(galleryWidth * 4)){

            // if(gsCurrent >= -(contentWidth * 2)){
            //     console.log("can go right");
            //     gsCurrent -= contentWidth;
            //     slide++;
            // }
            // else if(gsCurrent < -(contentWidth * 2) && gsCurrent >= -(contentWidth * 3)){
            //     console.log("go small right");
            //     gsCurrent -= contentWidth * .75;
            // }
            
            gsCurrent -= galleryWidth;
            slide++;
            
        }
    }

    else if(endX - initialX > 50){
        if(gsCurrent !== 0){

            // if(gsCurrent < -(contentWidth * 3)){
            //     console.log("go small left");
            //     gsCurrent += contentWidth * .75;
            //     slide--;
            // }
            // else if(gsCurrent >= -(contentWidth * 3) && gsCurrent < 0){
            //     console.log("can go left");
            //     gsCurrent += contentWidth;
            // }

            gsCurrent += galleryWidth;
            slide--;
            
        }
    }

    console.log(gsCurrent);
    csgContent.style.transform = `translateX(${gsCurrent}px)`;
}