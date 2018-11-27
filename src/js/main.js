window.addEventListener('load', () => {

    AOS.init({
        disable: false,
        startEvent: 'DOMContentLoaded',
        initClassName: 'aos-init',
        animatedClassName: 'aos-animate',
        useClassNames: false,
        offset: 120,
        delay: 0,
        duration: 400,
        easing: 'ease',
        once: false,
        mirror: false,
        anchorPlacement: 'top-bottom',
    })

});

window.onscroll = () => {

    DisplayStyleValue(20, document.getElementById('Up'));
    FixedNavBarEnable(50, document.getElementById('navbar'));
}

function ScrollAnimation(e) {
    const classname = e.srcElement.id
    e.preventDefault()
    document.querySelector(`.${classname}`).scrollIntoView({ behavior: 'smooth' });

    let BrowserWith = window.innerWidth;

    if (BrowserWith < 1200) {
        ShowNavBarResponsive()
    }

}

function ScrollUp() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' })
}

function DisplayStyleValue(value, element) {

    let scroll = {
        BODY: document.body.scrollTop,
        DOCUMENT_ELEMENT: document.documentElement.scrollTop
    };

    if (scroll.BODY > value || scroll.DOCUMENT_ELEMENT > value)
        element.style.display = 'block';
    else
        element.style.display = 'none';
}

function FixedNavBarEnable(value, element) {

    let scroll = {
        BODY: document.body.scrollTop,
        DOCUMENT_ELEMENT: document.documentElement.scrollTop
    };

    if (scroll.BODY > value || scroll.DOCUMENT_ELEMENT > value)
        element.setAttribute("class", "nav-fixed nav-fixed-bc animated")
    else
        element.setAttribute("class", "nav-fixed animated")
}

function ShowNavBarResponsive() {

    let navbar = document.getElementById('navbar')
    let imgNavResponsive = document.getElementById('btn-navbar-responsive')

    let flag = navbar.classList.toString().includes("bounceInDown")

    if (flag) {
        RemoveClass(navbar, "bounceInDown")
        AddClass(navbar, "bounceOutUp")
        RemoveClass(navbar, "bounceOutUp")
        imgNavResponsive.src = 'https://image.flaticon.com/icons/svg/189/189666.svg'
    } else {
        AddClass(navbar, "bounceInDown")
        navbar.style.display = 'block'
        imgNavResponsive.src = 'https://image.flaticon.com/icons/svg/189/189678.svg'
    }
}

function AddClass(element, _class) {
    element.classList.add(_class)
}

function RemoveClass(element, _class) {
    setTimeout(() => {
        element.classList.remove(_class)
        element.style.display = 'none'
    }, 900)
}