import React, {useState} from 'react';
import NewExpense from './Components/NewExpenses/NewExpenses';

import Expenses from './Components/Expenses/Expenses';
import Header from './Header';
import Footer from './Footer';





let DUMMY_EXPENSE = [];

const Component = () => {
    
    const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

    const addExpenseHandler = (expense) =>{
        const updatedExpense = [expense , ...expenses];
        setExpenses(updatedExpense);
    }

    return (
        <div>
            
            <Header/>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses item={expenses} />
            <Footer/>
            

        </div>    
    );
}

export default Component;