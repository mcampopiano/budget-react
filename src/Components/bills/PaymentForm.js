import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Button, Form, FormGroup, Label, Input, ButtonGroup } from 'reactstrap';
import { BillContext } from './BillProvider';

export const PaymentForm = (props) => {
    const {addPayment} = useContext(BillContext)
    const [payment, setPayment] = useState({amount: 0, datePaid: 0})

    /* Edit mode is not currently implemented, but this variable is here so the conditional logic 
    for the save button can be put in place without an error.*/
    const editMode = false

    /* This function is used to set the state of the payment object when this is called.
    It is called on change of the input fields, and sets the value of key corresponding with
    the name on the input to the value of the input.*/
    const handleControlledInputChange = e => {
        const newPayment = Object.assign({}, payment)
        newPayment[e.target.name] = e.target.value
        setPayment(newPayment)
    }

    const constructPayment = () => {
        addPayment({
            billerId: parseInt(props.match.params.billerId),
            budgetId: parseInt(localStorage.getItem("budgetId")),
            amount: payment.amount,
            datePaid: payment.datePaid
        })
        .then(() => props.history.push("/bills"))
    }

    return (
        <Form>
            <FormGroup>
                <Label for="amount">Amount</Label>
                <Input type="number" name="amount" id="amount" value={payment.amount} onChange={handleControlledInputChange} />
            </FormGroup>
            <FormGroup>
                <Label for="datePaid">Date paid</Label>
                <Input type="date" name="datePaid" id="datePaid" onChange={handleControlledInputChange} />
            </FormGroup>
    
            <ButtonGroup className="form--btns">
                <Button color="success"
                    onClick={constructPayment}>{editMode ? "Save changes" : "Submit"}</Button>
                <Button color="danger" onClick={() => props.history.goBack()}>Cancel</Button>
            </ButtonGroup>
        </Form>
    );
}