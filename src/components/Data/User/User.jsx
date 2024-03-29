import React, {Component} from 'react'
import log from "../../Login/Login.module.css";
import {userService} from '../SQL/UserSql'
import Departments from '../Department/Departments'

class User extends Component{
    constructor(props){
        super(props);
        this.state = {
            departmentId: '',
            firstname: '',
            secondname: '',
            lastname: '',
            login: '',
            password: '',
          //  urlServ: 'http://httpbin.org/post'
            urlServ: 'http://10.58.1.53:8181/people/newperson'
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {

    }
    componentWillMount() { // перед рендеренгом компонента

    }

    handleChange(e){
        const {name, value} = e.target;
        this.setState({[name]: value})
        console.log(this.state)
    }
    handleSubmit(e){
        e.preventDefault();

        this.setState({submitted: true});
        const {departmentId, firstname,  secondname, lastname, login, password, urlServ} = this.state;

        if(!(departmentId && firstname && secondname && lastname && login && password)) return alert('Заполните все поля');


        userService.UsrSelect(departmentId, firstname,  secondname, lastname, login, password, urlServ)
            .then(
                user =>
                    localStorage.setItem('usersss', JSON.stringify(user)),

            )
            .catch(error => console.error('Error'));
    }

    updateData = (value) => {
        this.setState({ departmentId: value })
        console.log(this.state.departmentId)
    }


    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>

                    {/*<div className={log.inputr}>*/}
                    {/*    <label htmlFor="departmentId">Департамент</label>*/}
                    {/*    <input type="text" name="departmentId"  onChange={this.handleChange}/>*/}
                    {/*</div>*/}
                    <div className={log.inputr}>
                        <Departments  updateData={this.updateData}/>
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