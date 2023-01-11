import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import '../App.css';

function UserPage() {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    const [errors, setErrors] = useState(false)
    const [userEvents, setUserEvents] = useState([])
    const [eventPark, setEventPark] = useState([])

    const params = useParams()
    const { id } = params
    useEffect(() => {
        fetch(`/users/${id}`)
            .then(res => {
                if (res.ok) {
                    res.json().then(user => {
                        setLoading(true)
                        setUser(user)
                        setUserEvents(user.events)
                        console.log(userEvents)
                        setLoading(false)
                    })
                } else {
                    res.json().then(data => setErrors(data.error))
                }
            })

    }, [])

    const userEventsListItems = userEvents.map((event) => {
        return <div>
            <Card class="m-2 p-2">
            <Card.Body class="card-body">
                <Card.Title><h3 class=""> {event.name} </h3></Card.Title>
                <h6 class="card-subtitle mb-2 text-muted">Info: {event.info}</h6>
                <h6 class="card-subtitle mb-2 text-muted">Attending:{event.rsvp}</h6>
            </Card.Body>
        </Card>
        </div>
    })

    if (loading) return <h1>hold up one sec</h1>
    if (errors) return <h1>so this is awkward...</h1>
    return (
        <div class="user-page">
            <Row class="row-cols-md-3">
                <Col>
                <img src="avatar.png" alt="Avatar" class="avatar"></img>
                <h1>{user.name}</h1>
                </Col>
            </Row>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {/* <li>{user.events[0]}</li> */}
                {userEventsListItems}
            </div>
        </div>
    )
}

export default UserPage;