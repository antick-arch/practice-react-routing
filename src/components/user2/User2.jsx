import React, { use } from 'react';

const User2 = ({dataPromise}) => {
    const dta = use(dataPromise);
    console.log(dta);
    return (
        <div>
            <h2>this is user 2</h2>
        </div>
    );
};

export default User2;