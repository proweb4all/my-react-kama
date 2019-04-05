import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';


// let c1 = "item";
// let c2 = "active";
// // "item active"
// let classes = c1 + " " + c2;
// let classesNew = `${s.item} ${c2}`;


const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to='/messages' activeClassName={s.active}>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/news' activeClassName={s.active}>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/settings' activeClassName={s.active}>Settings</NavLink>
        </div>
    </nav>
}

export default Navbar;