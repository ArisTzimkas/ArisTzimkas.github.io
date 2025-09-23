const getZoom = () => {
    if (window.innerWidth < 600) return 0.5;
    if (window.innerWidth < 900) return 0.7; 
    return 0.8;
};
const getSpeed = () => {
    if (window.innerWidth < 600) return 3.0;
    if (window.innerWidth < 900) return 2.0;
    return 2.0;
};

VANTA.FOG({
    el: "body",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    highlightColor: 0x666666,
    midtoneColor: 0x252d52,
    lowlightColor: 0xbb,
    baseColor: 0x0,
    blurFactor: 0.78,
    speed: getSpeed(),
    zoom: getZoom()
    })


const observer=new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            console.log(entry.target)
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    })
}, {});

const todoElements=document.querySelectorAll('.project-item');
todoElements.forEach(el=>observer.observe(el));







function showBar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display="flex";
}
function hideBar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display="none";
}


document.querySelectorAll('.slider').forEach(slider => {
    const buttons = slider.parentElement.querySelectorAll('.slider-nav button');

    // Function to update active button for this specific slider
    function updateActiveButton() {
        const scrollLeft = slider.scrollLeft;
        const slideWidth = slider.clientWidth;
        const currentSlide = Math.round(scrollLeft / slideWidth);

        // Remove active from all buttons in this slider
        buttons.forEach(btn => btn.classList.remove('active'));

        // Add active to current button
        if (buttons[currentSlide]) {
            buttons[currentSlide].classList.add('active');
        }
    }

    // Wheel navigation
    slider.addEventListener('wheel', e => {
        e.preventDefault();
        const direction = e.deltaY > 0 ? 1 : -1;
        slider.scrollBy({ left: direction * slider.clientWidth, behavior: 'smooth' });
    });

    // Listen for scroll events
    slider.addEventListener('scroll', updateActiveButton);

    // Button navigation
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            slider.scrollTo({
                left: index * slider.clientWidth,
                behavior: 'smooth'
            });
        });
    });

    // Initialize active button on load
    updateActiveButton();
});