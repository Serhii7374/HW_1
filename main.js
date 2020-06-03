const getS = selector => document.querySelector(selector);

function editBtn() {
    getS('.edit-block').classList.remove('hidden');
    getS('.area').value = getS('.top').innerHTML;
    getS('.style-block').classList.add('hidden');
}
function styleBtn() {
    getS('.style-block').classList.remove('hidden');
    getS('.edit-block').classList.add('hidden');
}

function saveBtn() {
    getS('.top').innerHTML = getS('.area').value;
    getS('.edit-block').classList.add('hidden');
}

function fontSize() {
    getS('.top').style.fontSize = event.target.value;
}

function fontFamily() {
    getS('.top').style.fontFamily = event.target.value;
}

function fontWeight() {
    getS('.top').style.fontWeight = event.target.checked ? 'bold' : 'normal';
}

function fontStyle() {
    getS('.top').style.fontStyle = event.target.checked ? 'italic' : 'normal';
}

/// функція для вибору кольору ТЕКСТУ   ---- початок
const colors = ['red', 'green', 'blue', 'yellow', 'gray', 'white', 'pink', 'coral', 'purple'];

function textColor() {
    if (getS('.colors')) {
        getS('.bottom').removeChild(getS('.colors'))
    } else {
        let divColors = document.createElement('div');
        divColors.classList.add('colors');
        for (let i = 0; i < colors.length; i++) {
            let divColorBox = document.createElement('div');
            divColorBox.classList.add('color-box');
            divColorBox.style.background = colors[i];
            divColorBox.setAttribute('onclick', 'chooseTextColor()');
            divColors.appendChild(divColorBox);
        }
        getS('.bottom').appendChild(divColors);
    }
}
function chooseTextColor() {
    getS('.top').style.color = event.target.style.background;
    getS('.bottom').removeChild(event.target.parentElement);
}
/// ----------------------------------------------------------

/// функція для вибору кольору ФОНУ
function backColor() {
    if (getS('.colors')) {
        getS('.bottom').removeChild(getS('.colors'))
    } else {
        let divColors = document.createElement('div');
        divColors.classList.add('colors');
        for (let i = 0; i < colors.length; i++) {
            let divColorBox = document.createElement('div');
            divColorBox.classList.add('color-box');
            divColorBox.style.background = colors[i];
            divColorBox.setAttribute('onclick', 'chooseBgColor()');
            divColors.appendChild(divColorBox);
        }
        getS('.bottom').appendChild(divColors);
    }
}
function chooseBgColor() {
    getS('.top').style.background = event.target.style.background;
    getS('.bottom').removeChild(event.target.parentElement);
}
///-----------------------------------------------------

function addBtn() {
    getS('.second-step').classList.remove('hidden');
    getS('.first-step').classList.add('hidden');
}
function tableInfo() {
    getS('.table-box').classList.remove('hidden');
    getS('.list-box').classList.add('hidden');
}
function listInfo() {
    getS('.table-box').classList.add('hidden');
    getS('.list-box').classList.remove('hidden');
}

/// функція для створення таблиці-----------
function createTable() {
    const countTr = getS('.countTr').value;
    const countTd = getS('.countTd').value;
    let table = `<table>`
    for (let i = 1; i <= countTr; i++) {
        table += `<tr>`;
        for (let j = 1; j <= countTd; j++) {
            table += `<td style="border:${getS('.position').value};border-color:${getS('.position2').value}; width:${getS('.widthTD').value + 'px'};height:${getS('.heightTD').value + 'px'}; border-width:${getS('.widthBorder').value + 'px'}";>TD</td>`;
        }
        table += `</tr>`;
    }
    table += `</table>`
    getS('.countTr').value = '';
    getS('.countTd').value = '';
    getS('.widthTD').value = '';
    getS('.heightTD').value = '';
    getS('.widthBorder').value = '';
    getS('.area').value += table;
    getS('.second-step').classList.add('hidden');
    getS('.first-step').classList.remove('hidden');
    getS('.table-box').classList.add('hidden');
    getS('#table').checked = false;
}
///-----------------------------------------------

/// функція для створення списку-----------
function createList() {
    const countLi = getS('.countLi').value;
    const mark = getS('.mark').value;
    let list = `<ul type="${mark}">`;
    for (let i = 1; i <= countLi; i++) {
        list += '<li>some text</li>';
    }
    list += '</ul>';
    getS('.countLi').value = '';
    getS('.area').value += list;
    getS('.second-step').classList.add('hidden');
    getS('.first-step').classList.remove('hidden');
    getS('.list-box').classList.add('hidden');
    getS('#list').checked = false;
}
///-----------------------------------------