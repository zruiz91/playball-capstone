import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


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
        return <div class="col">
            <section class="card-body">
                <h5 class="card-title"> {event.name} </h5>
                <h6 class="card-subtitle mb-2 text-muted">Info: {event.info}</h6>
                <h6 class="card-subtitle mb-2 text-muted">Attending:{event.rsvp}</h6>
            </section>
        </div>
    })

    if (loading) return <h1>hold up one sec</h1>
    if (errors) return <h1>so this is awkward...</h1>
    return (
        <div >
            <div>
            <h1>{user.name}</h1>
            <img z src="https://img.freepik.com/free-photo/blur-nature-green-park-with-bokeh-sun-light-abstract-background-copy-space-travel-adventure-environment-concept-vintage-tone-filter-color-style_1253-1107.jpg?w=1800&t=st=1670294414~exp=1670295014~hmac=bb9f4ade8fafacb292d5daf916da381c18dc7c54dce9c3bea803539e8116a22c" class="img-fluid" width="783" height="522" alt="..."></img>
            </div>
            <div class="row row-cols-1 row-cols-md-2 g-4 rounded-circle">
                {/* <li>{user.events[0]}</li> */}
                {userEventsListItems}
            </div>
        </div>
    )
}

export default UserPage