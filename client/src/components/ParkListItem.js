import Card from "react-bootstrap/Card";

import { Link } from 'react-router-dom'

const ParkListItem = ({ park }) => {
    const { id, name, address, amenities } = park
    // const amenityListItems = searchResults.map(park => {
    //     return <ParkListItem key={park.id} park={park} />
    // })

    const amenityListItems = amenities.map((amenity) => {
        return <li class="mt-2 mb-2">{amenity}</li>
    })

    return (
        <div>
            <div class="col">
                <Card class="text-center border rounded-right bg-light">
                    <Card.Img
                        class="img-fluid border mt-3"
                        variant="top"
                        src="https://img.freepik.com/free-photo/blur-nature-green-park-with-bokeh-sun-light-abstract-background-copy-space-travel-adventure-environment-concept-vintage-tone-filter-color-style_1253-1107.jpg?w=1800&t=st=1670294414~exp=1670295014~hmac=bb9f4ade8fafacb292d5daf916da381c18dc7c54dce9c3bea803539e8116a22c"
                        width="200"
                        height="200"
                        alt="..." />
                    <Card.Body class="card-body">
                        <Card.Title class="mt-2 mb-2"><h3>{name}</h3></Card.Title>
                        <h5 class="card-subtitle mt-2 mb-2 text-muted">{address}</h5>
                        <h5 class="card-subtitle mt-2 mb-2 text-muted">Amenities</h5>
                        <ul class="list-group list-group-flush">
                            {amenityListItems}
                        </ul>
                    </Card.Body>
                </Card>
            </div>
        </div>

    )
}
export default ParkListItem;