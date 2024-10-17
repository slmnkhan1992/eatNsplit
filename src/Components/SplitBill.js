import React, { useState} from 'react'
import './SplitBill.css'

function SplitBill({ frndslct, setValue }) {
    const [billValue, setBillValue] = useState()
    const [myExpense, setMyExpense] = useState()

    const splitHandler = () => {
        const friendExpense = (billValue - myExpense)
        setValue(prev => ({
            ...prev,
            [frndslct.name]: friendExpense
        }));

        setBillValue('')
        setMyExpense('')

    }

    return (
        <div className='SplitArea'>
            <h1 style={{textAlign: 'center'}}>SPLIT BILL WITH <span style={{color: 'orange'}}> {frndslct.name.toUpperCase()}</span></h1>
                <label className='Splitlabel'>
                    Bill Value
                    <input type='number' placeholder='Enter Amount' value={billValue} onChange={(e)=> {setBillValue(e.target.value)}}/>
                </label>

                <label className='Splitlabel'>
                    My Expense
                    <input type='number' placeholder='Enter Amount' value={myExpense} onChange={(e)=> setMyExpense(e.target.value)} />
                </label>

                <label className='Splitlabel'>
                {frndslct.name}'s Expense
                    <input type='number' placeholder='Enter Amount' value={billValue - myExpense}/>
                </label>

                <label className='Splitlabel'>
                    Who is paying the bill?
                    <select>
                        <option>You</option>
                        <option>{frndslct.name}</option>
                    </select>
                </label>
            <button className='splitBtn' onClick={splitHandler}>Split Bill</button>
        </div>
    )
}

export default SplitBill

