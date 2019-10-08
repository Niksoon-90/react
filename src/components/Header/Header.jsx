import React, {Component} from 'react';
import head from './Header.module.css'
import logo from './../../resource/logo_rzd.png'
import {NavLink} from "react-router-dom";
import User from "../Data/User/User";



class Header extends Component{
    // constructor(props){
    //     super(props);
    //
    // }
    render() {
        return(
            <div className={head}>
                <NavLink to="/User">Пользователи</NavLink>
            </div>
        )
    }
}
export default Header;