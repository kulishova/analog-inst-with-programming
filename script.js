// likes
{
  const postsBlock = document.querySelector('.posts')

  postsBlock.addEventListener('click', (event) => {
    const target = event.target

    if (target.contains('.post__action i.inst-like')
})
  console.log(postsBlock)

  item.addEventListener('click', () => {
    if (item.getAttribute('like') == 'true') {
      item.removeAttribute('like')
      item.innerHTML = '<i class="inst_like"></i>'
    } else {
      item.setAttribute('like', 'true')
      item.innerHTML = '<i class="inst_like_fill" style="color: red"></i>'
    }
  })
}

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

  for (let i = 1; i <= postCount / 2; i++) {
    // Создаем пост 1
    const postImg = defaultPostData.img + i
    const userPhoto = defaultPostData.user.photo + i
    const post = postHTMLGenerate(postImg, userPhoto, isHorizontal)

    //  Создаем пост 2
    const post2Img = defaultPostData.img + i + 1
    const user2Photo = defaultPostData.user.photo + i + 1
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

const postsGenerated = postGeneration(50)

const postsBlock = document.querySelector('.posts')
postsBlock.innerHTML = ''

postsGenerated.forEach((post) => {
  postsBlock.appendChild(post)
})
