import React, { useState } from "react"

export const BudgetContext = React.createContext()

export const BudgetProvider = props => {
    const [budgets, setBudgets] = useState([])

    const getBudgets = () => {
        return fetch("http://localhost:8000/budgets", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("budget_user_id")}`
            }
        })
        .then(res => res.json())
        .then(setBudgets)
    }

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

    const getBudgetById = budgetId => {
        return fetch(`http://localhost:8000/budgets/${budgetId}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("budget_user_id")}`
            }
        })
        .then(res => res.json())
    }

    return (
        <BudgetContext.Provider value={{budgets, setBudgets, createBudget, getBudgetById, getBudgets}}>
            {props.children}
        </BudgetContext.Provider>
    )
}