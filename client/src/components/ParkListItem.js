import Card from "react-bootstrap/Card";

import { Link } from 'react-router-dom'

const ParkListItem = ({ park }) => {

    // const amenityListItems = searchResults.map(park => {
    //     return <ParkListItem key={park.id} park={park} />
    // })
    const amenityListItems = park.amenities.map((amenity) => {
        return <li class="list-group-item">{amenity}</li>
    })

    return (
        <div class="col">
            <div class="card text-center">
                <section class="card-body">
                    <Link to={`/parks/${park.id}`}><h5 class="card-title"> {park.name} </h5></Link>
                    <h6 class="card-subtitle mb-2 text-muted">Location: {park.address}</h6>
                    <h5 class="card-subtitle mb-2 text-muted">Amenities</h5>
                    <ul class="list-group list-group-flush">
                        {amenityListItems}
                    </ul>
                </section>
            </div>
        </div>
        // <Card sx={{ minWidth: 275 }}>
        //     <CardContent>
        //         <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        //         { park.name }
        //         <br />
        //         </Typography>
        //         <Typography variant="h5" component="div">
        //         { park.address }
        //         <br />
        //         </Typography>
        //         <Typography sx={{ mb: 1.5 }} color="text.secondary">
        //         <ul>{amenityListItems}</ul>
        //         </Typography>
        //     </CardContent>
        //     <CardActions>
        //         <Button size="small">Learn More</Button>
        //     </CardActions>
        // </Card>
    )
}
export default ParkListItem;