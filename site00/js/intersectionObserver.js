let ioCurrentStudies = document.querySelector('.currentStudies'),
    ioArtWorks = document.querySelector('.artWorks'),
    ioOldSketches = document.querySelector('.oldSketches'),
    ioMainFooter = document.querySelector('.main-Footer');

let option = {
    rootMargin: '0px',
    threshold: .5
};

let setItemActive = (entries => {
    console.log(entries);

    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('active');
        }
    })
});

let observer = new IntersectionObserver(setItemActive, option);

ioCurrentStudies = observer.observe(ioCurrentStudies);
ioArtWorks = observer.observe(ioArtWorks);
ioOldSketches = observer.observe(ioOldSketches);
ioMainFooter = observer.observe(ioMainFooter);