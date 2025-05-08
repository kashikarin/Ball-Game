function onBallClick(){
    const elBall = document.querySelector('.ball');
    const computedStyles = getComputedStyle(elBall);
    let width = computedStyles.width.replace("px", "");
    let height = computedStyles.height.replace("px", "");
    console.log(`${+width + 50}px`)
    elBall.style.width = `${+width + 50}px`;
    elBall.style.height = `${+height + 50}px`;
    elBall.innerText = `${+width + 50}px`;
}