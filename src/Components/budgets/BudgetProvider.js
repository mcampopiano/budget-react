import React, { useState } from "react"

export const BudgetContext = React.createContext()

export const BudgetProvider = props => {
    const [budgets, setBudgets] = useState([])

     const createBudget = budget => {
        return fetch("http://localhost:8000/budgets", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("budget_user_id")}`
            },
            body: JSON.stringify(budget)
        })
    }

    return (
        <BudgetContext.Provider value={{budgets, setBudgets, createBudget}}>
            {props.children}
        </BudgetContext.Provider>
    )
}