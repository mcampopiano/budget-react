import React, { useContext, useEffect, useState } from 'react';
import { Button, Form, FormGroup, Label, Input, ButtonGroup } from 'reactstrap';
import { BillContext } from './BillProvider';

export const BillerForm = (props) => {
    const {addBiller} = useContext(BillContext)
    const [biller, setBiller] = useState({biller: "", expectedAmount: 0, dueDate: 1})

    const editMode = false

    /* This function is used to set the state of the biller object when this is called.
    It is called on change of the input fields, and sets the value of key corresponding with
    the name on the input to the value of the input.*/
    const handleControlledInputChange = e => {
        const newBiller = Object.assign({}, biller)
        newBiller[e.target.name] = e.target.value
        setBiller(newBiller)
    }

    const constructBiller = () => {
        addBiller(biller)
        .then(() => props.history.push("/bills"))
    }

    return (
        <Form>
            <FormGroup>
                <Label for="biller">Name</Label>
                <Input type="text" name="biller" id="biller" value={biller.biller} onChange={handleControlledInputChange} />
            </FormGroup>
            <FormGroup>
                <Label for="expectedAmount">Expected Amount</Label>
                <Input type="number" name="expectedAmount" id="expectedAmount" value={biller.expectedAmount} onChange={handleControlledInputChange} />
            </FormGroup>
            <FormGroup>
                <Label for="dueDate">Due Date</Label>
                <Input type="number" name="dueDate" id="dueDate" value={biller.dueDate} onChange={handleControlledInputChange} />
            </FormGroup>
    
            <ButtonGroup className="form--btns">
                <Button color="success"
                    onClick={constructBiller}>{editMode ? "Save changes" : "Submit"}</Button>
                <Button color="danger" onClick={() => props.history.goBack()}>Cancel</Button>
            </ButtonGroup>
        </Form>
    );
}