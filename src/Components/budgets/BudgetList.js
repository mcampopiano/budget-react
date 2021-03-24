import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Table, Button
} from 'reactstrap';
import { BudgetContext } from './BudgetProvider';

export const BudgetList = (props) => {
    // const [budget, setBudget] = useState({})
    const { getBudgets, getBudgetById, budgets } = useContext(BudgetContext)


    useEffect(() => {
        getBudgets()
    }, [])

    return (
        <div className="table budgets">
            <section >
                <Table hover>
                    <thead>
                        <tr>
                            <th>Month</th>
                            <th>Year</th>
                            <th>Total Income</th>
                            <th>Total Budget</th>
                            <th>Total Spent</th>
                            <th>Remaining Budget</th>
                            <th>Net Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            budgets.map(budget => {
                                if (budget.user.key === localStorage.getItem('budget_user_id')) {

                                   return <>     
                                     <tr key={budget.id}>
                                   
                                        <td>{budget.month}</td>
                                        <td>{budget.year}</td>
                                        <td>${budget.actual_inc}</td>
                                        <td>${budget.total_budget}</td>
                                        <td>${budget.total_spent}</td>
                                        <td>${budget.remaining_budget.toFixed(2)}</td>
                                        <td>${budget.net_total} <Button
                                        onClick={() => {
                                            localStorage.setItem('budgetId', budget.id)
                                            props.history.push("/")
                                        }}>Select Budget</Button></td>
                                    </tr>
                                    </>
                                    
                                }
                            })
                        }
                    </tbody>
                </Table>
            </section>
        </div>
    );
}
