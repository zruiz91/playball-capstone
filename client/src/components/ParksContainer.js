import { useState, useEffect } from 'react'
import { Switch, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";

import ParkList from "./ParkList";
import ParkDetailsPage from "./ParkDetailsPage";

const ParksContainer = () => {
    const [parks, setParks] = useState([]);
    const [searchQuery, setSearchQuery] = useState("")
    // const [selectedAmenity, setSelectedAmenity] = useState("");

    // const onSelectedAmenityChange = (selectedAmenity) => {
    //     setSelectedAmenity(selectedAmenity);
    // }

    useEffect(() => {
        fetch("/parks")
            .then((res) => res.json())
            .then((parksData) => setParks(parksData));

    }, [])

    return (

        <Container class="page">
        <Switch>
            <Route>
                <ParkList
                exact path="/parks"
                    parks={parks}
                    // onSelectedAmenityChange={onSelectedAmenityChange}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                />
            </Route>



            <Route path="/parks/:id">
                <ParkDetailsPage />
            </Route>
        </Switch>
        </Container>
    )
}

export default ParksContainer;