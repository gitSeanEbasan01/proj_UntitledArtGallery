let beTitleSection = document.querySelector('.titleSection'),
    beCurrentStudies = document.querySelector('.currentStudies'),
    betsTitle = document.querySelector('.tsTitle'),

    beNavigationArea = document.querySelector('.navArea'),
    beOverallContainer = document.querySelector('.overallContainer');

let option00 = {
    rootMargin: '0px',
    threshold: 1
};

let setItemActive00 = (entries => {
    console.log(entries);

    entries.forEach(entry => {
        if(entry.isIntersecting){
            if(entry.target.classList.contains('tsTitle')){
                beOverallContainer.classList.remove('active');
                beTitleSection.classList.remove('active');

                beNavigationArea.classList.remove('active');
            }
            
        }
        else{
            if(entry.target.classList.contains('tsTitle')){
                beOverallContainer.classList.add('active');
                beTitleSection.classList.add('active');

                beNavigationArea.classList.add('active');
            }
        }
    })
});

let observer00 = new IntersectionObserver(setItemActive00, option00);

// beCurrentStudies = observer00.observe(beCurrentStudies);
betsTitle = observer00.observe(betsTitle);