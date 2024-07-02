import React,{useState, useEffect} from 'react';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import {createPost, updatePost} from '../../actions/posts';
import classes from "./Form.module.css";

const Form=({currentId, setCurrentId})=>{
    const [postData, setPostData]=useState({creator: '', title: '', message: '', tags: '', selectedFile: ''});
    const post = useSelector((state) => currentId ? state.posts.find((p)=>p._id === currentId):null);
    const dispatch = useDispatch();
    useEffect(()=>{
        if(post) setPostData(post);
    },[post])
    const handleSubmit = (e) => {
        e.preventDefault();
        if(currentId){
            dispatch(updatePost(currentId, postData))
        }else{
            dispatch(createPost(postData))
        }
    }
    const clear = () => {

    }
    return(
        <form className={classes.form} autoComplete="off" noValidate onSubmit={handleSubmit}>
            <label>Creating a Memory</label>
            <input type="text" placeholder="creator" value={postData.creator} onChange={(e)=>setPostData({...postData, creator: e.target.value})} />
            <input type="text" placeholder="title" value={postData.title} onChange={(e)=>setPostData({...postData, title: e.target.value})} />
            <input type="text" placeholder="message" value={postData.message} onChange={(e)=>setPostData({...postData, message: e.target.value})} />
            <input type="text" placeholder="tags" value={postData.tags} onChange={(e)=>setPostData({...postData, tags: e.target.value})} />
            <div><FileBase type="file" multiple={false} onDone={({base64})=>setPostData({...postData, selectedFile: base64})} /></div>
            <button className={classes.button1} type="submit">submit</button>
            <button className={classes.button2} onClick={clear}>Clear</button>
        </form>
    )
}
export default Form;