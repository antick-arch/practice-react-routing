import { useLoaderData } from 'react-router';

const PostDetails = () => {
    const postDetails = useLoaderData();
    console.log(postDetails);
    return (
        <div>
            <p>{postDetails.body}</p>
        </div>
    );
};

export default PostDetails;