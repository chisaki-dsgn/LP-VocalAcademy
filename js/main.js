const triggers = document.querySelectorAll('.js-accordion-trigger');

triggers.forEach(trigger =>{
    trigger.addEventListener('click',()=>{
        const parent = trigger.closest('.js-accordion');
        const content = parent.querySelector('js-accordion-content');

        if(!content){
            console.error('js-accordion-contentが見つかりませんでした。該当のHTML：',parent);
        }

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