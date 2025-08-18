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
    const dots = slider.parentElement.querySelectorAll('.slider-nav button');

    slider.addEventListener('wheel', e => {
        e.preventDefault();
        const direction = e.deltaY > 0 ? 1 : -1;
        slider.scrollBy({ left: direction * slider.clientWidth, behavior: 'smooth' });
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            slider.scrollTo({
                left: index * slider.clientWidth,
                behavior: 'smooth'
            });
        });
    });
});