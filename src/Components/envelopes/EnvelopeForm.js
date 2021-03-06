import React from 'react';
import { useHistory } from 'react-router';
import { Button, Form, FormGroup, Label, Input, ButtonGroup } from 'reactstrap';

export const EnvelopeForm = (props) => {
    const history = useHistory()
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
                <Button color="danger" onClick={() => history.goBack()}>Cancel</Button>
            </ButtonGroup>
        </Form>
    );
}