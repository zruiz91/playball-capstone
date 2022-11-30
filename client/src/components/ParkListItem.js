// import Card from "react-bootstrap/Card";


const ParkListItem = ( { park } ) => {

    // const amenityListItems = searchResults.map(park => {
    //     return <ParkListItem key={park.id} park={park} />
    // })
    return (
        <li>
            <section>
                <h4> { park.name } </h4>
                <p>
                    { park.address }
                </p>
                <h5>Amenities</h5>
                <ul>
                    <li>{park.amenities[0]}</li>
                    <li>{park.amenities[1]}</li>
                    <li>{park.amenities[2]}</li>
                    <li>{park.amenities[3]}</li>
                </ul>
            </section>
            <footer>
                <button>Favorite</button>
            </footer>
        </li>
    )
}
export default ParkListItem;