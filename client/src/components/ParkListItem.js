// import Card from "react-bootstrap/Card";

import { Link } from 'react-router-dom'

const ParkListItem = ({ park }) => {

    // const amenityListItems = searchResults.map(park => {
    //     return <ParkListItem key={park.id} park={park} />
    // })
    const amenityListItems = park.amenities.map((amenity) => {
        return <li>{amenity}</li>
    })

    return (
        <li>
            <section>
            <Link to={`/parks/${park.id}`}><h4> { park.name } </h4></Link>
                <p>
                    { park.address }
                </p>
                <h5>Amenities</h5>
                <ul>
                    {amenityListItems}
                </ul>
            </section>
            <footer>
                <button>Favorite</button>
            </footer>
        </li>
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