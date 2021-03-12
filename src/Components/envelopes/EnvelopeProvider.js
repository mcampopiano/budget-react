import React, { useState } from "react"


export const EnvelopeContext = React.createContext()

export const EnvelopeProvider = props => {
    const [envelopes, setEnvelopes] = useState([])

    const getEnvelopes = () => {
        return fetch("http://localhost:8000/envelopes", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("budget_user_id")}`
            }
        })
        .then(res => res.json())
        .then(setEnvelopes)
    }

    const createEnvelope = envelope => {
        return fetch(`http://localhost:8000/envelopes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("budget_user_id")}`
            },
            body: JSON.stringify(envelope)
        })
        .then(getEnvelopes)
    }

    return (
        <EnvelopeContext.Provider value={{envelopes, setEnvelopes, getEnvelopes, createEnvelope}}>
            {props.children}
        </EnvelopeContext.Provider>
    )
}