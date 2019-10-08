import React, {Component} from 'react'
import Header from "../Header/Header"
import {AgGridReact} from "ag-grid-react";
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-balham.css'

class Account extends Component{
    constructor(props){
        super(props);
        this.state ={
            columnDefs: [{
                headerName: "№", field:"number", width:50, sortable: true
            },{
                headerName: "Должность", field:"position", suppressSizeToFit:true, filter: true //supp запрет на изменение столбца
            },{
                headerName: "Фамилия, имя, отчество", field:"name",suppressSizeToFit:true,
            },{
                headerName: "Таб. номер", field:"number_tub",autoSizeColumns:true, width:120
            },{
                headerName: "Кол-во дней", field:"days", width:100
            },{
                headerName: "Запланированная", field:"date_zap" ,width:100
            },{
                headerName: "Примечание от", field:"prim_ot", width:100
            },{
                headerName: "Примечание по", field:"prim_po", width:100
            }],
            defaultColDef:{resizable: true},
            rowData: [{
                number: "01", position: "Технолог I категории", name: 'Корнеев Андрей Романович', number_tub: '588000085', days: 15,  date_zap: '12.11.2019', prim_po: '22.12.2019'
            }, {
                number: "02", position: "Технолог I категории", name: 'Корнеев Андрей Романович', number_tub: '588000085', days: 15,  date_zap: '12.11.2019', prim_po: '22.12.2019'
            }, {
                number: "03", position: "Технолог I категории", name: 'Корнеев Андрей Романович', number_tub: '588000085', days: 15,  date_zap: '12.11.2019', prim_po: '22.12.2019'
            }, {
                number: "04", position: "Технолог I категории", name: 'Корнеев Андрей Романович', number_tub: '588000085', days: 15,  date_zap: '12.11.2019', prim_po: '22.12.2019'
            }, {
                number: "05", position: "Технолог I категории", name: 'Корнеев Андрей Романович', number_tub: '588000085', days: 15,  date_zap: '12.11.2019', prim_po: '22.12.2019'
            }, {
                number: "06", position: "Технолог I категории", name: 'Корнеев Андрей Романович', number_tub: '588000085', days: 15,  date_zap: '12.11.2019', prim_po: '22.12.2019'
            }, {
                number: "07", position: "Технолог I категории", name: 'Корнеев Андрей Романович', number_tub: '588000085', days: 15,  date_zap: '12.11.2019', prim_po: '22.12.2019'
            }, {
                number: "08", position: "Технолог I категории", name: 'Корнеев Андрей Романович', number_tub: '588000085', days: 15,  date_zap: '12.11.2019', prim_po: '22.12.2019'
            }]
        }
    }
    render() {
        return(
            <div>
                <div>
                    <h1>Добро пожаловать в Нашу систему.</h1>
                </div>
                <Header/>
                <div>
                    <button>Добавить</button>
                </div>
                <div className="ag-theme-balham"
                style={{ height: '300px', width: 'auto' }}>
                    <AgGridReact
                    columnDefs = {this.state.columnDefs}
                    rowData = {this.state.rowData}>
                    </AgGridReact>
                </div>
            </div>
        )
    }
}
export  default Account;