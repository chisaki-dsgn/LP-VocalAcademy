const triggers = document.querySelectorAll('.js-accordion-trigger');

triggers.forEach(trigger =>{
    trigger.addEventListener('click',()=>{
        const parent = trigger.closest('.js-accordion');
        const content = parent.querySelector('.js-accordion-content');

        parent.classList.toggle('is-open');

        if(parent.classList.contains('is-open')){
            content.style.height = content.scrollHeight + 'px';
            content.style.opacity = '1';
        }else{
            content.style.height = '0px';
            content.style.opacity = '0';
        }
    });
});