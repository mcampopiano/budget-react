import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { Button, Form, FormGroup, Label, Input, ButtonGroup } from 'reactstrap';
import { EnvelopeContext } from './EnvelopeProvider';

export const PurchaseForm = (props) => {
    const history = useHistory()
    const {addPurchase} = useContext(EnvelopeContext)
    const envelope = props.location.state.chosenEnvelope
    const budgetId = localStorage.getItem("budgetId")
    const [purchase, setPurchase] = useState({budgetId: budgetId, location: "", amount:0, date: ""})

    /* This function is used to set the state of the purchase object when this is called.
    It is called on change of the input fields, and sets the value of key corresponding with
    the name on the input to the value of the input.*/
    const handleControlledInputChange = e => {
        const newPurchase = Object.assign({}, purchase)
        newPurchase[e.target.name] = e.target.value
        setPurchase(newPurchase)
    }

    const constructPurchase = () => {
        addPurchase({
            budgetId: purchase.budgetId,
            envelopeId: envelope.id,
            location: purchase.location,
            amount: purchase.amount,
            date: purchase.date
        })
        .then(history.push(`/envelopes/${envelope.id}`, {chosenEnvelope: envelope}))
    }
    return (
        <Form>
            <FormGroup>
                <Label for="locationName">Location</Label>
                <Input type="text" name="location" id="locationName" placeholder="e.g. Kroger" onChange={handleControlledInputChange}/>
            </FormGroup>
            <FormGroup>
                <Label for="examplePurchaseAmount">Amount</Label>
                <Input type="number" name="amount" id="examplePurchaseAmount" placeholder="e.g. 58.23" onChange={handleControlledInputChange}/>
            </FormGroup>
            <FormGroup>
                <Label for="dateOfPurchase">Date of purchase</Label>
                <Input type="date" name="date" id="dateOfPurchase" placeholder="e.g. 400.00" onChange={handleControlledInputChange}/>
            </FormGroup>

            <ButtonGroup className="form--btns">
                <Button color="success"
                onClick={constructPurchase}
                >Submit</Button>
                <Button color="danger" onClick={() => history.goBack()}>Cancel</Button>
            </ButtonGroup>
        </Form>
    );
}