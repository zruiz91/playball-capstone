import { Link } from 'react-router-dom'
import Card from "react-bootstrap/Card";
import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";


const EventListItem = ({ event, onDeleteEvent, onUpdateEvent, currentUser }) => {
    const [rsvp, setRsvp] = useState(event.rsvp)
    const [errors, setErrors] = useState([])

    function handleDeleteClick() {
        fetch(`/events/${event.id}`, {
            method: "DELETE",
        }).then((r) => {
            if (r.ok) {
                onDeleteEvent(event);
            }
        });
    }

    const incrementRsvp = () => {
        setRsvp(rsvp => rsvp + 1);
        console.log(event.id);
        console.log(rsvp);
        fetch(`/events/${event.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({rsvp})
        })
        .then(res => {
            if (res.ok) {
                res.json().then(data => {
                    console.log(data)
                })
            } else {
                res.json().then(data => console.log(data))
            }
        })
    }

    // function handleUpdateRsvp(e) {
    //     let { name, value } = e.target
    //     console.log({ name, value })
    //     console.log(value++)
    //     setRsvp(e.target.value + 1)

    //         // }res.json())
    //         // .then(data => {
    //         //     onAddEvent(data)
    //         //     history.push(`/events/${data.id}`)
    //     }


    return (
        <div class="col">
            <Card className="text-center border border-start-0 border-top-0 border-4 rounded-right bg-light">
                <Card.Body class="card-body">
                <Card.Title> <Link to={`/events/${event.id}}`} class="card-title"> {event.name}</Link></Card.Title>
                    <h6 class="card-subtitle mb-2 text-muted">Location: {event.park.name}</h6>
                    <h6 class="card-subtitle mb-2 text-muted">Oranizer: {event.user.name}</h6>
                    <label class="card-subtitle mb-2 p-2 text-muted" htmlFor="rsvp">Attending: {rsvp}</label>
                    <button
                        id="rsvp"
                        name="rsvp"
                        onClick={incrementRsvp}
                        value={rsvp}>
                            RSVP
                    </button>
                    <p class="card-text mb-2 text-muted">Details: {event.info}</p>

                </Card.Body>
                <footer>
                    {/* <Link to={`/events/${id}/edit`}> <h6 class="card-link">Edit Event</h6></Link> */}
                    {currentUser.name !== event.user.name?null:
                        <button class="btn btn-danger m-2 p-2" onClick={handleDeleteClick}>
                        Not on this list {event.user.name}
                    </button>
                    }

                </footer>
            </Card>
        </div>

    )
};
export default EventListItem;