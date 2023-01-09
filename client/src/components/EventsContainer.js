import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from 'react'

import EditEventForm from './EditEventForm'
import EventDetailsPage from "./EventDetailsPage";
import EventList from "./EventList";
import EventForm from "./EventForm";

const EventsContainer = ({currentUser}) => {
    const [events, setEvents] = useState([])
    const [searchQuery, setSearchQuery] = useState("")
    const [showMore, setShowMore] = useState(false)




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


    const handleShowMore = (e) => {
        e.preventDefault()
        setShowMore(!showMore)
        console.log(showMore)
    }

    useEffect(() => {
        fetch("/events")
            .then((res) => res.json())
            .then((eventsData) => setEvents(eventsData));

    }, [])

    return (
        <div>
            <div class="mb-5 mt-5">
                    <h3>Pick-Ups</h3>

                </div>
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
                        handleShowMore={handleShowMore}
                        currentUser={currentUser}
                    />
                </Route>

                <Route exact path="/events/:id">
                    <EventDetailsPage onDeleteEvent={onDeleteEvent} />
                </Route>

                {/* <Route path="/events/:id/edit">
                    <EditEventForm onUpdateEvent={onUpdateEvent} />
                </Route> */}
            </Switch>
        </div>
    )
}

export default EventsContainer;