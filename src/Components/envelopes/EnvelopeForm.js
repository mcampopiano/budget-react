import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { Button, Form, FormGroup, Label, Input, ButtonGroup } from 'reactstrap';
import { EnvelopeContext } from './EnvelopeProvider';

export const EnvelopeForm = () => {
    const history = useHistory()
    const {createEnvelope} = useContext(EnvelopeContext)
    const [envelope, setEnvelope] = useState({name: "", budget: 0})

    const handleControlledInputChange = e => {
        const newEnvelope = Object.assign({}, envelope)
        newEnvelope[e.target.name] = e.target.value
        setEnvelope(newEnvelope)
    }

    const constructEnvelope = () => {
        createEnvelope({
            name: envelope.name,
            budget: envelope.budget
        })
        .then(() => history.push("/"))
    }

    return (
        <Form>
            <FormGroup>
                <Label for="envelopeName">Name</Label>
                <Input type="text" name="name" id="envelopeName" placeholder="e.g. Groceries" onChange={handleControlledInputChange}/>
            </FormGroup>
            <FormGroup>
                <Label for="exampleBudgetAmount">Monthly budget</Label>
                <Input type="number" name="budget" id="exampleBudgetAmount" placeholder="e.g. 400.00" onChange={handleControlledInputChange}/>
            </FormGroup>

            <ButtonGroup>
                <Button color="success"
                onClick={constructEnvelope}>Submit</Button>
                <Button color="danger" onClick={() => history.goBack()}>Cancel</Button>
            </ButtonGroup>
        </Form>
    );
}