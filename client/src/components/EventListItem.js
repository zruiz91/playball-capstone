
const EventListItem = ( { event } ) => {
    return (
        <li>
            <section>
                <h4>Event: {event.name } </h4>
                <h5>Location: {event.park.name}</h5>
                <h5>Oranizer: {event.user.name}</h5>
                <p>Details: {event.info }</p>
            </section>
            <footer>
                <button>Favorite</button>
            </footer>
        </li>
    )
}
export default EventListItem;