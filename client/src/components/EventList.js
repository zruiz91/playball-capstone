import { useState } from 'react'
import { useParams } from "react-router-dom";
import EventForm from "./EventForm";

import EventListItem from './EventListItem'
//temporary front-end DB


const EventList = ({ events, onUpdateEvent, onDeleteEvent, searchQuery, setSearchQuery, handleShowMore, currentUser, onAddEvent }) => {


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
            <div>
                <div class="container-fluid">

                    <div class="form-group">
                        <h3>Pick-Ups</h3>
                    {/* <div class="row row-cols-1 row-cols-md-2 g-4 "> */}
                        <input
                            class="mt-5 mb-5"
                            type="text"
                            placeholder="Search..."
                            onChange={handleSearch}
                        />


                    </div>

                    <div>
                        <EventForm path="/events/new"
                            onAddEvent={onAddEvent}
                        />
                    </div>
                </div>


                <div class="row row-cols-1 row-cols-md-2 g-4">
                    {eventListItems}
                </div>


            </div>




        </section>
    )
}

export default EventList;