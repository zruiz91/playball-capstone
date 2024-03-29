import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';
import Home from './Home';


const SignUpForm = ({ updateUser }) => {
    //setting state for controlled formData
    const [formData, setFormData] = useState({
        name: '',
        // email: '',
        password: ''
    })
    const [errors, setErrors] = useState([])
    const history = useHistory()

    const { name, password } = formData

    //funstion that takes the input of the formData, creates a user variable and calls a POST fetch with the variableand the set the user
    function onSubmit(e) {
        e.preventDefault()
        const user = {
            name,
            // email,
            password
        }

        fetch(`/users`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => {
                if (res.ok) {
                    res.json().then(user => {
                        history.push(`/login`)
                    })
                } else {
                    res.json().then(json => setErrors(Object.entries(json.errors)))
                }
            })

    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
    return (
        <section>


            <div class="container-fluid">

                <div class="">
                    <h2>
                        Sign-Up
                    </h2>
                </div>

                <div class="container-fluid">

                    <Form class="" onSubmit={onSubmit}>
                        {/* <label>
                    Username
                </label>
                <input type='text' name='name' value={name} onChange={handleChange} />

                <label>
                    Password
                </label>
                <input type='password' name='password' value={password} onChange={handleChange} /> */}
                        <div class="form-group">
                            <label class="m-3" for="name">UserName</label>
                            <input type="text" class="form-control m-3 " name="name" placeholder="userName" value={name} onChange={handleChange} required />
                        </div>

                        <div class="form-group">
                            <label class="m-3" for="floatingPassword">Password</label>
                            <input type="password" class="form-control m-3" name="password" placeholder="Password" value={password} onChange={handleChange} required />
                        </div>



                        <input class="form-control m-3 btn btn-primary" type='submit' value='Sign up!' />
                    </Form>
                    {errors ? <div>{errors}</div> : null}
                </div>

            </div>
            <Home />
        </section>

    )
}

export default SignUpForm;

