import React, {Component} from 'react'
import {departmentService} from "../SQL/DepartmentSql";


class Departments extends Component{
    constructor(props) {
        super(props);
        this.state = {
            departmentId: []
        }
        this.selectCountry = this.selectCountry.bind(this);
    }
    componentDidMount() {
        let urlServ = 'http://10.58.1.53:8181/department';
        departmentService.DepSelect(urlServ)
        .then(user => this.setState({departmentId: user}))

    }
    selectCountry = (e) => {
        let idx = e.target.selectedIndex;
        let dataset = e.target.options[idx].dataset;
        this.props.updateData(dataset.id);
        console.log('ID Code: ', dataset.id);
    }

    render() {
        const {departmentId} = this.state;

        let departmentIdList = departmentId.length > 0 && departmentId.map((item, i) => {
                return (
                    <option key={i} data-id={item.id}>{item.name}</option>
                )
            }, this);
            return(
                <select onChange={this.selectCountry}>
                    {departmentIdList}
                </select>
        )
    }
}
export default Departments;
