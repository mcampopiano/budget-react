import React, { useContext, useRef } from 'react';
import { useHistory } from 'react-router';
import { Button, Form, FormGroup, Label, Input, ButtonGroup } from 'reactstrap';
import { BudgetContext } from './BudgetProvider';

export const BudgetForm = (props) => {
    const {createBudget} = useContext(BudgetContext)
    const history = useHistory()

    const month = useRef(null)
    const test = useRef(null)
    
    return (
        <Form>
            <FormGroup>
                <Label for="budget">Month and year of budget</Label>
                <Input ref={month} type="month" name="budget" id="budget" />
                <Label for="budget">Test</Label>
                <Input  type="text" ref={test} id="budget" />
            </FormGroup>
            <ButtonGroup>
                <Button color="success" onClick={() => console.log(test.current.value)}>Submit</Button>
                <Button color="danger" onClick={() => history.goBack()}>Cancel</Button>
            </ButtonGroup>
        </Form>
    );
}