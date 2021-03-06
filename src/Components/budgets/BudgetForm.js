import React from 'react';
import { Button, Form, FormGroup, Label, Input, ButtonGroup } from 'reactstrap';

export const BudgetForm = (props) => {
    return (
        <Form>
            <FormGroup>
                <Label for="budget">Month and year of budget</Label>
                <Input type="month" name="budget" id="budget" />
            </FormGroup>
            <ButtonGroup>
                <Button color="success">Submit</Button>
                <Button color="danger">Cancel</Button>
            </ButtonGroup>
        </Form>
    );
}