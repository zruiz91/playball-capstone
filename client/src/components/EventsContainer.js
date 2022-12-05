import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from 'react'

import EditEventForm from './EditEventForm'
import EventDetailsPage from "./EventDetailsPage";
import EventList from "./EventList";
import EventForm from "./EventForm";

const EventsContainer = () => {
    const [events, setEvents] = useState([])
    const [searchQuery, setSearchQuery] = useState("")




    const onAddEvent = (newEvent) => setEvents(events => [...events, newEvent])


    const onUpdateEvent = (updatedEvent) => {
        const updatedEvents = events.map((event) =>
            event.id === updatedEvent.id ? updatedEvent : event
        );
        setEvents(updatedEvents);
    }


    const onDeleteEvent = (eventToDelete) => {
        const updatedEvents = events.filter((event) => event.id !== eventToDelete.id);
        setEvents(updatedEvents);
    }


    useEffect(() => {
        fetch("/events")
            .then((res) => res.json())
            .then((eventsData) => setEvents(eventsData));

    }, [])

    return (
        <div>
            <EventForm path="/events/new"
                onAddEvent={onAddEvent}
            />
            <Switch>
                <Route>
                    <EventList exact path="/events"
                        events={events}
                        onDeleteEvent={onDeleteEvent}
                        onUpdateEvent={onUpdateEvent}
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                    />
                </Route>



                <Route path="/events/:id">
                    <EventDetailsPage  onDeleteEvent={onDeleteEvent}/>
                </Route>

                <Route path="/events/:id/edit">
                    <EditEventForm onUpdateEvent={onUpdateEvent}/>
                </Route>
            </Switch>
        </div>
    )
}

export default EventsContainer;