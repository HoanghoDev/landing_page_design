let listBg = document.querySelectorAll('.bg');
let banner = document.querySelector('.banner');
let tabs = document.querySelectorAll('.tab');
let container = document.querySelector('.container');
let heightDefault = container.offsetHeight;
let topBefore = 0;
let body = document.querySelector('body');

window.addEventListener('wheel', function(event){
    event.preventDefault();
    const scrollSpeed = 0.2;
    const scrollValue = window.scrollY + (event.deltaY/3) * scrollSpeed;
    window.scrollTo(0, scrollValue);



    let top = scrollValue;
    listBg.forEach((bg, index) => {
        if(index != 0){
            bg.animate({
                transform: `translateY(${(-top*index)}px)`
            }, { duration: 1000, fill: "forwards" });
        }
        if(index == listBg.length - 1){
            tabs.forEach(tab => {
                tab.animate({
                    transform: `translateY(${(-top*index)}px)`
                }, { duration: 500, fill: "forwards" });
            })

            if(topBefore < top){
                setHeight = heightDefault-window.scrollY*index;
                container.animate({
                    height: `${(setHeight + 100)}px`
                }, { duration: 50, fill: "forwards" });
                topBefore = window.scrollY;
            }
        }
        tabs.forEach((tab, index) => {
            // console.log(tab.offsetTop - top, window.innerHeight);
            if((tab.offsetTop - top) <= window.innerHeight*(index+1)){
                let content = tab.getElementsByClassName('content')[0];
                let transformContent = window.innerHeight*(index+1) - (tab.offsetTop - top);
                console.log(tab);
                content.animate({
                    transform: `translateY(${(-transformContent + (100*index))}px)`
                }, { duration: 500, fill: "forwards" });
            }
        })
    })
}, { passive: false });