import React from "react"
import {Route} from "react-router-dom"
import { BudgetForm } from "./budgets/BudgetForm"
import { EnvelopeDetail } from "./envelopes/EnvelopeDetail"
import { EnvelopeForm } from "./envelopes/EnvelopeForm"
import { PurchaseForm } from "./envelopes/PurchaseForm"
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
    <Route exact path="/envelopes/purchase/form">
        <PurchaseForm />
    </Route>
    <Route exact path="/budgets/form">
        <BudgetForm />
    </Route>
    </>
)