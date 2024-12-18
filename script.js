const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesbtn = document.querySelector('.yes-btn');
const nobtn = document.querySelector('.no-btn');

const wrapperRect = wrapper.getBoundingClientRect();

yesbtn.addEventListener('click', () => {
    yieldesBtn.innerHTML = 'I Love You Too :)';
});

nobtn.addEventListener('mouseover', () => {
    const noBtnRect = nobtn.getBoundingClientRect();
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width));
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height));
    nobtn.style.position = 'absolute';
    nobtn.style.top = `${j}px`;
    nobtn.style.left = `${i}px`;
});
