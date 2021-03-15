import React, { useState } from "react"

export const DepositContext = React.createContext()

export const DepositProvider = props => {
    const [deposits, setDeposits] = useState(true)

    const createDeposit = deposit => {
        return fetch("http://localhost:8000/deposits", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("budget_user_id")}`
            },
            body: JSON.stringify(deposit)
        })
        .then(() => setDeposits(deposits ? false : true))
    }

    const deleteDeposit = deposit => {
        return fetch(`http://localhost:8000/deposits/${deposit.id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("budget_user_id")}`
            }
        })
        .then(() => setDeposits(deposits ? false : true))
    }

    return (
        <DepositContext.Provider value={{createDeposit, deleteDeposit, deposits}}>
            {props.children}
        </DepositContext.Provider>
    )
}