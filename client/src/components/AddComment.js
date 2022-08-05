import React, {useEffect} from 'react';

const AddComment = ({postid, handleNewComment}) => {

    useEffect(() => {
        postComment();
    }, [])

    const postComment = () => {

        const formData = JSON.stringify({
            username: "Anonymous"
        })

        fetch(`http://localhost:5000/comments/${postid}`, {method: 'POST', body: formData, headers:{'Content-Type': 'application/json'}})
            .then(r => r.json())
            .then(data => {
                console.log(data);
                handleNewComment(data.comment);
            })
    }

    return (
        <div className='add-comment-container'>
            <textarea placeholder='What are your thoughts?'/>

            <div className='submit-comment-container'>
                <button type='submit' className='submit-comment'>Comment</button>
            </div>
        </div>
    )
}

export default AddComment;