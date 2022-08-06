import React, {useEffect, useState} from 'react';

const AddComment = ({postid, handleNewComment}) => {
    const [text, setText] = useState("")

    const postComment = (e) => {
        e.preventDefault();
        const formData = JSON.stringify({
            username: "Anonymous",
            text: text,
        })

        console.log(formData)

        fetch(`http://localhost:5000/api/comments/${postid}`, {method: 'POST', body: formData, headers:{'Content-Type': 'application/json'}})
            .then(r => r.json())
            .then(data => {
                handleNewComment(data.comment)
                setText("");
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <form onSubmit={postComment} className='add-comment-container'>
            <textarea placeholder='What are your thoughts?' onChange={e => setText(e.target.value)}/>

            <div className='submit-comment-container'>
                <button type='submit' className='submit-comment'>Comment</button>
            </div>
        </form>
    )
}

export default AddComment;