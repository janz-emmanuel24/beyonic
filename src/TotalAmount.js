// import React from 'react'

const TotalAmount = ({totalAmount}) => {
    return (
        <div className='Total'>
            <h4>Total amount:</h4>
            <div>
            <span>{totalAmount}</span>
            </div>
        </div>
    )
};

export default TotalAmount;