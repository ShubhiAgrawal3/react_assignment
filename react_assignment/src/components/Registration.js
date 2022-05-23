import React from 'react'

function Registration() {
  return (
    <div>
        <form>
            <h1>User Registration</h1>
            <div className='form-group p-3 mt-5'>
                <label>Name</label>
                <input type="text"
                className='form-control '
                placeholder='Enter your name'

                ></input>
            </div>
            <div className='form-group p-3 mt-5'>
                <label>Email:</label>
                <input type="text"
                className='form-control '
                placeholder='Enter your email'

                ></input>
            </div>
            <div className='form-group p-3 mt-5'>
                <label>Password</label>
                <input type="password"
                className='form-control '
                placeholder='Enter your password'

                ></input>
            </div>
            <button type='submit'>Register Me!</button>
            <p>Already have an account? {" "} Log in</p>
        </form>



    </div>
  )
}

export default Registration