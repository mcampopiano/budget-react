import React from 'react';
import { useHistory } from 'react-router';
import { Button, Form, FormGroup, Label, Input, ButtonGroup } from 'reactstrap';

export const BudgetForm = (props) => {
    const history = useHistory()
    return (
        <Form>
            <FormGroup>
                <Label for="budget">Month and year of budget</Label>
                <Input type="month" name="budget" id="budget" />
            </FormGroup>
            <ButtonGroup>
                <Button color="success">Submit</Button>
                <Button color="danger" onClick={() => history.goBack()}>Cancel</Button>
            </ButtonGroup>
        </Form>
    );
}