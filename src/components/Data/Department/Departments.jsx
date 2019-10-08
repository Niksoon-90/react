import React, {Component} from 'react'
import log from "../../Login/Login.module.css";

class Departments extends Component{
    constructor(props) {
        super(props);
        this.state = {
            urlServ: 'http://10.58.1.53:8181/people/newperson',
            departmentId: ''
    }
    }
    render() {
        return(

                <label htmlFor="departmentId">Департамент</label>

        )
    }
}
export default Departments;
