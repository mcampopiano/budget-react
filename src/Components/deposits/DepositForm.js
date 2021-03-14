import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { Button, Form, FormGroup, Label, Input, ButtonGroup } from 'reactstrap';
import { DepositContext } from './DepositProvider';

export const DepositForm = (props) => {
    const history = useHistory()
    const budgetId = props.location.state.budgetId
    const {createDeposit} = useContext(DepositContext)
    const [deposit, setDeposit] = useState({"source": "", "amount": 0, "date": ""})

    const handleControlledInputChange = e => {
        const newDeposit = Object.assign({}, deposit)
        newDeposit[e.target.name] = e.target.value
        setDeposit(newDeposit)
    }

    const constructDeposit = () => {
        createDeposit({
            budgetId: parseInt(budgetId),
            source: deposit.source,
            amount: deposit.amount,
            date: deposit.date
        })
        .then(() => history.push("/"))
    }

    return (
        <Form>
            <FormGroup>
                <Label for="depositSource">Source</Label>
                <Input type="text" name="source" id="depositSource" placeholder="e.g. Paycheck" onChange={handleControlledInputChange}/>
            </FormGroup>
            <FormGroup>
                <Label for="exampleDepositAmt">Amount</Label>
                <Input type="number" name="amount" id="exampleDepositAmt" placeholder="e.g. 1000.00" onChange={handleControlledInputChange}/>
            </FormGroup>
            <FormGroup>
                <Label for="depositDate">Date of deposit</Label>
                <Input type="date" name="date" id="depositDate" onChange={handleControlledInputChange}/>
            </FormGroup>

            <ButtonGroup>
                <Button color="success"
                onClick={constructDeposit}>Submit</Button>
                <Button color="danger" onClick={() => history.goBack()}>Cancel</Button>
            </ButtonGroup>
        </Form>
    );
}