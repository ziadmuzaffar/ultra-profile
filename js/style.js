document.querySelector('.navbar .navbar-toggler img').onclick = function () {
    this.classList.toggle('open-navbar-nav')
    if (this.classList.contains('open-navbar-nav')) {
        this.src = 'img/close.png'
        document.querySelector('.navbar .navbar-nav').style.display = 'block'
    } else {
        this.src = 'img/open.png'
        document.querySelector('.navbar .navbar-nav').style.display = 'none'
    }
}

document.querySelectorAll('.portfolio .shuffle li').forEach(li => {
    li.addEventListener('click', function (e) {
        e.target.parentElement.querySelectorAll('.active').forEach(element => {
            element.classList.remove('active')
        });
        e.target.classList.add('active')
        let shuffle = e.target.dataset.shuffle
        document.querySelectorAll('.portfolio .images .port').forEach(part => {
            if (shuffle == 'all') {
                part.style.display = 'block'
            } else if (part.dataset.shuffle == shuffle) {
                part.style.display = 'block'
            } else {
                part.style.display = 'none';
            }
        })
    })
})

document.querySelectorAll('.navbar .navbar-nav .nav-item .nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.target.parentElement.parentElement.querySelectorAll('a').forEach(element => {
            element.classList.remove('active')
        });
        e.target.classList.add('active')
    })
})