import classes from './Navbar.module.css';
import React from 'react';
import calender from '../../images/calender.png';

const Navbar=()=>{
    return(
        <nav className={classes.navbar}>
            <div>Memories</div>
            <img src={calender} alt="calender" />
        </nav>
    )
}
export default Navbar;