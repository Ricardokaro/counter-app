import { useState } from 'react'
import  PropTypes from 'prop-types'
import React from 'react'

export const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState( value );

    const handleAdd = () => {
        setCounter( counter + 1 );
        //setCounter( (c) => c + 1 )
    }

    const hadleDiminish = () => {
        setCounter(counter - 1);
    }

    const hadleReset = () => {
        setCounter(value);
    }

    return(
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>            
            <button onClick = { handleAdd }>
                +1
            </button>
            <button onClick = { hadleDiminish }>
                -1
            </button>
            <button onClick = { hadleReset }>
                Reset
            </button>
        </>    
    );    
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired    
}