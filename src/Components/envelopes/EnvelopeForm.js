import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Button, Form, FormGroup, Label, Input, ButtonGroup } from 'reactstrap';
import { EnvelopeContext } from './EnvelopeProvider';

export const EnvelopeForm = (props) => {
    const history = useHistory()
    const {createEnvelope, getEnvelopes, updateEnvelopes, envelopes} = useContext(EnvelopeContext)
    const [envelope, setEnvelope] = useState({name: "", budget: 0})

    const editMode = props.match.params.hasOwnProperty("envelopeId")

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
                <Input type="text" name="name" id="envelopeName" value={envelope.name} placeholder="e.g. Groceries" onChange={handleControlledInputChange}/>
            </FormGroup>
            <FormGroup>
                <Label for="exampleBudgetAmount">Monthly budget</Label>
                <Input type="number" name="budget" id="exampleBudgetAmount" value={envelope.budget} onChange={handleControlledInputChange}/>
            </FormGroup>

            <ButtonGroup>
                <Button color="success"
                onClick={constructEnvelope}>{editMode ? "Save changes" : "Submit"}</Button>
                <Button color="danger" onClick={() => history.goBack()}>Cancel</Button>
            </ButtonGroup>
        </Form>
    );
}