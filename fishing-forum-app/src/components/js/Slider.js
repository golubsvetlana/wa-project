const SliderScript = () => {
    const slideImages = document.querySelectorAll('.rec-post');
    const ActiveClassName = 'rec-post__active';

    const DIRECTIONS = {
        next: 'next',
        prev: 'prev',
        direct: 'direct',
    };

    const pagerBtns = document.querySelectorAll('.pager');

    let currentIndex = 0;
    slideImages[currentIndex].classList.add(ActiveClassName);

    const increaseSlide = () => {
        if (currentIndex + 1 < slideImages.length) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
    };

    const decreaseSlide = () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = slideImages.length - 1;
        }
    };

    const changeSlide = (direction, directionIndex) => {
        slideImages[currentIndex].classList.remove(ActiveClassName);
        if (direction === DIRECTIONS.next) {
            increaseSlide();
        } else if (DIRECTIONS.direct && directionIndex !== 'undefined') {
            currentIndex = directionIndex;
        } else {
            decreaseSlide();
        }
        slideImages[currentIndex].classList.add(ActiveClassName);
    };

    for (let i = 0; i < pagerBtns.length; i++) {
        pagerBtns[i].addEventListener('click', () => {
            if (currentIndex === i) {
                return;
            }
            changeSlide(DIRECTIONS.direct, i);
        });
    }
};

export default SliderScript;
