import React from 'react';
import { useLoaderData } from 'react-router';
import Comment from './Comment';

const Comments = () => {
    const commentsData = useLoaderData();
    return (
        <div>
            <h2>This is comments section</h2>
            {
                commentsData.map((comment)=><Comment key={comment.id} comment={comment}></Comment>)
            }
        </div>
    );
};

export default Comments;