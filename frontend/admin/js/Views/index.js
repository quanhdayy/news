function defaultFunc() {
    var divtoNew = document.querySelector('.news__info').cloneNode(true)
    // hàm hiển thị bài viết 
    function show_news() {
        document.querySelector('.news__list').innerHTML = ''
        fetch('../../backend/index.php?controller=new')
            .then(response => response.json())
            .then(data => {
                data.forEach(item => {
                    var divNew = divtoNew.cloneNode(true)
                    divNew.querySelector('h4 a').textContent = item.title
                    divNew.querySelector('.price').textContent = '#'+item.id
                    divNew.querySelector('span.item.date').textContent = item.date
                    divNew.querySelector('img').src = item.img
                    // divNew.querySelectorAll('a').forEach(a => a.href = `new.html?id=` + item.id)
                    // **thêm bình luận và chỉnh sửa max content
                    document.querySelector('.news__list').appendChild(divNew)
                });
            })

    }

    // thực thi func 
    show_news()
}

document.addEventListener('DOMContentLoaded', defaultFunc)