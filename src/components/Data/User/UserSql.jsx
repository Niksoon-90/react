import React from 'react'

export function UsrSelect(departmentid, firstname,  secondname, lastname, login,password, urlServ) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'X-CSRF-Token': '3399ae85-6f45-4c3e-aff9-1343cdbcebcb', // токен
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({departmentid, firstname,  secondname, lastname, login,password})
    };
    return fetch(urlServ, requestOptions)
    //.then(handleResponse)
        .then(user => {  ///нахуевертил
            if(user){
                console.log('Данные по пользователю отправлены')
            }
            return user;
        });
}
