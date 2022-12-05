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
        return <li>
            <h3>{event.name}</h3>
            <h3>{event.info}</h3>
            <h3>{event.rsvp}</h3>
            </li>
    })

    if (loading) return <h1>hold up one sec</h1>
    if (errors) return <h1>so this is awkward...</h1>
    return (
        <div>
            <h1>{user.name}</h1>
            <ul>
                {/* <li>{user.events[0]}</li> */}
            {userEventsListItems}
            </ul>
        </div>
    )
}

export default UserPage