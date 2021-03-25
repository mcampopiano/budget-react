import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import {
    Table, Card, CardText, CardBody,
    CardTitle, Button, ButtonGroup
} from 'reactstrap';
import { formatDate } from '../DateFormatter'
import { BillContext } from './BillProvider';
import "./Bills.css"

export const BillList = (props) => {
    const { bills, getBills, removePayment } = useContext(BillContext)

    let totalBudget = 0
    let actualSpent = 0


    useEffect(() => {
        getBills()
    }, [])

    return (
        <>
        <header className="bills--header">
            <h1>Recurring Bills</h1>
            <section className="bills--totals">
                <Card className="totals--card">
                    <CardTitle tag="h5">Budget</CardTitle>
                    <CardBody>
                        <CardText>${totalBudget}</CardText>
                    </CardBody>
                </Card>
                <Card className="totals--card">
                    <CardTitle tag="h5">Actual</CardTitle>
                    <CardBody>
                        <CardText>${actualSpent}</CardText>
                    </CardBody>
                </Card>
                <Card className="totals--card">
                    <CardTitle tag="h5">Remaining</CardTitle>
                    <CardBody>
                        <CardText>${(totalBudget - actualSpent).toFixed(2)}</CardText>
                    </CardBody>
                </Card>
            </section>
            </header>
            <section className="table">
                <Table hover>
                    <thead>
                        <tr>
                            <th>Biller</th>
                            <th>Expected amount</th>
                            <th>Due date</th>
                            <th>Actual Amount</th>
                            <th>Date paid</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bills.map(bill => {
                                if (bill.user.key === localStorage.getItem('budget_user_id')) {


                                    totalBudget += bill.expected_amount


                                    return <tr key={bill.id}>
                                        <td>{bill.biller}</td>
                                        <td>${bill.expected_amount}</td>
                                        <td>{bill.due_date}</td>
                                        {
                                            bill.payments.length > 0
                                                ? bill.payments.map(payment => {
                                                    if (payment.budget === parseInt(localStorage.getItem("budgetId"))) {
                                                        actualSpent += payment.amount
                                                        return <> <td>${bill.payments[0].amount}</td>
                                                            <td>{formatDate(bill.payments[0].date_paid)}
                                                                <Button color="danger" className="btn--small"
                                                                    onClick={() => {
                                                                        if (window.confirm("Are you sure you want to delete this payment? This action cannot be undone.")) {
                                                                            removePayment(bill.payments[0].id)
                                                                        }
                                                                    }}>X</Button></td> </>

                                                    }
                                                    else {
                                                        return <Button color="success"
                                                            onClick={() => props.history.push(`/payments/form/${bill.id}`)}>Add payment</Button>
                                                    }
                                                })
                                                : <Button
                                                    onClick={() => props.history.push(`/payments/form/${bill.id}`)} color="success">Add payment</Button>


                                        }

                                    </tr>
                                }
                            })
                        }
                    </tbody>
                </Table>
                <Button color="success" onClick={() => props.history.push("/bills/form")}>Add biller</Button>
            </section>

        </>
    )
}