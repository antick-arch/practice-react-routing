import React from 'react';
import { useLoaderData } from 'react-router';

const User1 = () => {
    const usr = useLoaderData();
    console.log(usr);
    return (
        <div>
            <h2>This is User 1</h2>
        </div>
    );
};

export default User1;