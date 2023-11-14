const carousel = document.querySelector('.carousel'),
  cards = document.querySelectorAll('.carousel .card')[0],
  btns = document.querySelectorAll('.wrapper i'),
  spans = document.querySelectorAll('.spans span');

let isDraging = false;
let prevPageX, scrollLeftEl;

const handlButton = () => {
    let scrollValue = Math.ceil(carousel.scrollLeft);
    let scrollMax = carousel.scrollWidth - carousel.clientWidth;
    btns[0].style.display = scrollValue === 0 ? 'none' : 'block';
    btns[1].style.display = scrollValue >= scrollMax ? "none" : "block";
}

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        carousel.scrollLeft += btn.id === "right" ? cards.clientWidth +10 : -cards.clientWidth +10;
        handlButton();
    })
})

const draggStart = (e) => {
    isDraging = true;
    prevPageX = e.pageX;
    scrollLeftEl = carousel.scrollLeft;
};

const dragging = (e) => {
    if(!isDraging) return;
    carousel.classList.add("dragging");
    let difference = e.pageX - prevPageX;
    carousel.scrollLeft = scrollLeftEl - difference;
    handlButton();
}

const draggStop = () => {
    isDraging = false;
    carousel.classList.remove("dragging");
}

carousel.addEventListener('mousedown', draggStart);
carousel.addEventListener('mousemove', dragging);
carousel.addEventListener('mouseup', draggStop);
