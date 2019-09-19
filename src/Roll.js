import React from 'react'

const Roll = ({ whenPressed }) => {
    return (
        <div className='container'>
            <input type='button' value='Roll!!' onClick={whenPressed} className='btn btn-primary btn-lg btn-block' ></input>
        </div>
    );
}

export default Roll