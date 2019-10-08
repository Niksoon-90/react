import React from 'react'
import {Route, Redirect} from 'react-router-dom'


export const PrivateRout = ({component: Component, ...rest}) => {

    return(
        <Route{...rest}
              render={props => {
                  if ((localStorage.getItem('username')) == 1) {
                      return (<Component {...props}/>)
                  } else if((localStorage.getItem('username')) == 2){
                      return (<Component {...props}/>)
                  }else {
                          return (
                      <Redirect
                               to={{
                               pathname: "/",
                               state: {form: props.location}
                               }}
                            />)
                  }
              }
           // // isAccount()? //функция доступа к роут
           //        ((localStorage.getItem('username')) == 1)? (
           //      <Component {...props}/>
           //  ) : (
           //      <Redirect
           //          to={{
           //          pathname: "/",
           //          state: {form: props.location}
           //          }}
           //      />
           //      )
            }
        />
    );
}



