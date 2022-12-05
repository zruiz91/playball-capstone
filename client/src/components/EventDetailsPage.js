import { Link, useParams, useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'


const EventDetailsPage = () => {
    const [event, setEvent] = useState({})
    const [errors, setErrors] = useState(false);

    const [loading, setLoading] = useState(true)
    
    const id = useParams()
    const history = useHistory()

    useEffect(() => {
        fetch(`/events/${id}`)
            .then(res => {
                if (res.ok) {
                    res.json().then(data => {
                        setEvent(data)
                        setLoading(false)
                    })
                } else {
                    console.log('error')
                    res.json().then(data => setErrors(data.error))
                }
            })
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }

    if (errors) {
        return <div>Error: {errors}</div>
    }
    const [name, park, user, info] = event
    return (
        <li>
            <section>
                <h4> {name} </h4>
                <h5>Location: {park.name}</h5>
                <h5>Oranizer: {user.name}</h5>
                <p>Details: {info}</p>
            </section>
            <footer>
            <button><Link to={`/events/${id}/edit`}>Edit Event</Link></button>
            </footer>
        </li>
    )
}
export default EventDetailsPage;