import React from 'react'

export const departmentService = {
    DepSelect
}

function DepSelect(urlServ){
    console.log(urlServ)
    const requestOptions = {
        method: 'GET',
        headers: {
            'X-CSRF-Token': '3399ae85-6f45-4c3e-aff9-1343cdbcebcb', // токен
            'Content-Type': 'application/json'
        }
    };
    return fetch(urlServ, requestOptions)
        .then(user => user.json())
        .then(user => {if(user)return user})
       // .then(user =>console.log(user.name))
}