import Card from "react-bootstrap/Card";

import { Link } from 'react-router-dom'

const ParkListItem = ({ park }) => {
    const {id, name, address,amenities } = park
    // const amenityListItems = searchResults.map(park => {
    //     return <ParkListItem key={park.id} park={park} />
    // })

    const amenityListItems = amenities.map((amenity) => {
        return <li class="list-group-item">{amenity}</li>
    })

    return (
        <div class="col">
            <div class="card text-center">
                <section class="card-body">
                    <Link to={`/parks/${id}`}><h5 class="card-title"> {name} </h5></Link>
                    <h6 class="card-subtitle mb-2 text-muted">Location: {address}</h6>
                    <h5 class="card-subtitle mb-2 text-muted">Amenities</h5>
                    <ul class="list-group list-group-flush">
                        {amenityListItems}
                    </ul>
                </section>
            </div>
        </div>
    )
}
export default ParkListItem;