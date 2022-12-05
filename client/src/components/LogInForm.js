import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'


const LogInForm = ({ updateUser }) => {
    //setting state for controlled formData
    const [formData, setFormData] = useState({
        name: '',
        password: ''
    })
    const [errors, setErrors] = useState([])
    const history = useHistory()

    const { name, password } = formData

    //function that is triggered by submit event. Function calls a POST fetch sets user and then redirects to user account page
    function onSubmit(e) {
        e.preventDefault()
        const user = {
            name,
            password
        }
        console.log(user)
        fetch("/login", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => {
                if (res.ok) {
                    res.json().then(user => {
                        updateUser(user)
                        history.push(`/users/${user.id}`)
                    })
                } else {
                    res.json().then(json => setErrors(json.errors))
                }
            })

    }
    //function that handles the change of state of formData
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
    return (
        <>

            <form onSubmit={onSubmit}>
                {/* <label>
                    Username
                </label>
                <input type='text' name='name' value={name} onChange={handleChange} />

                <label>
                    Password
                </label>
                <input type='password' name='password' value={password} onChange={handleChange} /> */}

                <div class="form-floating mb-3">
                    <input type="text" class="form-control" name="name" placeholder="userName" value={name} onChange={handleChange}/>
                        <label for="name">UserName</label>
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control" name="password" placeholder="Password"  value={password} onChange={handleChange}/>
                        <label for="floatingPassword">Password</label>
                </div>
                <input type='submit' value='Log in!' />
            </form>
            {errors ? <div>{errors}</div> : null}
        </>
    )
}

export default LogInForm;