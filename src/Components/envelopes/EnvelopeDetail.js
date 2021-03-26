import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import {
    Table, Card, CardText, CardBody,
    CardTitle, Button, ButtonGroup
} from 'reactstrap';
import { EnvelopeContext } from './EnvelopeProvider';
import { formatDate } from '../DateFormatter'
import "./Envelope.css"

export const EnvelopeDetail = (props) => {
    const history = useHistory()
    const [envelope, setEnvelope] = useState({})
    const { deleteEnvelope, deletePurchase, getEnvelopeById, envelopes } = useContext(EnvelopeContext)

    /* Deleting a payment alters the state of envelopes, but does not change the url. 
    This useEffect is wathching the state of envelopes and will run every time that changes
    so that the data rendered to the DOM represents the actual state of the database.*/
    useEffect(() => {
        getEnvelopeById(props.match.params.envelopeId)
            .then(setEnvelope)
    }, [props.match.params.envelopeId, envelopes])

    return (
        <div className="table envelope">
            <header className="envelope--header">
                <h1>{envelope.name}</h1>
                <section className="totals--envelope">
                    <Card className="envelope--card">
                        <CardTitle tag="h5">Budget</CardTitle>
                        <CardBody>
                            <CardText>${envelope.budget}</CardText>
                        </CardBody>
                    </Card>
                    <Card className="envelope--card">
                        <CardTitle tag="h5">Actual</CardTitle>
                        <CardBody>
                            <CardText>${envelope.total}</CardText>
                        </CardBody>
                    </Card>
                    <Card className="envelope--card">
                        <CardTitle tag="h5">Remaining</CardTitle>
                        <CardBody>
                            <CardText>${envelope.budget - envelope.total}</CardText>
                        </CardBody>
                    </Card>
                </section>
            </header>
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
                            envelope.payment && envelope.payment.map(expense => {
                                if (expense.budget === parseInt(localStorage.getItem("budgetId"))) {


                                    return <tr key={expense.id}>
                                        <td>{expense.location}</td>
                                        <td>${expense.amount}</td>
                                        <td>{formatDate(expense.date)} <Button color="danger"
                                            onClick={() => {
                                                if (window.confirm("Are you sure you want to delete this purchase? This action cannot be undone.")) {
                                                    deletePurchase(expense)
                                                }
                                            }}>X</Button></td>

                                    </tr>
                                }
                            })
                        }
                    </tbody>
                </Table>
                <Button color="success"
                    onClick={() => history.push("/envelopes/purchase/form", { chosenEnvelope: envelope })}>Add purchase</Button>
            </section>

            <ButtonGroup className="envelope--btns">
                <Button color="secondary"
                    onClick={() => props.history.push(`/envelopes/form/${envelope.id}`, { chosenEnvelope: envelope })}>Edit envelope
                </Button>
                <Button color="danger"
                    onClick={() => {
                        if (window.confirm("Are you sure you want to delete? This cannot be undone")) deleteEnvelope(envelope).then(history.push("/"))
                    }}>Delete envelope</Button>
            </ButtonGroup>
        </div>
    );
}
