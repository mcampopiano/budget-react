import React from "react"
import { Route } from "react-router-dom"
import { BillerForm } from "./bills/BillerForm"
import { BillList } from "./bills/BillList"
import { BillProvider } from "./bills/BillProvider"
import { PaymentForm } from "./bills/PaymentForm"
import { BudgetForm } from "./budgets/BudgetForm"
import { BudgetList } from "./budgets/BudgetList"
import { BudgetProvider } from "./budgets/BudgetProvider"
import { DepositForm } from "./deposits/DepositForm"
import { DepositProvider } from "./deposits/DepositProvider"
import { EnvelopeDetail } from "./envelopes/EnvelopeDetail"
import { EnvelopeForm } from "./envelopes/EnvelopeForm"
import { PurchaseForm } from "./envelopes/PurchaseForm"
import { Homepage } from "./Homepage"



export const ApplicationViews = props => (
    <>
        <BudgetProvider>
            <DepositProvider>
                <Route exact path="/" render={
                    props => <Homepage {...props} />
                } />
            </DepositProvider>
        </BudgetProvider>

        <Route exact path="/envelopes/:envelopeId(\d+)" render={
            props => <EnvelopeDetail {...props} />
        } />
        <Route exact path="/envelopes/form" render={
            props => <EnvelopeForm {...props} />
        } />
        <Route exact path="/envelopes/form/:envelopeId(\d+)" render={
            props => <EnvelopeForm {...props} />
        } />
        <Route exact path="/envelopes/purchase/form" render={
            props => <PurchaseForm {...props} />
        } />
        <BudgetProvider>
            <Route exact path="/budgets/form">
                <BudgetForm />
            </Route>
            <Route exact path="/budgets/saved" render ={
                props => <BudgetList {...props} />
            } />
        </BudgetProvider>
        <DepositProvider>
            <Route exact path="/deposits/form" render={
                props => <DepositForm {...props} />
            } />
        </DepositProvider>

        <BillProvider>
            <Route exact path="/bills" render={
                props => <BillList {...props} />
            } />
            <Route exact path="/bills/form" render={
                props => <BillerForm {...props} />
            } />
            <Route exact path="/payments/form/:billerId(\d+)" render={
                props => <PaymentForm {...props} />
            } />
        </BillProvider>
    </>
)