import React from 'react';
import { useHistory } from 'react-router';
import {
    Table, Card, CardText, CardBody,
    CardTitle, Button
} from 'reactstrap';

export const Homepage = (props) => {
    const history = useHistory()
    const budgetId = localStorage.getItem("budgetId")
    return (
        <>
            <div className="table income">
                <section className="entries">
                    <h1>Income</h1>
                    <Table hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Source</th>
                                <th>Amount</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Paycheck</td>
                                <td>$1,502.25</td>
                                <td>03/01/2021</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Paycheck</td>
                                <td>$1,510.52</td>
                                <td>03/07/2021</td>
                            </tr>
                        </tbody>
                    </Table>
                    <Button color="success" onClick={() => history.push("/deposits/form", {budgetId: budgetId})}>Add deposit</Button>
                </section>
                <section className="totals">
                    <Card>
                        <CardTitle tag="h5">Estimated in</CardTitle>
                        <CardBody>
                            <CardText>$5,000</CardText>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardTitle tag="h5">Actual in</CardTitle>
                        <CardBody>
                            <CardText>${1502.25+1510.52}</CardText>
                        </CardBody>
                    </Card>
                </section>
                <section className="budget">
                    <h2>Budget</h2>
                    <Card>
                        <CardTitle tag="h5">Total Budget</CardTitle>
                        <CardBody>
                            <CardText>$4,000</CardText>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardTitle tag="h5">Total spent</CardTitle>
                        <CardBody>
                            <CardText>$2,307.97</CardText>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardTitle tag="h5">Remaing budget</CardTitle>
                        <CardBody>
                            <CardText>$1692.03</CardText>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardTitle tag="h5">Actual in - out</CardTitle>
                        <CardBody>
                            <CardText>$704.80</CardText>
                        </CardBody>
                    </Card>
                </section>
                <Button onClick={() => history.push("/budgets/form")}>Create new budget</Button>
            </div>
        </>
    );
}