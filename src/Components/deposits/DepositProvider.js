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

    return (
        <DepositContext.Provider value={{createDeposit}}>
            {props.children}
        </DepositContext.Provider>
    )
}