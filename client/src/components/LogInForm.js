import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';



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
        <Container class="page">

            <Form class="mt-5 " onSubmit={onSubmit}>
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
                <input type="text" class="form-control m-3 " name="name" placeholder="userName" value={name} onChange={handleChange} />
                </div>

                <div class="form-group">
                <label class="m-3" for="floatingPassword">Password</label>
                <input type="password" class="form-control m-3" name="password" placeholder="Password" value={password} onChange={handleChange} />
                </div>



                <input class="form-control m-3" type='submit' value='Log in!' />
            </Form>
            {errors ? <div>{errors}</div> : null}
        </Container>
    )
}

export default LogInForm;