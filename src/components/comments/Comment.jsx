import React from 'react';
import { Link, useNavigate } from 'react-router';
const Comment = ({comment}) => {
    const navigate = useNavigate();
    const navigateHandler =()=>{
        navigate(`/comments/${comment.id}`)
    }
    return (
        <div style={{border: '1px solid black', padding: '5px', marginBottom: '10px'}}>
            <h2>{comment.name}</h2>
            <Link to={`/comments/${comment.id}`}>
            <button>Show details</button>
            </Link>
            <button onClick={navigateHandler}>show details - {comment.id}</button>
            
        </div>
    );
};

export default Comment;