import React from 'react';
import { useHistory } from 'react-router';
import { Button, Form, FormGroup, Label, Input, ButtonGroup } from 'reactstrap';

export const DepositForm = (props) => {
    const history = useHistory()
    return (
        <Form>
            <FormGroup>
                <Label for="depositSource">Source</Label>
                <Input type="text" name="Source" id="depositSource" placeholder="e.g. Paycheck" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleDepositAmt">Amount</Label>
                <Input type="number" name="amount" id="exampleDepositAmt" placeholder="e.g. 1000.00" />
            </FormGroup>
            <FormGroup>
                <Label for="depositDate">Date of deposit</Label>
                <Input type="date" name="Date" id="depositDate" />
            </FormGroup>

            <ButtonGroup>
                <Button color="success">Submit</Button>
                <Button color="danger" onClick={() => history.goBack()}>Cancel</Button>
            </ButtonGroup>
        </Form>
    );
}