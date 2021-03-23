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
                            bills.map(bill => (
                                <tr key={bill.id}>
                                    <td>{bill.biller}</td>
                                    <td>${bill.expected_amount}</td>
                                    <td>{bill.due_date}</td>
                                    <td>${bill.payments[0].amount}</td>
                                    <td>{formatDate(bill.payments[0].date_paid)}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </section>
            <section className="totals">
                <Card className="totals--card">
                    <CardTitle tag="h5">Budget</CardTitle>
                    <CardBody>
                        <CardText>$500</CardText>
                    </CardBody>
                </Card>
                <Card className="totals--card">
                    <CardTitle tag="h5">Actual</CardTitle>
                    <CardBody>
                        <CardText>$300</CardText>
                    </CardBody>
                </Card>
                <Card className="totals--card">
                    <CardTitle tag="h5">Remaining</CardTitle>
                    <CardBody>
                        <CardText>$200</CardText>
                    </CardBody>
                </Card>
            </section>
        </>
    )
}