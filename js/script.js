let ul = document.createElement('ul');
document.body.append(ul);

for (let i = 1; i <= 5; i++) {
    let li = document.createElement('li');
    ul.append(li);
    li.innerText = 'Rad ' + i;
    li.style.color = '#898cf7'
    li.style.marginBottom = (i * 8) + 'px';
    li.style.fontSize = (i * 10) + 'px'
    li.style.textAlign = 'center';
    li.style.listStyle = 'none';
    li.style.width = '70%';
    const hue = 120 + (60 / 5 * i);
    li.style.background = `hsl(${hue}, 80%, 80%)`;
}


const flexContainer = document.createElement('div');
document.body.append(flexContainer);
flexContainer.style.marginLeft = '40px';
flexContainer.style.display = 'flex';
flexContainer.style.justifyContent = 'space-around'
flexContainer.style.width = '59%';
flexContainer.style.padding = '40px';
flexContainer.style.border = '1px solid black';



const box1 = document.createElement('div');
flexContainer.append(box1);
box1.style.margin = '20px';
box1.style.border = '8px solid #a8a8f0';

const box2 = document.createElement('div');
flexContainer.append(box2);
box2.style.margin = '20px';
box2.style.border = '8px solid #a8a8f0';

const box3 = document.createElement('div');
flexContainer.append(box3);
box3.style.margin = '20px';
box3.style.border = '8px solid #a8a8f0';

const numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const letArray = ['ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio'];

for (let i = 0; i < numArray.length; i++) {
    const p1 = document.createElement('p');
    box1.append(p1);
    p1.innerText = numArray[i];
    p1.style.margin = '0';
    p1.style.textAlign = 'left';
    p1.style.width = '45px';

    if (i % 2 === 0) {
        p1.style.background = '#000000';
        p1.style.color = '#ffffff';
    }
    if (i === 4) {
        p1.style.background = '#a8a8f0';
    }
}


for (let i = numArray.length - 1; i >= 0; i--) {
    const p2 = document.createElement('p');
    box2.append(p2);
    p2.innerText = numArray[i];
    p2.style.margin = '0';
    p2.style.textAlign = 'center';
    p2.style.width = '45px';

    if (i % 2 === 0) {
        p2.style.background = '#000000';
        p2.style.color = '#ffffff';
    }
    if (i === 8) {
        p2.style.background = '#a8a8f0';
    }
}


for (let i = 0; i < letArray.length; i++) {
    const p3 = document.createElement('p');
    box3.append(p3);
    p3.innerText = letArray[i];
    p3.style.margin = '0';
    p3.style.textAlign = 'right';
    p3.style.width = '45px';

    if (i % 2 === 0) {
        p3.style.background = '#000000';
        p3.style.color = '#ffffff';
    }
    if (i === 5) {
        p3.style.background = '#a8a8f0';
    }
}













