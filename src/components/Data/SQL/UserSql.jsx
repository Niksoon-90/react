import React from 'react'

export const userService = {
    UsrSelect
}

 function UsrSelect(departmentId, firstname,  secondname, lastname, login, password, urlServ) {
    const requestOptions = {
        method: 'POST',
        header: {
            'X-CSRF-Token': '3399ae85-6f45-4c3e-aff9-1343cdbcebcb', // токен
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "departmentId": Number(departmentId),
            "firstname": firstname,
            "secondname": secondname,
            "lastname": lastname,
            "login": login,
            "password": password})
    };
    return fetch(urlServ, requestOptions)
        .then(user => user.json())
        .then(result => alert(JSON.stringify(result, null, 2)),
        console.log('Данные по пользователю отправлены'))
        //.then(function(res){ return res.json(); })
        // .then(user => {  ///нахуевертил
        //     if(user){
        //         console.log(user)
        //         console.log('Данные по пользователю отправлены')
        //     }
        //
        // });
}
