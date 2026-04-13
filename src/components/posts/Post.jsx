import React from 'react';
import { Link } from 'react-router';

const Post = ({post}) => {
    return (
        <div style={{
                border: '1px solid blue',
                padding: '5px',
            }}>
            <h2>{post.title}</h2>
            <Link to={`${post.id}`}>
            <button>More Details</button>
            </Link>
        </div>
    );
};

export default Post;