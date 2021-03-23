import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import {
    Table, Card, CardText, CardBody,
    CardTitle, Button, ButtonGroup
} from 'reactstrap';
import { formatDate } from '../DateFormatter'
import { BillContext } from './BillProvider';

export const BillList = (props) => {
    const { bills, getBills } = useContext(BillContext)

    let totalBudget = 0
    let actualSpent = 0


    useEffect(() => {
        getBills()
    }, [])

    return (
        <>
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
                                                <td>{formatDate(bill.payments[0].date_paid)}</td> </>
                                            
                                            }
                                            else {
                                                return <Button color="success">Add payment</Button>
                                            }
                                        })
                                        : <Button color="success">Add payment</Button>
                                            
                                            
                                    }

                                </tr>
                            })
                        }
                    </tbody>
                </Table>
            </section>
            <section className="totals">
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
        </>
    )
}