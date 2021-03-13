import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import {
    Table, Card, CardText, CardBody,
    CardTitle, Button, ButtonGroup
} from 'reactstrap';
import { EnvelopeContext } from './EnvelopeProvider';

export const EnvelopeDetail = (props) => {
    const history = useHistory()
    const envelope = props.location.state.chosenEnvelope
    const expenses = envelope.payment
    const {deleteEnvelope} = useContext(EnvelopeContext)
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
                <Button color="danger"
                onClick={() => {
                    if (window.confirm("Are you sure you want to delete? This cannot be undone")) deleteEnvelope(envelope).then(history.push("/"))
                }}>Delete envelope</Button>
                <Button color="secondary"
                onClick={() => props.history.push(`/envelopes/form/${envelope.id}`, {chosenEnvelope: envelope})}>Edit envelope
                </Button>
            </ButtonGroup>
        </div>
    );
}
