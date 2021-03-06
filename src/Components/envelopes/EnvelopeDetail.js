import React from 'react';
import { Table } from 'reactstrap';

export const EnvelopeDetail = (props) => {
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
            </section>
        </div>
    );
}
