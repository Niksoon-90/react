import React, {Component} from 'react';
import log from './Login.module.css';
import back_logo from './../../resource/back_logs.jpg'
import logo from "./../../resource/logo_rzd.png"

import {userService} from './Authentication'




class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            urlServ: 'http://httpbin.org/post',  //Url server
            submitted: false,       // проверка на отправку
            alt:'Error',             //ошибка вывода img
            error: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

   handleChange(e){
        const {name, value} = e.target;
        this.setState({[name]: value})
        console.log(this.state)
   }

   handleSubmit(e){
        e.preventDefault();

        this.setState({submitted: true});
        const {username, password,  urlServ} = this.state;

       //Stop form invalid
       if(!(username && password)) return;

       userService.login(username, password, urlServ)
           .then(
               user =>
                   localStorage.setItem('type', JSON.stringify(user.type)),
                   localStorage.setItem('username', username),
                   this.props.history.push('/Account')
           )
           .catch(error => console.error('Error'));


        //
        // let user ={
        //      username: this.state.username,
        //      password: this.state.password
        //  }
        //  console.log(JSON.stringify(user))
        //
        //
        //
        // fetch(this.state.urlServ, {
        //     method: 'POST',
        //     headers: {
        //         'X-CSRF-Token': '3399ae85-6f45-4c3e-aff9-1343cdbcebcb',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(user)
        //     }).then(res =>res.json())
        //     .then(response => console.log('OK', JSON.stringify(response)))
        //     .catch(error => console.error('Error'));


   }

    render() {
        return(
            <div className={log.login}>
                <div className={log.image}>
                    <img src={back_logo} alt={this.state.alt}/>
                </div>
                <form onSubmit={this.handleSubmit} className={log.logos}>
                    <div className={log.rbar}>
                        <div className={log.imagelog}>
                            <img src={logo} alt={this.state.alt}/>
                        </div>
                        <div className={log.nameSys}>
                            <label>~ АС КОС ~</label>
                        </div>
                        <div className={log.inputr}>
                            <label htmlFor="username">Логин</label>
                            <input type="text" name="username"  onChange={this.handleChange}/>
                        </div>
                        <div className={log.inputr}>
                            <label>Пароль</label>
                            <input type="password" name="password"  onChange={this.handleChange}/>
                        </div>
                        <div className={log.submit}>
                            <button type="submit">Войти</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default Login;