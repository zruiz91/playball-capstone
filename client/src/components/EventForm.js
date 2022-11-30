import { useState } from "react";

const initialState = {
    name: "",
    info: "",
    park: "",
    user: "",
}

const EventForm = ({ onAddEvent }) => {
    const [formData, setFormData] = useState(initialState);

    const { name, info, park, user } = formData;
    // equivalent to:
    // const name = formData.name
    // const info = formData.info
    // const park = formData.park
    // const user = formData.user

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        // const name = e.target.name;
        // const value = e.target.value;
        console.log("name: " + name);
        console.log("value: " + value);

        setFormData(formData => {
            return {
                ...formData,
                [name]: value // equivalent to: [e.target.name]: e.target.value
            };
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("formData: " + JSON.stringify(formData));
        onAddEvent(formData);
        // setFormData(initialState);
        fetch("http://localhost:3000/events`",{
            method: "POST",
            headers: { 'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(newEvent => {
            onAddEvent(newEvent);
            setFormData(initialState);
        })
    }

    return (
        <section>
            <form className="form" autoComplete="off" onSubmit={handleSubmit}>
                <h3>Add New Event</h3>

                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={handleOnChange}
                />

                <label htmlFor="info">info</label>
                <textarea
                    id="info"
                    name="info"
                    value={info}
                    onChange={handleOnChange}
                />

                <label htmlFor="park">park</label>
                <input
                    name="park"
                    id="park"
                    value={park}
                    onChange={handleOnChange}
                />

                <label htmlFor="user">Event Homepage</label>
                <input
                    type="text"
                    id="user"
                    name="user"
                    value={user}
                    onChange={handleOnChange}
                />

                <button type="submit">Add Event</button>
            </form>
        </section>
    );
};
export default EventForm;