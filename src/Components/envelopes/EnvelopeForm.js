import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Button, Form, FormGroup, Label, Input, ButtonGroup } from 'reactstrap';
import { EnvelopeContext } from './EnvelopeProvider';

export const EnvelopeForm = (props) => {
    const history = useHistory()
    const { createEnvelope, getEnvelopes, editEnvelope, envelopes } = useContext(EnvelopeContext)
    const [envelope, setEnvelope] = useState({ name: "", budget: 0 })

    /* If the match method from react router dom has the property of envelopeId, the user routed to this
     page via an edit button*/
    const editMode = props.match.params.hasOwnProperty("envelopeId")

    /* This function is used to set the state of the envelope object when this is called.
    It is called on change of the input fields, and sets the value of key corresponding with
    the name on the input to the value of the input.*/
    const handleControlledInputChange = e => {
        const newEnvelope = Object.assign({}, envelope)
        newEnvelope[e.target.name] = e.target.value
        setEnvelope(newEnvelope)
    }

    const getEnvelopeInEditMode = () => {
        if (editMode) {
            const chosenEnvelope = props.location.state.chosenEnvelope || {}
            setEnvelope(chosenEnvelope)
        }
    }

    useEffect(() => {
        getEnvelopes()
    }, [])

    useEffect(() => {
        getEnvelopeInEditMode()
    }, [envelopes])

    const constructEnvelope = () => {
        editMode
        ? editEnvelope({
            id: envelope.id,
            name: envelope.name,
            budget: envelope.budget
        })
        .then(() => history.push(`/envelopes/${envelope.id}`))
        : createEnvelope({
            name: envelope.name,
            budget: envelope.budget
        })
        .then(res => res.json())
        .then(res => history.push(`/envelopes/${res.id}`))
        .then(getEnvelopes)
}

return (
    <Form>
        <FormGroup>
            <Label for="envelopeName">Name</Label>
            <Input type="text" name="name" id="envelopeName" value={envelope.name} placeholder="e.g. Groceries" onChange={handleControlledInputChange} />
        </FormGroup>
        <FormGroup>
            <Label for="exampleBudgetAmount">Monthly budget</Label>
            <Input type="number" name="budget" id="exampleBudgetAmount" value={envelope.budget} onChange={handleControlledInputChange} />
        </FormGroup>

        <ButtonGroup className="form--btns">
            <Button color="success"
                onClick={constructEnvelope}>{editMode ? "Save changes" : "Submit"}</Button>
            <Button color="danger" onClick={() => history.goBack()}>Cancel</Button>
        </ButtonGroup>
    </Form>
);
}