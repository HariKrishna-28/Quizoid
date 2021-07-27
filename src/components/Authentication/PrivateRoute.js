import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom'
import { GlobalContext } from '../contexts/GlobalContext';

export default function PrivateRoute({ component: Component, ...rest }) {

    const { currentUser } = useContext(GlobalContext)

    return (
        <Route

            {...rest}
            render={props => {
                return currentUser ? <Component {...props} /> : <Redirect to="/login" />
            }}

        ></Route>
    )
}