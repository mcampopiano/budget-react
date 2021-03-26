import React, { useState } from "react"


export const EnvelopeContext = React.createContext()

export const EnvelopeProvider = props => {
    const [envelopes, setEnvelopes] = useState([])
    

    const getEnvelopes = () => {
        console.trace()
        return fetch("http://localhost:8000/envelopes", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("budget_user_id")}`
            }
        })
        .then(res => res.json())
        .then(setEnvelopes)
    }

    const getEnvelopeById = envelopeId => {
        return fetch(`http://localhost:8000/envelopes/${envelopeId}?budgetId=${localStorage.getItem('budgetId')}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("budget_user_id")}`
            }
        })
        .then(res => res.json())
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
    }
    const editEnvelope = envelope => {
        return fetch(`http://localhost:8000/envelopes/${envelope.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("budget_user_id")}`
            },
            body: JSON.stringify(envelope)
        })
        .then(getEnvelopes)
    }
    const deleteEnvelope = envelope => {
        return fetch(`http://localhost:8000/envelopes/${envelope.id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("budget_user_id")}`
            }
        })
        .then(getEnvelopes)
    }

    const addPurchase = purchase => {
        return fetch(`http://localhost:8000/envelopes/${purchase.envelopeId}/purchases`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("budget_user_id")}`
            },
            body: JSON.stringify(purchase)
        })
        .then(getEnvelopes)
    }
    const deletePurchase = purchase => {
        return fetch(`http://localhost:8000/envelopes/${purchase.id}/purchases`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("budget_user_id")}`
            }
        })
        .then(getEnvelopes)
    }

    return (
        <EnvelopeContext.Provider value={{envelopes, setEnvelopes, getEnvelopes, createEnvelope, 
        editEnvelope, deleteEnvelope, addPurchase, deletePurchase, getEnvelopeById}}>
            {props.children}
        </EnvelopeContext.Provider>
    )
}