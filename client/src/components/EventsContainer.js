import { useState, useEffect } from 'react'

import EventList from "./EventList";
import EventForm from "./EventForm";

const EventsContainer = () => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch("/events")
            .then((res) => res.json())
            .then(setEvents);

    }, [])


    const onAddEvent = (newEvent) => setEvents(events => [...events, newEvent])
    return (
        <div>
        <EventForm onAddEvent={onAddEvent} />
        <EventList events={events} />
        </div>
    )
}

export default EventsContainer;