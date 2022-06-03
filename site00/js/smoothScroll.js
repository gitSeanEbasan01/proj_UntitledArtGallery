const overallContainer = document.querySelector('.overallContainer');

let current = 0,
    target = 0;

const ease = 0.06;

function lerp(start, end, t) {
    return start * (1-t) + end * t;
}

function setTransform(el, transform){
    el.style.transform = transform;
}


function setupAnimation(){
    containerHeight = overallContainer.getBoundingClientRect().height;
    document.body.style.height = `${containerHeight}px`;
    smoothScroll();

}


function smoothScroll(){
    current = lerp(current, target, ease);
    current = parseFloat(current.toFixed(2));
    target = window.scrollY;

    setTransform(overallContainer, `translateY(${-current}px)`);

    requestAnimationFrame(smoothScroll);
}

setupAnimation();