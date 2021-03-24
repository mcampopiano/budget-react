import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import {
    Table, Card, CardText, CardBody,
    CardTitle, Button, Progress
} from 'reactstrap';
import { BudgetContext } from './budgets/BudgetProvider';
import { DepositContext } from './deposits/DepositProvider';
import { formatDate } from "./DateFormatter"
import "./Homepage.css"
import { EnvelopeContext } from './envelopes/EnvelopeProvider';

export const Homepage = (props) => {
    const { getBudgetById } = useContext(BudgetContext)
    const { deleteDeposit, deposits } = useContext(DepositContext)
    const { getEnvelopes, envelopes } = useContext(EnvelopeContext)
    const history = useHistory()
    const budgetId = localStorage.getItem("budgetId")
    const [currentBudget, setBudget] = useState({})


    useEffect(() => {
        getBudgetById(budgetId)
            .then(setBudget)
    }, [deposits])

    useEffect(() => {
        getEnvelopes()
    }, [])


    return (
        <>
            <div className="homepage">
                <section className="income">
                    <h1 className="header">Income</h1>
                    <section className="entries">
                        <Table hover className="table--homepage">
                            <thead>
                                <tr>
                                    <th>Source</th>
                                    <th>Amount</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    currentBudget.income && currentBudget.income.map(deposit => {
                                        return <tr key={deposit.id}>
                                            <td>{deposit.source}</td>
                                            <td>${deposit.amount}</td>
                                            <td>{formatDate(deposit.date)}</td>
                                            <Button color="danger"
                                                onClick={() => {
                                                    if (window.confirm("Are you sure you want to delete this purchase? This action cannot be undone.")) {
                                                        deleteDeposit(deposit)
                                                    }
                                                }}>X</Button>
                                        </tr>
                                    })
                                }

                            </tbody>
                            <Button color="success" onClick={() => history.push("/deposits/form", { budgetId: budgetId })}>Add deposit</Button>
                        </Table>
                        <article className="totals">
                            <Card className="totals--card">
                                <CardTitle tag="h5">Estimated in</CardTitle>
                                <CardBody>
                                    <CardText>${currentBudget.est_income}</CardText>
                                </CardBody>
                            </Card>
                            <Card className="totals--card">
                                <CardTitle tag="h5">Actual in</CardTitle>
                                <CardBody>
                                    <CardText>${currentBudget.actual_inc}</CardText>
                                </CardBody>
                            </Card>
                        </article>
                    </section>
                </section>
                <section className="budget">
                    <h2 className="header">Budget</h2>
                    <section className="budget--items">
                        <Card className="budget--item">
                            <CardTitle tag="h5">Total Budget</CardTitle>
                            <CardBody>
                                <CardText>${currentBudget.total_budget}</CardText>
                            </CardBody>
                        </Card>
                        <Card className="budget--item">
                            <CardTitle tag="h5">Total spent</CardTitle>
                            <CardBody>
                                <CardText>${currentBudget.total_spent}</CardText>
                            </CardBody>
                        </Card>
                        <Card className="budget--item">
                            <CardTitle tag="h5">Remaing budget</CardTitle>
                            <CardBody>
                                <CardText>${currentBudget.remaining_budget}</CardText>
                            </CardBody>
                        </Card>
                        <Card className="budget--item">
                            <CardTitle tag="h5">Net total</CardTitle>
                            <CardBody>
                                <CardText>${currentBudget.net_total}</CardText>
                            </CardBody>
                        </Card>
                    </section>
                </section>
            </div>
            <div className="progressBars">
                {
                    envelopes.map(envelope => {
                        if (envelope.user.key === localStorage.getItem('budget_user_id')) {
                            let totalSpent = 0
                            envelope.payment.forEach(payment => totalSpent += payment.amount)
                            return <>
                                <div className="text-center">${totalSpent} of ${envelope.budget}</div>
                            </>
                        }
                    })
                }
            </div>
        </>
    );
}