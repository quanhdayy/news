document.addEventListener('DOMContentLoaded', () => {
    fetch('layout.html')
        .then(response => response.text())
        .then(data => {
            var div = document.createElement('div')
            div.innerHTML = data
            document.querySelector('div.header').innerHTML = div.querySelector('div.header').innerHTML
            document.querySelector('#menu').innerHTML = div.querySelector('#menu').innerHTML
        })
})