function onBall1Click(maxDiameter){
    const elBall1 = document.querySelector('.ball1');
        const computedStyles = getComputedStyle(elBall1);
        let width = computedStyles.width.replace("px", "");
        let height = computedStyles.height.replace("px", "");
        if (+width + 50 >= 400 || +width + 50 >= maxDiameter){
            elBall1.style.width = '100px';
            elBall1.style.height = '100px';
        } else {
            elBall1.style.width = `${+width + 50}px`;
            elBall1.style.height = `${+height + 50}px`;
        }
        waitForTransition(elBall1)
            .then(()=> {
                elBall1.innerText = elBall1.style.width.replace("px", "")
                elBall1.style.backgroundColor = getRandomColor();
            });
}

function onBall3Click(){
    const elBall1 = document.querySelector('.ball1');
    const elBall2 = document.querySelector('.ball2');
    let diameter1 = getRandomInt(400);
    let diameter2 = getRandomInt(400);
    elBall1.style.width = `${diameter1}px`;
    elBall1.style.height = `${diameter1}px`; 
    elBall2.style.width = `${diameter2}px`;
    elBall2.style.height = `${diameter2}px`; 
    waitForTransition(elBall1).then(()=> {
                elBall1.innerText = diameter1;
                elBall1.style.backgroundColor = getRandomColor();
            });
    waitForTransition(elBall2).then(()=> {
                elBall2.innerText = diameter2;
                elBall2.style.backgroundColor = getRandomColor();
            });
            
}

function onBall4Click(){
    const elBall1 = document.querySelector('.ball1');
    const elBall2 = document.querySelector('.ball2');
    const reducer1 = getRandomInt(60, 20);    
    const reducer2 = getRandomInt(60, 20);
    let computedStyles1 = getComputedStyle(elBall1);
    let computedStyles2 = getComputedStyle(elBall2);
    let width1 = computedStyles1.width.replace("px", "");
    let width2 = computedStyles2.width.replace("px", "");
    if (+width1 - reducer1 > 100){
        elBall1.style.width = `${+width1 - reducer1}px`;
        elBall1.style.height = `${+width1 - reducer1}px`;
    } else {
        elBall1.style.width = '100px';
        elBall1.style.height = '100px';
        console.log('Set width to:', elBall1.style.width);
    }
    if (+width2 - reducer2 > 100){
        elBall2.style.width = `${+width2 - reducer2}px`;
        elBall2.style.height = `${+width2 - reducer2}px`;
    } else {
        elBall2.style.width = '100px';
        elBall2.style.height = '100px';
        console.log('Set width to:', elBall2.style.width);
    }
    
    waitForTransition(elBall1).then(()=> {
            computedStyles1 = getComputedStyle(elBall1);
            width1 = computedStyles1.width.replace("px", "");
            elBall1.innerText = +width1;
            elBall1.style.backgroundColor = getRandomColor();
            });
    waitForTransition(elBall2).then(()=> {
            computedStyles2 = getComputedStyle(elBall2);
            width2 = computedStyles2.width.replace("px", "");
            elBall2.innerText = +width2;
            elBall2.style.backgroundColor = getRandomColor();
        });

    
}

function onBall5Click(){
    document.body.style.backgroundColor = getRandomColor();
}

function onBall6Click(){
  location.reload()
}

function waitForTransition(el){
    return new Promise(resolve => {
        const handler = () => {
            el.removeEventListener('transitionend', handler);
            resolve();
        }
        el.addEventListener('transitionend', handler);
    })
}
