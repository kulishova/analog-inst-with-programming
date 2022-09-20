// likes
{
    const likes = document.querySelectorAll('.post__actions .post__action:first-child')
    console.log(likes)
    
    likes.forEach((item, idx) => {
        item.addEventListener('click', () => {
            if (item.getAttribute('like') == 'true') {
                item.removeAttribute('like')
                item.innerHTML = '<i class="inst_like"></i>'
            } else {
                item.setAttribute('like', 'true')
                item.innerHTML = '<i class="inst_like_fill" style="color: red"></i>'
            }
        })
    })
}

// Posts render
const defaultPostData = {
    img: 'https://placeimg.com/378/570/any',
    user: {
        photo: 'https://i.pravatar.cc/240?img=',
        nickname: '@user_profil'
    }
}


// Функция генерации постов
function postGeneration(postCount) {
    const posts =[]
    for (let i=1; i < 10; i++) {
        // Создаем блок div с классом Post 
        const post = document.createElement('div')
        post.className = 'post'
        post.innerHTML = `Hello`

        posts.push(post)
    }

    console.log(posts)
}

postGeneration()