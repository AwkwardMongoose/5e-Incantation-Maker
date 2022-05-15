//Basic DOM Stuff
const level = document.getElementById('level');
const duration = document.getElementById('duration');
const shape = document.getElementById('shape');
const school = document.getElementById('school');
const action = document.getElementById('action');
const desc1 = document.getElementById('desc1');
const desc2 = document.getElementById('desc2');
const desc3 = document.getElementById('desc3');
const descInput = document.querySelectorAll('.descriptorselector');
const outputField = document.getElementById('output');
const abjuSel = document.querySelectorAll('.abjuselector');
const evocSel = document.querySelectorAll('.evocselector');
const conjSel = document.querySelectorAll('.conjselector');
const tranSel = document.querySelectorAll('.transelector');
const illuSel = document.querySelectorAll('.illuselector');
const enchSel = document.querySelectorAll('.enchselector');
const diviSel = document.querySelectorAll('.diviselector');
const necrSel = document.querySelectorAll('.necrselector');

// Incantation Arrays
const levelArr = ["","En","Beleg"];
const durationArr = ["fa'","damen'","bin'"];
const shapeArr = ["Tu","Aunha","Mi","Ta","Toh","Sepe","Lin","Enche"];
const actionArr = ["Sida","Exila","Voca","Sica","Adava","Muta","Melisa","Fysa","Mellia","Pora","Cipera","Traca"];
const descArr = ["","Bim","Bas","Zun","Saf","Bul","Lucisa","Aun","Ro","Chil","Amba","Fus","Son","Mentat","Silior","Agmal","Su","Quan","Aum","Dur","Hanos","Biin","Char","Kad","Egna","Wuf","Anabinaun","Sida","Du","Ee'Viing","O'Viing","Sley","Pad","Sa","Chul","Ceve","Od","Serm","Ada","Thesa","Mi","Gael","Aunha","Anaha","Aunhabin","Ta"]

function incantOutput() {
    let descList = [];
    descInput.forEach(x => {
        if (x.value != 0) {
            descList.push(descArr[x.value])
        }
    })
    let output = durationArr[duration.value]+shapeArr[shape.value]+' '+actionArr[action.value]+' '+descList.join("'")+' '+levelArr[level.value];
    outputField.innerText = output;
}


function subSchoolSelect(a) {
    switch (a.value) {
        case 'abju':
            abjuSel.forEach(x =>
                x.classList.add('visible')
            )
            evocSel.forEach(x =>
                x.classList.remove('visible')
            )
            conjSel.forEach(x =>
                x.classList.remove('visible')
            )
            tranSel.forEach(x =>
                x.classList.remove('visible')
            )
            illuSel.forEach(x =>
                x.classList.remove('visible')
            )
            enchSel.forEach(x =>
                x.classList.remove('visible')
            )
            diviSel.forEach(x =>
                x.classList.remove('visible')
            )
            necrSel.forEach(x =>
                x.classList.remove('visible')
            )
            action.value = 0;
            break
        case 'evoc':
            abjuSel.forEach(x =>
                x.classList.remove('visible')
            )
            evocSel.forEach(x =>
                x.classList.add('visible')
            )
            conjSel.forEach(x =>
                x.classList.remove('visible')
            )
            tranSel.forEach(x =>
                x.classList.remove('visible')
            )
            illuSel.forEach(x =>
                x.classList.remove('visible')
            )
            enchSel.forEach(x =>
                x.classList.remove('visible')
            )
            diviSel.forEach(x =>
                x.classList.remove('visible')
            )
            necrSel.forEach(x =>
                x.classList.remove('visible')
            )
            action.value = 2;
            break
        case 'conj':
            abjuSel.forEach(x =>
                x.classList.remove('visible')
            )
            evocSel.forEach(x =>
                x.classList.remove('visible')
            )
            conjSel.forEach(x =>
                x.classList.add('visible')
            )
            tranSel.forEach(x =>
                x.classList.remove('visible')
            )
            illuSel.forEach(x =>
                x.classList.remove('visible')
            )
            enchSel.forEach(x =>
                x.classList.remove('visible')
            )
            diviSel.forEach(x =>
                x.classList.remove('visible')
            )
            necrSel.forEach(x =>
                x.classList.remove('visible')
            )
            action.value = 3;
            break
        case 'tran':
            abjuSel.forEach(x =>
                x.classList.remove('visible')
            )
            evocSel.forEach(x =>
                x.classList.remove('visible')
            )
            conjSel.forEach(x =>
                x.classList.remove('visible')
            )
            tranSel.forEach(x =>
                x.classList.add('visible')
            )
            illuSel.forEach(x =>
                x.classList.remove('visible')
            )
            enchSel.forEach(x =>
                x.classList.remove('visible')
            )
            diviSel.forEach(x =>
                x.classList.remove('visible')
            )
            necrSel.forEach(x =>
                x.classList.remove('visible')
            )
            action.value = 5;
            break
        case 'illu':
            abjuSel.forEach(x =>
                x.classList.remove('visible')
            )
            evocSel.forEach(x =>
                x.classList.remove('visible')
            )
            conjSel.forEach(x =>
                x.classList.remove('visible')
            )
            tranSel.forEach(x =>
                x.classList.remove('visible')
            )
            illuSel.forEach(x =>
                x.classList.add('visible')
            )
            enchSel.forEach(x =>
                x.classList.remove('visible')
            )
            diviSel.forEach(x =>
                x.classList.remove('visible')
            )
            necrSel.forEach(x =>
                x.classList.remove('visible')
            )
            action.value = 7;
            break
        case 'ench':
            abjuSel.forEach(x =>
                x.classList.remove('visible')
            )
            evocSel.forEach(x =>
                x.classList.remove('visible')
            )
            conjSel.forEach(x =>
                x.classList.remove('visible')
            )
            tranSel.forEach(x =>
                x.classList.remove('visible')
            )
            illuSel.forEach(x =>
                x.classList.remove('visible')
            )
            enchSel.forEach(x =>
                x.classList.add('visible')
            )
            diviSel.forEach(x =>
                x.classList.remove('visible')
            )
            necrSel.forEach(x =>
                x.classList.remove('visible')
            )
            action.value = 8;
            break
        case 'divi':
            abjuSel.forEach(x =>
                x.classList.remove('visible')
            )
            evocSel.forEach(x =>
                x.classList.remove('visible')
            )
            conjSel.forEach(x =>
                x.classList.remove('visible')
            )
            tranSel.forEach(x =>
                x.classList.remove('visible')
            )
            illuSel.forEach(x =>
                x.classList.remove('visible')
            )
            enchSel.forEach(x =>
                x.classList.remove('visible')
            )
            diviSel.forEach(x =>
                x.classList.add('visible')
            )
            necrSel.forEach(x =>
                x.classList.remove('visible')
            )
            action.value = 10;
            break
        case 'necr':
            abjuSel.forEach(x =>
                x.classList.remove('visible')
            )
            evocSel.forEach(x =>
                x.classList.remove('visible')
            )
            conjSel.forEach(x =>
                x.classList.remove('visible')
            )
            tranSel.forEach(x =>
                x.classList.remove('visible')
            )
            illuSel.forEach(x =>
                x.classList.remove('visible')
            )
            enchSel.forEach(x =>
                x.classList.remove('visible')
            )
            diviSel.forEach(x =>
                x.classList.remove('visible')
            )
            necrSel.forEach(x =>
                x.classList.add('visible')
            )
            action.value = 11;
            break
    }
    incantOutput()
}

school.addEventListener('change',function() {
    subSchoolSelect(this)
})

action.addEventListener('change',function() {
    incantOutput()
})

level.addEventListener('change',function() {
    incantOutput()
})

duration.addEventListener('change',function() {
    incantOutput()
})

shape.addEventListener('change',function() {
    incantOutput()
})

descInput.forEach(x => {
    x.addEventListener('change', function() {
        incantOutput()
    })
})

document.addEventListener('DOMContentLoaded',function() {
    incantOutput()
})