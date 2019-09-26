import React, {Component} from 'react';
import head from './Header.module.css'
import logo from './../../resource/logo_rzd.png'



class Header extends Component{
    // constructor(props){
    //     super(props);
    //
    // }
    render() {
        return(
            <div className={head}>
                <img src={logo} alt='Error image'/>
            </div>
        )
    }
}
export default Header;