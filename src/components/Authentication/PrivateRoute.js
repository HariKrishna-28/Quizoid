import React from 'react';
import { Redirect, Route } from 'react-router-dom'
import { useAuth } from "../contexts/AuthContexts"

export default function PrivateRoute({ component: Component, ...rest }) {

    const { currentUser } = useAuth()

    return (
        <Route

            {...rest}
            render={props => {
                return currentUser ? <Component {...props} /> : <Redirect to="/login" />
            }}

        ></Route>
    )
}