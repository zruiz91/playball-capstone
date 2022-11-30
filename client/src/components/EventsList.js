import { useState } from 'react'

import EventListItem from './EventListItem'
//temporary front-end DB


const EventList = ({ events, onLoadEvents}) => {
    const [searchQuery, setSearchQuery] = useState("")

    const searchResults = events.filter(event => {
        return event.name.toLowerCase().includes(searchQuery.toLowerCase())
    })

    const eventListItems = searchResults.map(event => {
        return <EventListItem key={event.id} event={event} />
    })

    const handleSearch = (e) => {
        return setSearchQuery(e.target.value)
    }
    return (
        <section>
            <div>
            <h1>All Events</h1>
            <button>🏀</button>
            <button>⚽️</button>
            <button>🎾</button>
            <button>⚾️</button>
            </div>
            <input
            type="text"
            placeholder="Search..."
            onChange={handleSearch}
            />

            <ul>{eventListItems}</ul>
        </section>
    )
}

export default EventList;