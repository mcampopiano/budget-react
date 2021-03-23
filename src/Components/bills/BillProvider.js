import React, { useState } from "react"

export const BillContext = React.createContext()

export const BillProvider = props => {
    const [bills, setBills] = useState([])

    const getBills = () => {
        return fetch("http://localhost:8000/recurring", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("budget_user_id")}`
            }
        })
        .then(res => res.json())
        .then(setBills)
    }

    const addBiller = biller => {
        return fetch("http://localhost:8000/recurring", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("budget_user_id")}`
            },
            body: JSON.stringify(biller)
        })
    }

    const addPayment = payment => {
        return fetch(`http://localhost:8000/recurring/${payment.billerId}/payments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("budget_user_id")}`
            },
            body: JSON.stringify(payment)
        })
    }


    return (
        <BillContext.Provider value={{bills, setBills, getBills, addBiller, addPayment}}>
            {props.children}
        </BillContext.Provider>
    )
}