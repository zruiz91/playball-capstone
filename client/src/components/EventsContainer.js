import { useState } from 'react'

import EventList from "./EventList";
import EventForm from "./EventForm";

const EventsContainer = () => {
    const [events, setEvents] = useState([])

    const onLoadEvents = () => {
        fetch("http://localhost:4000/Events")
            .then((res) => res.json())
            .then((eventsData) => setEvents(eventsData));
    }

    const onAddEvent = (newEvent) => {
        setEvents(events => [...events, newEvent])
    }

    return (
        <div>
        <EventList events={events} onLoadEvents={onLoadEvents} />
        <EventForm onAddEvent={onAddEvent} />
        </div>
    )
}

export default EventsContainer;