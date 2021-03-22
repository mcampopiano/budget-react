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
        </>
    )
}