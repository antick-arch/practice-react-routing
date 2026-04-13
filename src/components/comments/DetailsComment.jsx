import React from 'react';
import { useLoaderData } from 'react-router';

const DetailsComment = () => {
    const commentDetails = useLoaderData();
    console.log(commentDetails);
    return (
        <div>
            <p>{commentDetails.body}</p>
        </div>
    );
};

export default DetailsComment;