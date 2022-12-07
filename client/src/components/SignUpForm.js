import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';


const SignUpForm = ({updateUser}) => {
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
                        updateUser(user)
                        history.push(`/users/${user.id}`)
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
        <Container class="m-5">
            <Form onSubmit={onSubmit}>
                <label>
                    Username
                </label>
                <input class="form-control mb-3" type='text' name='name' value={name} onChange={handleChange} />

                {/* <label>
                    Email
                </label>
                <input type='text' name='email' value={email} onChange={handleChange} /> */}

                <label>
                    Password
                </label>
                <input class="form-control mb-3" type='password' name='password' value={password} onChange={handleChange} />


                <input class="form-control m-3" type='submit' value='Sign up!' />
            </Form>
            {errors ? errors.map(e => <div>{e[0] + ': ' + e[1]}</div>) : null}
        </Container >
    )
}

export default SignUpForm;