import React from "react"
import {Route} from "react-router-dom"
import { Homepage } from "./Homepage"



export const ApplicationViews = props => (
    <>
    <Route exact path="/">
        <Homepage />
    </Route>
    </>
)