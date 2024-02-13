const commentFormHandler = async (event) => {

    event.preventDefault();

    const postComment = document.querySelector('#comment').value.trim();
    const postId = document.querySelector('button').dataset.postId;

    if (postComment) {

        const commentResponse = await fetch(`/api/comments/${postId}`, {

            method: 'POST',
            body: JSON.stringify({ postComment }),
            headers: {

                'Content-Type': 'application/json',

            },

        });

        if (commentResponse.ok) {

            document.location.replace(`/post/${postId}`);

        } else {

            alert('Oh no, looks like there were some problems adding this comment! Please try again.');

        }

    }

};

document
    .querySelector('.addCommentForm')
    .addEventListener('submit', commentFormHandler);