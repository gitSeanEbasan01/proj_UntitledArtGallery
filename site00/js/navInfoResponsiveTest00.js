let navArea = document.querySelector('.navArea');

const   doc = document.documentElement,
        navInfoWidth = () => {
            navAreaWidth = navArea.getBoundingClientRect().width;

            doc.style.setProperty('--app-nawidth', `${navAreaWidth}px`);
        };
