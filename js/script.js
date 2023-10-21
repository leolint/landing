function mainButtonScroll () {
    const button = document.querySelector('.mobileGame-mainButton')
    const sectionToScroll = document.querySelector('.gameElements')
    button.addEventListener('click' , function () {
        sectionToScroll.scrollIntoView({block: "center", behavior: "smooth"})
    })
}

mainButtonScroll()