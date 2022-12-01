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

    const onDeleteEvent = (eventToDelete) => {
        const updatedEvents = events.filter((event) => event.id !== eventToDelete.id);
        setEvents(updatedEvents);
    }

    const onUpdateEvent = (updatedEvent) => {
        const updatedEvents = events.map((event) =>
            event.id === updatedEvent.id ? updatedEvent : event
        );
        setEvents(updatedEvents);
    }

    const onAddEvent = (newEvent) => setEvents(events => [...events, newEvent])

    return (
        <div>
            <EventForm onAddEvent={onAddEvent}

            />
            <EventList events={events}
                onDeleteEvent={onDeleteEvent}
                onUpdateEvent={onUpdateEvent}
            />
        </div>
    )
}

export default EventsContainer;