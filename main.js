const choose = document.getElementById('choose');
const yes = document.getElementById('yes');
const no = document.getElementById('no');

const bodyWidth = document.body.clientWidth;
const bodyHeight = document.body.clientHeight;

yes.addEventListener('click', () => {
    alert('I already know');
});

no.addEventListener('mouseover', () => {
    console.log(bodyWidth, bodyHeight)
    let xPosition = Math.floor(Math.random() * bodyWidth);
    let yPosition = Math.floor(Math.random() * bodyHeight);
    no.style.position = 'absolute';

    if (xPosition + no.style.width > bodyWidth) {
        no.style.right = xPosition + 'px';
    } else {
        no.style.left = xPosition + 'px';
    }
    if (yPosition + no.style.height > bodyHeight) {
        no.style.top = yPosition + 'px';
    } else {
        no.style.bottom = yPosition + 'px';
    }

    console.log(xPosition, yPosition);
});
