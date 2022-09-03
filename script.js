// likes
const likes = document.querySelectorAll('.post__actions .post__action:first-child')
console.log(likes)

likes.forEach((item, idx) => {
    item.innerHTML = '<i class="inst_like_fill" style="color: red"></i>'
})

