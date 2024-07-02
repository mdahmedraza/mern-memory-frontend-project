import React from 'react';
import {useSelector} from 'react-redux';
import Post from './Post/Post';

const Posts=({setCurrentId})=>{
    const posts =  useSelector((state)=>state.posts);
    return(
        !posts.length?<h2>Loading....</h2>:(
            <div>
                {posts.map((post)=>(
                    <div key={post._id}>
                        <Post post={post} setCurrentId={setCurrentId} />
                    </div>
                ))}
            </div>
        )
    )
}
export default Posts;