let betsTitle = document.querySelector('.titleSection'),
    beCurrentStudies = document.querySelector('.currentStudies'),

    beOverallContainer = document.querySelector('.overallContainer');

let option00 = {
    rootMargin00: '0px',
    threshold00: .5
};

let setItemActive00 = (entries => {
    console.log(entries);

    entries.forEach(entry => {
        if(entry.isIntersecting){
            if(entry.target.classList.contains('currentStudies')){
                beOverallContainer.classList.add('active');
                betsTitle.classList.add('active');
            }
        }
    })
});

let observer00 = new IntersectionObserver(setItemActive00, option00);

beCurrentStudies = observer00.observe(beCurrentStudies);