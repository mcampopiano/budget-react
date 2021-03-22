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
    }

    return (
        <BillContext.Provicer value={{bills, setBills, getBills}}>
            {props.children}
        </BillContext.Provicer>
    )
}