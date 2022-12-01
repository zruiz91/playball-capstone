import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom'


const EventForm = ({ onAddEvent }) => {
    const [parks, setParks] = useState([])
    const [users, setUsers] = useState([])
    let [user, setUser] = useState("⬇️ Select a user ⬇️")
    let [park, setPark] = useState("⬇️ Select a park ⬇️")
    const [errors, setErrors] = useState([])
    const [formData, setFormData] = useState({
        name: '',
        info: '',
        park_id: '',
        user_id: '',
    })
    const history = useHistory()

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

    const handleUserChange = (e) => {
        setUser(e.target.value)
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

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

    function handleSubmit(e) {
        e.preventDefault()
        //POST '/productions'
        fetch('/events', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...formData })
        })
            .then(console.log(formData))
            .then(res => res.json())
            .then(data => {
                onAddEvent(data)
                history.push(`/events/${data.id}`)
            })
    }


    return (
        <section>
            {errors ? errors.map(e => <div>{e}</div>) : null}
            <form className="form" autoComplete="off" onSubmit={handleSubmit}>
                <h3>Add New Event</h3>

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

                <button type="submit">Add Event</button>
            </form>
            {errors ? errors.map(e => <h2 style={{ color: 'red' }}>{e.toUpperCase()}</h2>) : null}
        </section>
    );
};
export default EventForm;