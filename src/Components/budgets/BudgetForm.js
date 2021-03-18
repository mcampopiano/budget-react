import React, { useContext, useRef } from 'react';
import { useHistory } from 'react-router';
import { Button, Form, FormGroup, Label, Input, ButtonGroup } from 'reactstrap';
import { BudgetContext } from './BudgetProvider';

export const BudgetForm = () => {
    const {createBudget} = useContext(BudgetContext)
    const history = useHistory()

    const date = useRef(null)
    const income = useRef(null)

    const constructNewBudget = () => {
        const [year, month] = date.current.value.split("-")
       createBudget({
            month: month,
            year: year,
            estIncome: parseInt(income.current.value)
        })
        .then(res => res.json())
        .then(res => localStorage.setItem("budgetId", res.id))
        .then(() => history.push("/"))
    }
    
    return (
        <Form>
            <FormGroup>
                <Label for="budget">Month and year of budget</Label>
                <Input innerRef={date} type="month" name="budget" id="budget" />
                <Label for="income">Estimated monthly income</Label>
                <Input  type="number" innerRef={income} id="income" />
            </FormGroup>
            <ButtonGroup>
                <Button color="success" onClick={constructNewBudget}>Submit</Button>
                <Button color="danger" onClick={() => history.goBack()}>Cancel</Button>
            </ButtonGroup>
        </Form>
    );
}