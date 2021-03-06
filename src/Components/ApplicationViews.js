import React from "react"
import {Route} from "react-router-dom"
import { EnvelopeDetail } from "./envelopes/EnvelopeDetail"
import { EnvelopeForm } from "./envelopes/EnvelopeForm"
import { Homepage } from "./Homepage"



export const ApplicationViews = props => (
    <>
    <Route exact path="/">
        <Homepage />
    </Route>
    <Route exact path="/envelopes/groceries">
        <EnvelopeDetail />
    </Route>
    <Route exact path="/envelopes/form">
        <EnvelopeForm />
    </Route>
    </>
)