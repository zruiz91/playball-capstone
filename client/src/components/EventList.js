import { useState } from 'react'
import { useParams } from "react-router-dom";

import EventListItem from './EventListItem'
//temporary front-end DB


const EventList = ({ events, onUpdateEvent, onDeleteEvent, searchQuery, setSearchQuery, handleShowMore, currentUser }) => {


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
                currentUser={currentUser}
            />
        )
    })

    const handleSearch = (e) => {
        return setSearchQuery(e.target.value)
    }


    return (
        <section >
            <div class="row row-cols-1 row-cols-md-2 g-4 ">
                <input
                    class="mt-5 mb-5"
                    type="text"
                    placeholder="Search..."
                    onChange={handleSearch}
                />


            </div>

            <div class="row row-cols-1 row-cols-md-2 g-4">
                {eventListItems}
            </div>

        </section>
    )
}

export default EventList;