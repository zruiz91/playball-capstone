import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'


const LogInForm = ({updateUser}) => {
    const [formData, setFormData] = useState({
        name: '',
        password: ''
    })
    const [errors, setErrors] = useState([])
    const history = useHistory()

    const { name, password } = formData

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
                    res.json().then(data => setErrors(data.errors))
                }
            })

    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
    return (
        <>
            {/* <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                onSubmit={onSubmit}
            >
                <TextField
                    name='name'
                    label="Name"
                    value={name}
                    onChange={handleChange}
                />
                <TextField
                    name='password'
                    label="Password"
                    value={password}
                    onChange={handleChange}
                />
            </Box> */}

            <form onSubmit={onSubmit}>
                <label>
                    Username
                </label>
                <input type='text' name='name' value={name} onChange={handleChange} />

                <label>
                    Password
                </label>
                <input type='password' name='password' value={password} onChange={handleChange} />


                <input type='submit' value='Log in!' />
            </form>
            {errors ? <div>{errors}</div> : null}
        </>
    )
}

export default LogInForm;