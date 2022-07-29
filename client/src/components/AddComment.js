import React from 'react';

const AddComment = () => {
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