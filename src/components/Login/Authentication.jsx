import React from'react';

export const userService = {
    login
}

function login(username, password, urlServ){
    const requestOptions = {
        method: 'POST',
        headers: {
            'X-CSRF-Token': '3399ae85-6f45-4c3e-aff9-1343cdbcebcb',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password})
    };
    return fetch(urlServ, requestOptions)
        //.then(handleResponse)
        .then(user => {  ///нахуевертил
            if(user){
                console.log('GGG')
        }
            return user;
    });
}

// export function isAccount() {
//     console.log(localStorage.getItem('username'));
//     if(localStorage.getItem('username') == 1) return true;
// }



