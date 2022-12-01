import { useState, useEffect } from 'react'


import ParkList from "./ParkList";

const ParksContainer = () => {
    const [parks, setParks] = useState([]);
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedAmenity, setSelectedAmenity] = useState("");

    const onSelectedAmenityChange = (selectedAmenity) => {
        setSelectedAmenity(selectedAmenity);
    }

    useEffect(() => {
        fetch("/parks")
            .then((res) => res.json())
            .then((parksData) => setParks(parksData));

    }, [])

    return (
        <ParkList
        parks={parks}
        onSelectedAmenityChange={onSelectedAmenityChange}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        />
    )
}

export default ParksContainer;