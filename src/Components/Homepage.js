import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import {
    Table, Card, CardText, CardBody,
    CardTitle, Button
} from 'reactstrap';
import { BudgetContext } from './budgets/BudgetProvider';

export const Homepage = (props) => {
    const { getBudgetById } = useContext(BudgetContext)
    const history = useHistory()
    const budgetId = localStorage.getItem("budgetId")
    const [currentBudget, setBudget] = useState({})

    useEffect(() => {
        getBudgetById(budgetId)
            .then(setBudget)
    }, [])
    return (
        <>
            <div className="table income">
                <section className="entries">
                    <h1>Income</h1>
                    <Table hover>
                        <thead>
                            <tr>
                                <th>Source</th>
                                <th>Amount</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                currentBudget.income&&currentBudget.income.map(depsoit => {
                                    return <tr>
                                        <td>{depsoit.source}</td>
                                        <td>${depsoit.amount}</td>
                                        <td>{depsoit.date}</td>
                                    </tr>
                                })
                            }

                        </tbody>
                    </Table>
                    <Button color="success" onClick={() => history.push("/deposits/form", { budgetId: budgetId })}>Add deposit</Button>
                </section>
                <section className="totals">
                    <Card>
                        <CardTitle tag="h5">Estimated in</CardTitle>
                        <CardBody>
                            <CardText>${currentBudget.est_income}</CardText>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardTitle tag="h5">Actual in</CardTitle>
                        <CardBody>
                            <CardText>${currentBudget.actual_inc}</CardText>
                        </CardBody>
                    </Card>
                </section>
                <section className="budget">
                    <h2>Budget</h2>
                    <Card>
                        <CardTitle tag="h5">Total Budget</CardTitle>
                        <CardBody>
                            <CardText>${currentBudget.total_budget}</CardText>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardTitle tag="h5">Total spent</CardTitle>
                        <CardBody>
                            <CardText>${currentBudget.total_spent}</CardText>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardTitle tag="h5">Remaing budget</CardTitle>
                        <CardBody>
                            <CardText>${currentBudget.remaining_budget}</CardText>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardTitle tag="h5">Net total</CardTitle>
                        <CardBody>
                            <CardText>${currentBudget.net_total}</CardText>
                        </CardBody>
                    </Card>
                </section>
                <Button onClick={() => history.push("/budgets/form")}>Create new budget</Button>
            </div>
        </>
    );
}