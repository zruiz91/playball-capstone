import Card from "react-bootstrap/Card";

import { Link } from 'react-router-dom'

const ParkListItem = ({ park }) => {
    const { id, name, address, amenities } = park
    // const amenityListItems = searchResults.map(park => {
    //     return <ParkListItem key={park.id} park={park} />
    // })

    const amenityListItems = amenities.map((amenity) => {
        return <li class="list-group-item">{amenity}</li>
    })

    return (
        <div>
            <div class="col">
                <div class="card text-center">
                    <section class="card-body">
                        <Link to={`/parks/${id}`}><h5 class="card-title"> {name} </h5></Link>
                        <img  src="https://img.freepik.com/free-photo/blur-nature-green-park-with-bokeh-sun-light-abstract-background-copy-space-travel-adventure-environment-concept-vintage-tone-filter-color-style_1253-1107.jpg?w=1800&t=st=1670294414~exp=1670295014~hmac=bb9f4ade8fafacb292d5daf916da381c18dc7c54dce9c3bea803539e8116a22c" class="img-fluid border" width="200" height="200" alt="..."></img>
                        <h6 class="card-subtitle mb-2 text-muted">Location: {address}</h6>
                        <h5 class="card-subtitle mb-2 text-muted">Amenities</h5>
                        <ul class="list-group list-group-flush">
                            {amenityListItems}
                        </ul>
                    </section>
                </div>
            </div>
        </div>

    )
}
export default ParkListItem;