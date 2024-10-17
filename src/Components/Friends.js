import React from 'react'
import './friend.css'

function Friends({ friendName, select, setSelect, setFrndSlct, value,frndslct }) {

    return (
        <div className='container'>
            {
                friendName.map((frnd) => (
                    <Friends2 frnd={frnd} select={select} setSelect={setSelect} setFrndSlct={setFrndSlct} value={value[frnd.name] || 0} frndslct={frndslct} />
                ))
            }
        </div>
    )
}

export default Friends

function Friends2({frnd,select, setSelect, frndslct, setFrndSlct, value }) {
    const selectHandler = () => {
     setSelect(!select)
     setFrndSlct(frnd)
        
    }
    return (
        <div className='friend'>
            <div className='ImageArea'>
                <img src={frnd.image} />
            </div>
            <div className='name'>
                <h1>{frnd.name}</h1>
                <p>{frnd.name} need to pay {value}</p>
            </div>
            <button className='selectBtn' onClick={selectHandler}>{select ? 'Close' : 'Select'}</button>
        </div>
    )

}