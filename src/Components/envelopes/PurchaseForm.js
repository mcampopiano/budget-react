import React from 'react';
import { Button, Form, FormGroup, Label, Input, ButtonGroup } from 'reactstrap';

export const EnvelopeForm = (props) => {
    return (
        <Form>
            <FormGroup>
                <Label for="locationName">Location</Label>
                <Input type="text" name="Location" id="locationName" placeholder="e.g. Kroger" />
            </FormGroup>
            <FormGroup>
                <Label for="examplePurchaseAmount">Amount</Label>
                <Input type="number" name="purchaseAmount" id="examplePurchaseAmount" placeholder="e.g. 400.00" />
            </FormGroup>
            <FormGroup>
                <Label for="dateOfPurchase">Date of purchase</Label>
                <Input type="date" name="purchaseDate" id="dateOfPurchase" placeholder="e.g. 400.00" />
            </FormGroup>

            <ButtonGroup>
                <Button color="success">Submit</Button>
                <Button color="danger">Cancel</Button>
            </ButtonGroup>
        </Form>
    );
}