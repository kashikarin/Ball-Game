function onBallClick(maxDiameter){
    const elBall = document.querySelector('.ball');
        const computedStyles = getComputedStyle(elBall);
        let width = computedStyles.width.replace("px", "");
        let height = computedStyles.height.replace("px", "");
        if (+width + 50 >= 400 || +width + 50 >= maxDiameter){
            elBall.style.width = '100px';
            elBall.style.height = '100px';
        } else {
            elBall.style.width = `${+width + 50}px`;
            elBall.style.height = `${+height + 50}px`;
        }
        waitForTransition(elBall)
            .then(()=> {
                elBall.innerText = elBall.style.width.replace("px", "")
                elBall.style.backgroundColor = getRandomColor();
            });
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

