import React from 'react'
import "../App.css";
const Form = () => {
    return (
        <>
            <div className='form-container'>
                <form action="">
                    <div>
                        <h2>Let's get you in</h2>
                        <p>Please enter you Aramco credentials to login</p>
                    </div>
                    <div className='first-input'>
                        <p className='input-label-0'>Aramco Email</p>
                        <input type="text" placeholder='@gmail.com' />
                    </div>
                    <div className='second-input'>
                        <p className='input-label-1'>Aramco Password</p>
                        <input type="password" />
                    </div>
                    <button className='form-button' type='submit'>Login</button>
                </form>
            </div>
        </>
    )
}

export default Form