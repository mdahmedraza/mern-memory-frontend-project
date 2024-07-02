import React, {Fragment, useEffect, useState} from 'react';
import Navbar from './components/Navbar/Navbar';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import {useDispatch} from 'react-redux';
import {getPosts} from './actions/posts';
import classes from './App.module.css';

const App=()=>{
    const [currentId, setCurrentId]=useState(null);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getPosts());
    }, [dispatch])
    return(
        <Fragment>
            <Navbar />
            <section className={classes.section}>
                <Posts setCurrentId={setCurrentId} />
                <Form currentId={currentId} setCurrentId={setCurrentId} />
            </section>
        </Fragment>
    )
}
export default App;