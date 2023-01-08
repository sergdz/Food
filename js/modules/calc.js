function calc() {
    let height,
    sex,
    weight,
    total = document.querySelector('.calculating__result > span'),
    activity,
    age;

if (localStorage.getItem('activity')) {
    activity = localStorage.getItem('activity')
} else {
    activity = 1.375
    localStorage.setItem('activity', 1.375);
}
if (localStorage.getItem('sex')) {
    sex = localStorage.getItem('sex')
} else {
    sex = 'female'
    localStorage.setItem('sex', 'female');
}

function initLocalSettings(selector, activeClass) {
    const element = document.querySelectorAll(selector); 

    element.forEach(elem => {
        elem.classList.remove(activeClass);

        if(elem.getAttribute('data-activity') ===  localStorage.getItem('activity')) {
            elem.classList.add(activeClass)
        }
        if(elem.getAttribute('id') ===  localStorage.getItem('sex')) {
            elem.classList.add(activeClass)
        }
    })
}

initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active')
initLocalSettings('#gender div', 'calculating__choose-item_active')

function culc() {
    if (!sex || !weight || !activity || !age) {
        total.textContent = '0';
        return
    }

    if (sex === 'female') {
        total.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * height)) * activity);
    } else {
        total.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * activity);
    };
};
culc()


function getStaticElem(selector, activeClass) {
    let items = document.querySelectorAll(selector)
    items.forEach(item => item.addEventListener('click', (e) => {
        if (e.target.getAttribute('data-activity')) {
            activity = +e.target.getAttribute('data-activity')
            localStorage.setItem('activity', +e.target.getAttribute('data-activity'))
        } else {
            sex = e.target.getAttribute('id');
            localStorage.setItem('sex', e.target.getAttribute('id'))
        }
        items.forEach(item => item.classList.remove(activeClass));
        e.target.classList.add(activeClass);
        culc()
    }));

};


function getDynamicItem(selector) {
    let dynamicItem = document.querySelector(selector);



    dynamicItem.addEventListener('input', (e) => {
        if (dynamicItem.value.match(/\D/g)) {
            dynamicItem.style.border = '2px solid red';
            dynamicItem.style.boxShadow = '2px 2px 10px red';
        } else {
            dynamicItem.style.border = 'none';
            dynamicItem.style.boxShadow = 'none';
        }
        switch (e.target.id) {
            case 'height':
                height = +e.target.value
                console.log(height);
                break;
            case 'weight':
                weight = +e.target.value
                break;
            case 'age':
                age = +e.target.value
                break;


        }
        culc()
    });

}

getStaticElem('#gender div', 'calculating__choose-item_active')
getStaticElem('.calculating__choose_big div', 'calculating__choose-item_active')
getDynamicItem('#height')
getDynamicItem('#weight')
getDynamicItem('#age')
}

export default calc;