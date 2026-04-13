import React, { Suspense, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import Comments2 from '../comments2/Comments2';
const Comment = ({comment}) => {
    const navigate = useNavigate();
    const navigateHandler =()=>{
        navigate(`/comments/${comment.id}`)
    }
    const [showDetails, setShowDetails] = useState(false);
    const commentsPromise = fetch(`https://jsonplaceholder.typicode.com/comments/${comment.id}`).then((res)=>res.json());
    return (
        <div style={{border: '1px solid black', padding: '5px', marginBottom: '10px'}}>
            <h2>{comment.name}</h2>
            <Link to={`/comments/${comment.id}`}>
            <button>Show details</button>
            </Link>
            <button onClick={navigateHandler}>show details - {comment.id}</button>
            <button onClick={()=>setShowDetails(!showDetails)}>{showDetails?'details showing' : 'details not showing'}</button>
            {
                showDetails && <Suspense fallback={<span>wait kor</span>}>
                    <Comments2 commentsPromise={commentsPromise}></Comments2>
                </Suspense>
            }
        </div>
    );
};

export default Comment;