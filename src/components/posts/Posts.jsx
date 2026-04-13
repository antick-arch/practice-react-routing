import React from 'react';
import { useLoaderData } from 'react-router';
import Post from './Post';

const Posts = () => {
    const postsData = useLoaderData();
    return (
        <div>
            <h2>Post length : {postsData.length}</h2>
            <div style={{
                border: '1px solid red',
                padding: '10px',
                display: 'flex',
                gap: '10px',
                flexDirection: 'column'
            }}>
                {
                    postsData.map((post) => <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;