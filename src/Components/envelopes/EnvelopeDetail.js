import React from 'react';
import { useHistory } from 'react-router';
import {
    Table, Card, CardText, CardBody,
    CardTitle, Button, ButtonGroup
} from 'reactstrap';

export const EnvelopeDetail = (props) => {
    const history = useHistory()
    const envelope = props.location.state.chosenEnvelope
    const expenses = envelope.payment
    return (
        <div className="table envelope">
            <h1>{envelope.name}</h1>
            <section className="entries">
                <Table hover>
                    <thead>
                        <tr>
                            <th>Location</th>
                            <th>Amount</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            expenses.map(expense => (
                                <tr>
                                    <td>{expense.location}</td>
                                    <td>${expense.amount}</td>
                                    <td>{expense.date}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
                <Button color="success"
                onClick={() => history.push("/envelopes/purchase/form")}>Add purchase</Button>
            </section>
            <section className="totals">
                <Card>
                    <CardTitle tag="h5">Budget</CardTitle>
                    <CardBody>
                        <CardText>${envelope.budget}</CardText>
                    </CardBody>
                </Card>
                <Card>
                    <CardTitle tag="h5">Actual</CardTitle>
                    <CardBody>
                        <CardText>${envelope.total}</CardText>
                    </CardBody>
                </Card>
                <Card>
                    <CardTitle tag="h5">Remaining</CardTitle>
                    <CardBody>
                        <CardText>${envelope.budget-envelope.total}</CardText>
                    </CardBody>
                </Card>
            </section>
            <ButtonGroup>
                <Button color="danger">Delete envelope</Button>
            </ButtonGroup>
        </div>
    );
}
