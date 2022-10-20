// likes
{
  const postBlock = document.querySelector('.posts')

  postBlock.addEventListener('click', (event) => {
    const target = event.target
    const isLikeClick =
      target.classList.contains('inst_like') ||
      target.classList.contains('inst_like_fill')

    console.log(isLikeClick)
    if (isLikeClick) {
      const parent = target.parentNode
      console.log(parent)
      if (parent.getAttribute('like') == 'true') {
        parent.removeAttribute('like')
        parent.innerHTML = '<i class="inst_like"></i>'
      } else {
        parent.setAttribute('like', 'true')
        parent.innerHTML = '<i class="inst_like_fill" style="color: red"></i>'
      }
    }
  })
  console.log(postBlock)
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
    // Создаем блок колонку постов
    const postsColumn = document.createElement('div')
    // Создаем пост 1
    const postImg = defaultPostData.img + i
    const userPhoto = defaultPostData.user.photo + i
    const post = postHTMLGenerate(postImg, userPhoto, isHorizontal)
    //  Создаем пост 2
    const post2Img = defaultPostData.img + i + 1
    const user2Photo = defaultPostData.user.photo + i + 1
    const post2 = postHTMLGenerate(post2Img, user2Photo, isHorizontal)

    posts.push(post)
  }
  return posts
}

const postsBlock = document.querySelector('.posts')
// postsBlock.innerHTML = ''

postsGenerated.forEach((post) => {
  postsBlock.appendChild(post)
})
// 37:26  https://www.youtube.com/watch?v=i_oWtDMOUKg&list=PLjv_imdSY6452tOowkttNIetVLpHtPSQK&index=2
