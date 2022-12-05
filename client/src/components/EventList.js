import { useState } from 'react'
import { useParams } from "react-router-dom";

import EventListItem from './EventListItem'
//temporary front-end DB


const EventList = ({ events, onUpdateEvent, onDeleteEvent, searchQuery, setSearchQuery }) => {


    const searchResults = events.filter(event => {
        return event.name.toLowerCase().includes(searchQuery.toLowerCase())
    })

    const eventListItems = searchResults.map((event) => {
        return (
            <EventListItem
                key={event.id}
                event={event}
                onUpdateEvent={onUpdateEvent}
                onDeleteEvent={onDeleteEvent}
            />
        )
    })

    const handleSearch = (e) => {
        return setSearchQuery(e.target.value)
    }
    return (
        <section >
            <div class="mb-4 mt-4">
                <input
                    type="text"
                    placeholder="Search..."
                    onChange={handleSearch}
                />
            </div>
            <div class="mb-4">
                <h1>All Events</h1>
            </div>
            <div class="row row-cols-1 row-cols-md-2 g-4">
                {eventListItems}
            </div>

        </section>
    )
}

export default EventList;