// import { useState } from 'react'

import ParkListItem from './ParkListItem'
//temporary front-end DB


const ParkList = ({ parks, onSelectedAmenityChange, searchQuery, setSearchQuery }) => {


    const searchResults = parks.filter(park => {
        return park.name.toLowerCase().includes(searchQuery.toLowerCase())
    })

    const parkListItems = searchResults.map(park => {
        return <ParkListItem key={park.id} park={park} />
    })

    const handleSearch = (event) => {
        return setSearchQuery(event.target.value)
    }
    return (
        <section>
            <div class>
                <h1>Parks</h1>
                <button onClick={() => onSelectedAmenityChange("") }>⚾️🎾⚽️🏀</button>
                <button onClick={() => onSelectedAmenityChange("basketball") }>🏀</button>
                <button onClick={() => onSelectedAmenityChange("soccer") }>⚽️</button>
                <button onClick={() => onSelectedAmenityChange("tennis") }>🎾</button>
                <button onClick={() => onSelectedAmenityChange("baseball") }>⚾️</button>
            </div>
            <input
            type="text"
            placeholder="Search..."
            onChange={handleSearch}
            />

            <ul>{parkListItems}</ul>
        </section>
    )
}

export default ParkList;