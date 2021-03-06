import React from 'react';
import {
    Table, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

export const Homepage = (props) => {
    return (
        <>
            <div className="table income">
                <section className="entries">
                    <h1>Income</h1>
                    <Table striped>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Amount</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>$1,502.25</td>
                                <td>03/01/2021</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>$1,510.52</td>
                                <td>03/07/2021</td>
                            </tr>
                        </tbody>
                    </Table>
                    <Button color="success">Add deposit</Button>
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
            </div>
        </>
    );
}