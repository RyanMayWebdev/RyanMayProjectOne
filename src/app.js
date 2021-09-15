const form = document.querySelector('.commentForm');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = form.querySelector('#name');
    const comment = form.querySelector('#comment');
    const newComment = document.createElement('article');
    newComment.innerHTML = `<article class="comment">
                                <div class="profileImage"><img src="./assets/profile-default.jpg"alt="A profile image"></div>
                                <div class="commentText">
                                    <h3></h3>
                                    <p></p>
                                </div>
                            </article>`;

    const commentHeader = newComment.querySelector('h3');
    const commentParagraph = newComment.querySelector('p');
    commentHeader.textContent = `${currentDate()} by ${name.value}`;
    commentParagraph.textContent = comment.value;
    form.insertAdjacentElement('beforebegin',newComment);
    form.reset();
})

const currentDate = () => {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let dateString = date.toLocaleDateString(undefined, options)
    dateString = dateString.replace(',','');
    return dateString;
}