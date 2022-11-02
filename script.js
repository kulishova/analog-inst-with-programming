// likes
{
  const postsBlock = document.querySelector('.posts')

  // Делигирование события родительскому блоку с классом posts
  postsBlock.addEventListener('click', (event) => {
    // Проверка элемента по которому конкретно кликнули, что это именно сердечко
    const target = event.target
    const isLikeClick =
      target.classList.contains('inst_like') ||
      target.classList.contains('inst_like_fill')
    // Если кликнули по сердечку, то ставим или убираем лайк
    if (isLikeClick) {
      const parent = target.parentNode
      if (parent.getAttribute('like') == 'true') {
        parent.removeAttribute('like')
        parent.innerHTML = '<i class="inst_like"></i>'
      } else {
        parent.setAttribute('like', 'true')
        parent.innerHTML = '<i class="inst_like_fill" style="color: red"></i>'
      }
    }
  })
}

// Posts generation and post render
{
  // Posts render
  const defaultPostData = {
    img: 'https://placeimg.com/378/570/any?img=',
    user: {
      photo: 'https://i.pravatar.cc/240?img=',
      nickname: '@user_profil',
    },
  }

  // Функция генерации постов
  function postGeneration(postCount = 1) {
    const posts = []
    let isHorizontal = false

    for (let i = 1; i <= postCount / 2; i++) {
      // Создаем пост 1
      const postImg = defaultPostData.img + i
      const userPhoto = defaultPostData.user.photo + i
      const post = postHTMLGenerate(postImg, userPhoto, isHorizontal)
      //  Создаем пост 2
      const post2Img = defaultPostData.img + i + 1
      const user2Photo = defaultPostData.user.photo + i
      const post2 = postHTMLGenerate(post2Img, user2Photo, !isHorizontal)

      // Создаем блок колонку постов
      const postsColumn = document.createElement('div')
      postsColumn.appendChild(post)
      postsColumn.appendChild(post2)

      posts.push(postsColumn)

      isHorizontal = !isHorizontal
    }
    return posts
  }
  function postHTMLGenerate(postImg, userPhoto, isHorizontal) {
    // Создаем блок div с классом Post
    const post = document.createElement('div')
    post.className = isHorizontal ? 'post post_horizontal' : 'post'
    post.innerHTML = `
<div class="post__img">
<img src="${postImg}" alt="">
</div>
<div class="post__footer">
   <div class="post__user">
       <div class="user user__row">
           <div  class="user__avatar"> 
               <img src="${userPhoto}" alt="Avatar">
           </div>
               <div class="user__nickname">@user_name</div>
       </div>
   </div>
   <div class="post__actions">
       <div class="post__action">
           <i class="inst_like"></i>
       </div>
       <div class="post__action">
           <i class="inst_comment"></i>
       </div>
       <div class="post__action">
           <i class="inst_plane"></i>
       </div>
   </div>
</div>
</div>
`
    return post
  }

  // Количество постов
  const postsGenerated = postGeneration(10)

  const postsBlock = document.querySelector('.posts')
  postsBlock.innerHTML = ''

  postsGenerated.forEach((post) => {
    postsBlock.appendChild(post)
  })
}

// Create post
{
  const createButton = document.querySelector('.new-post-btn')
  const modal = document.querySelector('.modal__wrap')
  const modalElements = {
    text: modal.querySelector('.modal__text'),
    img: modal.querySelector('#link'),
    hashtag: modal.querySelector('#hashtag'),
    saveBtn: modal.querySelector('#save-post'),
  }
  const { text, img, hashtag, saveBtn } = modalElements
  // Отслеживаем клик по кнопке New Post, после клика по ней открываем модальное окно
  createButton.addEventListener('click', () => {
    if (modal.classList.contains('hidden')) {
      modal.classList.remove('hidden')
    }
  })

  // Закрываем модальное окно, если кликнули по темной области
  modal.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal__wrap')) {
      modal.classList.add('hidden')
    }
  })

  // Сохраняем пост
  saveBtn.addEventListener('click', () => {
    if (isHaveErrors()) return

    buildNewPostHtnl(img.value)
  })

  // Функция проверки формы на ошибки
  function isHaveErrors() {
    let isError = false
    text.classList.remove('modal__error')
    img.classList.remove('modal__error')

    if (!text.value) {
      text.classList.add('modal__error')
      isError = true
    }
    if (!img.value) {
      img.classList.add('modal__error')
      isError = true
    }

    return isError
  }

  // Создаем кода нового HTML поста
  function buildNewPostHtnl(postPhotoURL) {
    const lastColumn = document.querySelector('.posts > div:last-child')
    const lastColumnPosts = lastColumn.querySelectorAll('.post')

    console.log(lastColumnPosts)

    postHTMLGenerate(postPhotoURL.value, 'https://i.pravatar.cc/240', false)
  }
}
