import React, {Component} from 'react'
import log from "../../Login/Login.module.css";

class User extends Component{
    constructor(props){
        super(props);
        this.state = {
            departmentid: '',
            firstname: '',
            secondname: '',
            lastname: '',
            login: '',
            password: '',
            urlServ: 'http://10.58.1.53:8181'
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        for (let i=0; i<=10000; i++){
            console.log(i )
            console.log(i)
        }
    }
    componentWillMount() { // перед рендеренгом компонента
        for (let i=0; i<=10000; i++){
            console.log(i, '=i')
        }
    }

    handleChange(e){
        const {name, value} = e.target;
        this.setState({[name]: value})
        console.log(this.state)
    }
    handleSubmit(e){
        e.preventDefault();
        this.setState({submitted: true});
        const {departmentid, firstname,  secondname, lastname, login,password, urlServ} = this.state;

        if(!(departmentid && firstname && secondname && lastname && login && password)) return;


    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className={log.inputr}>
                        <label htmlFor="departmentid">Департамент</label>
                        <input type="text" name="departmentid"  onChange={this.handleChange}/>
                    </div>
                    <div className={log.inputr}>
                        <label htmlFor="firstname">Имя</label>
                        <input type="text" name="firstname"  onChange={this.handleChange}/>
                    </div>
                    <div className={log.inputr}>
                        <label htmlFor="secondname">Фамилия</label>
                        <input type="text" name="secondname"  onChange={this.handleChange}/>
                    </div>
                    <div className={log.inputr}>
                        <label htmlFor="lastname">Отчество</label>
                        <input type="text" name="lastname"  onChange={this.handleChange}/>
                    </div>
                    <div className={log.inputr}>
                        <label htmlFor="login">Логин</label>
                        <input type="text" name="login"  onChange={this.handleChange}/>
                    </div>
                    <div className={log.inputr}>
                        <label htmlFor="password">Пароль</label>
                        <input type="text" name="password"  onChange={this.handleChange}/>
                    </div>
                    <div className={log.submit}>
                        <button type="submit">Зарегистрировать</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default User;