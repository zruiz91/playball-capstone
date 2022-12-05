import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'


function EditEventForm({ updateEvent }) {
    const [formData, setFormData] = useState({
        name: '',
        info: '',
        park_id: '',
        user_id: '',
    })
    const [errors, setErrors] = useState()
    const { id } = useParams()
    const history = useHistory()

    let [user, setUser] = useState("⬇️ Select a user ⬇️")
    let [park, setPark] = useState("⬇️ Select a park ⬇️")


    const [parks, setParks] = useState([])
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch(`/events/${id}`)
            .then(res => res.json())
            .then(setFormData)
    }, [])

    const handleOnChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    //fetch all parks n set parks as state
    useEffect(() => {
        fetch("/parks")
            .then((res) => res.json())
            .then((parksData) => setParks(parksData));

    }, [])

    useEffect(() => {
        fetch("/users")
            .then((res) => res.json())
            .then((usersData) => setUsers(usersData));

    }, [])

    const handleParkChange = (e) => {
        setPark(e.target.value)
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleUserChange = (e) => {
        setUser(e.target.value)
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    function onSubmit(e) {
        e.preventDefault()
        fetch(`/events/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...formData })
        })

            .then(res => {
                if (res.ok) {
                    console.log(res)
                    res.json().then(data => {
                        updateEvent(data)
                        history.push(`/events/${id}`)
                    })
                } else {
                    res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} : ${e[1]}`)))
                }
            })
        // .then(res => {
        //     if (res.ok) {
        //         res.json().then(updateEvent)
        //     }
        // })
    }
    return (
        <div className='App'>
            <form className="form" autoComplete="off" onSubmit={onSubmit}>
                <label>Title </label>
                <input type='text' name='title' value={formData.title} onChange={handleOnChange} />

                <label> Genre</label>
                <input type='text' name='genre' value={formData.genre} onChange={handleOnChange} />

                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleOnChange}
                />

                <label htmlFor="info">info</label>
                <textarea
                    id="info"
                    name="info"
                    value={formData.info}
                    onChange={handleOnChange}
                />

                <label htmlFor="park">Parks</label>
                <select name="park_id"
                    id="park_id"
                    value={formData.park_id}
                    onChange={handleParkChange}>
                    {/*map over the parks and return option for each with id */}
                    <option value="⬇️ Select a park⬇️"> -- Select a park -- </option>
                    {parks.map((park) => <option value={park.id}>{park.name}</option>)}
                </select>

                <label htmlFor="user_id">Users</label>
                <select name="user_id"
                    id="user_id"
                    value={formData.user_id}
                    onChange={handleUserChange}>
                    {/*map over the parks and return option for each with id */}
                    <option value="⬇️ Select a user⬇️"> -- Select a user -- </option>
                    {users.map((user) => <option value={user.id}>{user.name}</option>)}
                </select>

                <input type='submit' value='Update Event' />
            </form>
            {errors ? errors.map(e => <h2 style={{ color: 'red' }}>{e.toUpperCase()}</h2>) : null}
        </div>
    )
}

export default EditEventForm