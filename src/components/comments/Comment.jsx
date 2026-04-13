import React from 'react';
import { Link } from 'react-router';
const Comment = ({comment}) => {

    return (
        <div style={{border: '1px solid black', padding: '5px', marginBottom: '10px'}}>
            <h2>{comment.name}</h2>
            <Link to={`/comments/${comment.id}`}>
            <button>Show details</button>
            </Link>
        </div>
    );
};

export default Comment;