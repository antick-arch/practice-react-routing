import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';

const DetailsComment = () => {
    const commentDetails = useLoaderData();
    const navigate = useNavigate();
    let {commentId} = useParams();
   
    console.log('detais param',commentId);
    return (
        <div>
            <p>{commentDetails.body}</p>
            <button onClick={()=>navigate(-1)}>Go back</button>
        </div>
    );
};

export default DetailsComment;