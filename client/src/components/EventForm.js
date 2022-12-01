import { useState } from "react";
import { useHistory } from 'react-router-dom'


const EventForm = ({ onAddEvent }) => {
    const [errors, setErrors] = useState([])
    const [formData, setFormData] = useState({
        name: '',
        info: '',
        park: '',
        user: '',
    })
    const history = useHistory()

    const handleOnChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }


    function handleSubmit(e) {
        e.preventDefault()
        //POST '/productions'
        fetch('/events', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...formData})
        })
            .then(res => {
                if (res.ok) {
                    res.json().then(data => {
                        onAddEvent(data)
                        history.push(`/events/${data.id}`)
                    })
                } else {
                    res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} : ${e[1]}`)))
                }
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

                <label htmlFor="park">park</label>
                <input
                    name="park"
                    id="park"
                    value={formData.park}
                    onChange={handleOnChange}
                />

                <label htmlFor="user">User</label>
                <input
                    id="user"
                    name="user"
                    value={formData.user}
                    onChange={handleOnChange}
                />

                <button type="submit">Add Event</button>
            </form>
            {errors ? errors.map(e => <h2 style={{ color: 'red' }}>{e.toUpperCase()}</h2>) : null}
        </section>
    );
};
export default EventForm;