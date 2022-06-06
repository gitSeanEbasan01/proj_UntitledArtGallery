const   descriptionBorder = document.querySelector('.descriptionBorder'),
        tsTitle = document.querySelector('.tsTitle'),
        textUntitled = document.querySelector('.titleText_Untitled'),
        textArtGallery = document.querySelector('.titleText_Art-Gallery'),
        
        untitled = [...document.querySelectorAll('.text-untitled')],
        artGallery = [...document.querySelectorAll('.text-art-gallery')],
        description = document.querySelector('.description'),
        tdName = document.querySelector('.name'),
        
        bgImage = document.querySelector('.titleBackgroundImage');


window.addEventListener('DOMContentLoaded', () => {

    // Primary Active

    setTimeout(() => {
        tsTitle.classList.add('borderActive');
        descriptionBorder.classList.add('active');
        textUntitled.classList.add('borderActive');
        textArtGallery.classList.add('borderActive');
    }, 1000);
    
    // Primary Fade

    setTimeout(() => {
        tsTitle.classList.add('borderFade');
        textUntitled.classList.add('borderFade');
        textArtGallery.classList.add('borderFade');
    }, 3000);
    
    
    // Secondary Active

    setTimeout(() => {
        untitled.forEach((div, idx) => {
            setTimeout(() => {
                div.classList.add('active');
            }, idx == 0 ? (idx+1) * 100 :
            idx == 1 ? idx * 300 :
            idx == 2 ? (idx-1) * 500 :
            idx == 3 ? (idx-2) * 700 :
            idx == 4 ? (idx-3) * 700 :
            idx == 5 ? (idx-4) * 500 :
            idx == 6 ? (idx-5) * 300 :
            idx == 7 ? (idx-6) * 100
            : idx * 100
            )
        });

        artGallery.forEach((div, idx) => {
            setTimeout(() => {
                div.classList.add('active');
            }, idx == 0 ? (idx+1) * 300 :
            idx == 1 ? idx * 200 : 
            idx == 2 ? (idx-1) * 100 :
            idx == 3 ? (idx-2) * 100 :
            idx == 4 ? (idx-3) * 200 :
            idx == 5 ? (idx-4) * 300 :
            idx == 6 ? (idx-5) * 400 :
            idx == 7 ? (idx-6) * 500 :
            idx == 8 ? (idx-7) * 600 :
            idx == 9 ? (idx-8) * 700 
            : idx * 100
            )
        })

        description.classList.add('active');
        tdName.classList.add('active');

    }, 3500);

    setTimeout(() => {
        bgImage.classList.add('active');
    }, 4500);
    
});