import React from 'react';
import { Button, Form, FormGroup, Label, Input, ButtonGroup } from 'reactstrap';

export const EnvelopeForm = (props) => {
    return (
        <Form>
            <FormGroup>
                <Label for="envelopeName">Name</Label>
                <Input type="text" name="Name" id="envelopeName" placeholder="e.g. Groceries" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleBudgetAmount">Monthly budget</Label>
                <Input type="number" name="budget" id="exampleBudgetAmount" placeholder="e.g. 400.00" />
            </FormGroup>

            <ButtonGroup>
                <Button color="success">Submit</Button>
                <Button color="danger">Cancel</Button>
            </ButtonGroup>
        </Form>
    );
}