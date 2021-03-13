import React from "react"
import { Route } from "react-router-dom"
import { BudgetForm } from "./budgets/BudgetForm"
import { BudgetProvider } from "./budgets/BudgetProvider"
import { DepositForm } from "./deposits/DepositForm"
import { EnvelopeDetail } from "./envelopes/EnvelopeDetail"
import { EnvelopeForm } from "./envelopes/EnvelopeForm"
import { EnvelopeProvider } from "./envelopes/EnvelopeProvider"
import { PurchaseForm } from "./envelopes/PurchaseForm"
import { Homepage } from "./Homepage"



export const ApplicationViews = props => (
    <>
        <Route exact path="/">
            <Homepage />
        </Route>
        <Route exact path="/envelopes/:envelopeId(\d+)" render={
            props => <EnvelopeDetail {...props}/>
        }/> 
            
        {/* </Route> */}
        <EnvelopeProvider>
            <Route exact path="/envelopes/form">
                <EnvelopeForm />
            </Route>
        </EnvelopeProvider>
        <Route exact path="/envelopes/purchase/form">
            <PurchaseForm />
        </Route>
        <BudgetProvider>
            <Route exact path="/budgets/form">
                <BudgetForm />
            </Route>
        </BudgetProvider>
        <Route exact path="/deposits/form">
            <DepositForm />
        </Route>
    </>
)