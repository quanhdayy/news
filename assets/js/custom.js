document.addEventListener('DOMContentLoaded', ()=>{
    fetch('layout.html')
    .then(response => response.text())
    .then(data => {
        var div = document.createElement('div')
        div.innerHTML = data
        document.querySelector('#header').innerHTML = div.querySelector('#header').innerHTML
        document.querySelector('footer.wpo-site-footer').innerHTML = div.querySelector('footer.wpo-site-footer').innerHTML

        if(window.location.href.includes('index.html')) document.querySelector('ul.navbar-nav li a[href="index.html"]').classList.add('active')
        else if(window.location.href.includes('news.html')) document.querySelector('ul.navbar-nav li a[href="news.html"]').classList.add('active')
        else if(window.location.href.includes('foods.html')) document.querySelector('ul.navbar-nav li a[href="foods.html"]').classList.add('active')
        else if(window.location.href.includes('business.html')) document.querySelector('ul.navbar-nav li a[href="business.html"]').classList.add('active')
        else if(window.location.href.includes('travels.html')) document.querySelector('ul.navbar-nav li a[href="travels.html"]').classList.add('active')
        else if(window.location.href.includes('blog.html')) document.querySelector('ul.navbar-nav li a[href="blog.html"]').classList.add('active')
        else if(window.location.href.includes('blog-single.html')) document.querySelector('ul.navbar-nav li a[href="blog-single.html"]').classList.add('active')

    })
})
