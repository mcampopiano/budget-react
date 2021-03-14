import React, { useState } from "react"

export const DepositContext = React.createContext()

export const DepositProvider = props => {

    const createDeposit = deposit => {
        return fetch("http://localhost:8000/deposits", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("budget_user_id")}`
            },
            body: JSON.stringify(deposit)
        })
    }

    const deleteDeposit = deposit => {
        return fetch(`http://localhost:8000/deposits/${deposit.id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("budget_user_id")}`
            }
        })
    }

    return (
        <DepositContext.Provider value={{createDeposit, deleteDeposit}}>
            {props.children}
        </DepositContext.Provider>
    )
}