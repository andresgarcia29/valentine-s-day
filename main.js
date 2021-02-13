const choose = document.getElementById('choose');
const yes = document.getElementById('yes');
const no = document.getElementById('no');

const bodyWidth = document.body.clientWidth;
const bodyHeight = document.body.clientHeight;

yes.addEventListener('click', () => {
    alert('I already know');
});

no.addEventListener('mouseover', () => {
    const buttonWidth = 300;
    const buttonHeight = 60;

    no.style.width = '300px';

    let xPosition = Math.floor(Math.random() * bodyWidth);
    let yPosition = Math.floor(Math.random() * bodyHeight);
    no.style.position = 'absolute';

    if (xPosition + buttonWidth > bodyWidth) {
        no.style.left = xPosition - bodyWidth - 'px';
    }
    else if (xPosition - buttonWidth > bodyWidth) {
        no.style.left = xPosition - bodyWidth + 'px';
    }
    else {
        no.style.left = xPosition + 'px';
    }

    if (yPosition + buttonHeight > bodyHeight) {
        no.style.top = yPosition - bodyHeight + 'px';
    }
    else if (yPosition - buttonHeight > bodyHeight) {
        no.style.top = yPosition - bodyHeight + 'px';
    }
    else {
        no.style.top = yPosition + 'px';
    }
});
