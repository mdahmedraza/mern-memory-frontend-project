import React from 'react';
import { EllipsisHorizontalIcon, HandThumbUpIcon, TrashIcon } from '@heroicons/react/24/solid'
import moment from 'moment';
import classes from './Post.module.css';

const Post=({post, setCurrentId})=>{
    return(
        <div className={classes.post}>
            <section>
                <label>{post.creator}</label>
                <button onClick={()=>setCurrentId(post._id)}>
                <EllipsisHorizontalIcon className={classes.icon} />
                </button>
            </section>
            <img src={post.selectedFile} alt="img" />
            <label>{moment(post.createdAt).fromNow()}</label><br />
            <label>{post.tags.map((tag)=>`#${tag}`)}</label>
            <h4>{post.title}</h4>
            <label>{post.message}</label>
            <section>
                <div className={classes.footer}>
                    <HandThumbUpIcon className={classes.icon} />
                    <label>Like</label>
                </div>
                <div className={classes.footer}>
                    <TrashIcon className={classes.icon} />
                    <label>DELETE</label>
                </div>
            </section>
        </div>
    )
}
export default Post;

/*
import React from 'react';
import { EllipsisHorizontalIcon, HandThumbUpIcon, TrashIcon } from '@heroicons/react/24/solid'
import memory from '../../../images/memory.png';
import classes from './Post.module.css';

const Post=()=>{
    return(
        <div className={classes.post}>
            <section>
                <label>JSMastery</label>
                <EllipsisHorizontalIcon className={classes.icon} />
            </section>
            <img src="https://usaherald.com/wp-content/uploads/2018/12/trump-21.png" alt="img" />
            <label>#happy new year.</label>
            <h4>Had a Lot of Fun!</h4>
            <section>
                <div className={classes.footer}>
                    <HandThumbUpIcon className={classes.icon} />
                    <label>Like</label>
                </div>
                <div className={classes.footer}>
                    <TrashIcon className={classes.icon} />
                    <label>DELETE</label>
                </div>
            </section>
        </div>
    )
}
export default Post;
*/