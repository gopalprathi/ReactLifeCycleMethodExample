import React from 'react'

export default function Login() {

    let style = {
        width: '40%',
        margin: '0 auto',
        border: '1px solid #999',
        padding: '20px',
    }

    return (
        <form className="formSection" style={style}>
            <div className='formRow'>
                <label>Username: &nbsp;</label>
                <input type="text" />
            </div>
            <div className='formRow'>
                <button className="primaryBtn">Login</button>
            </div>
        </form>
    )
}
