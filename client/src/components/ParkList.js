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
        <div>
            <div class="row row-cols-1 row-cols-md-2 g-4 ">
                <div class="mb-5 mt-5">
                    <h3>Parks</h3>
                    {/* <button onClick={() => onSelectedAmenityChange("") }>⚾️🎾⚽️🏀</button>
                <button onClick={() => onSelectedAmenityChange("basketball") }>🏀</button>
                <button onClick={() => onSelectedAmenityChange("soccer") }>⚽️</button>
                <button onClick={() => onSelectedAmenityChange("tennis") }>🎾</button>
                <button onClick={() => onSelectedAmenityChange("baseball") }>⚾️</button> */}
                </div>
                <input
                    class=" mb-5 mt-5"
                    type="text"
                    placeholder="Search..."
                    onChange={handleSearch}
                />
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>

            </div>
            <div class="row row-cols-1 row-cols-md-3 g-4">{parkListItems}</div>
        </div>
    )
}

export default ParkList;