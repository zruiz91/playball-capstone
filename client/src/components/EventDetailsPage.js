import { Link, useParams, useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'


const EventDetailsPage = (onDeleteEvent) => {
    const [event, setEvent] = useState({})
    const [errors, setErrors] = useState();

    const [loading, setLoading] = useState(true)

    const params = useParams()
    const history = useHistory()


    useEffect(() => {
        //GET to '/productions/:id'
        fetch(`/events/${event.id}`)
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

    return (
        <li>
            <section>
                <h4> {event.name} </h4>

            </section>
            <footer>
                <button>Favorite</button>
            </footer>
        </li>
    )
}
export default EventDetailsPage;