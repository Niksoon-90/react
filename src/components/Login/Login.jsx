import React, {Component} from 'react';
import log from './Login.module.css';
import back_logo from './../../resource/back_logo.jpg'
import logo from "./../../resource/logo_rzd.png"



class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            urlServ: '10.58.1.53:3000',  //Url server
            submitted: false,       // проверка на отправку
            alt:'Error'             //ошибка вывода img
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
        const {username,  urlServ} = this.state;


        if(!(username )) return;

        console.log(username)
        console.log(urlServ)
        fetch(urlServ, {
            method: 'Post',
            body: JSON.stringify(username),
            headers: {
                'Content-Type': 'aplication/json'
            }
            }).then(res =>res.json())
            .then(response => console.log('OK', JSON.stringify(response)))
            .catch(error => console.error('Error'));

   }

    render() {
        return(
            <div className={log.login}>
                <div>
                    <img src={back_logo} className={log.back_logo} alt={this.state.alt}/>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <img src={logo} alt={this.state.alt}/>
                        <label htmlFor="username">Email</label>
                        <input type="text" name="username"  onChange={this.handleChange}/>
                        <label>Password</label>
                        <input type="text" name="password"  onChange={this.handleChange}/>
                        {/*<label> Forgot Rassword</label>*/}
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default Login;