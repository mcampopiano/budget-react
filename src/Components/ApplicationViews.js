import React from "react"
import {Route} from "react-router-dom"
import { EnvelopeDetail } from "./envelopes/EnvelopeDetail"
import { Homepage } from "./Homepage"



export const ApplicationViews = props => (
    <>
    <Route exact path="/">
        <Homepage />
    </Route>
    <Route exact path="/envelopes/groceries">
        <EnvelopeDetail />
    </Route>
    </>
)