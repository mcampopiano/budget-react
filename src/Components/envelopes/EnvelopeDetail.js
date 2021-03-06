import React from 'react';
import { useHistory } from 'react-router';
import {
    Table, Card, CardText, CardBody,
    CardTitle, Button, ButtonGroup
} from 'reactstrap';

export const EnvelopeDetail = (props) => {
    const history = useHistory()
    return (
        <div className="table envelope">
            <h1>Groceries</h1>
            <section className="entries">
                <Table hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Location</th>
                            <th>Amount</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Kroger</td>
                            <td>$58.67</td>
                            <td>03/07/1992</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Publix</td>
                            <td>$99.99</td>
                            <td>09/07/1994</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Crai</td>
                            <td>$15.51</td>
                            <td>09/02/2020</td>
                        </tr>
                    </tbody>
                </Table>
                <Button color="success"
                onClick={() => history.push("/envelopes/purchase/form")}>Add purchase</Button>
            </section>
            <section className="totals">
                <Card>
                    <CardTitle tag="h5">Budget</CardTitle>
                    <CardBody>
                        <CardText>$400</CardText>
                    </CardBody>
                </Card>
                <Card>
                    <CardTitle tag="h5">Actual</CardTitle>
                    <CardBody>
                        <CardText>${58.67+99.99+15.51}</CardText>
                    </CardBody>
                </Card>
                <Card>
                    <CardTitle tag="h5">Remaining</CardTitle>
                    <CardBody>
                        <CardText>${400-(58.67+99.99+15.51)}</CardText>
                    </CardBody>
                </Card>
            </section>
            <ButtonGroup>
                <Button color="danger">Delete envelope</Button>
            </ButtonGroup>
        </div>
    );
}
