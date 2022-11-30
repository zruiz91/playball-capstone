
const EventListItem = ( { event } ) => {
    return (
        <li>
            <section>
                <h4> { event.name } </h4>
                <p>
                    { event.info }
                </p>
                <h5>{event.park}</h5>
                <h5>{event.user}</h5>
            </section>
            <footer>
                <button>Favorite</button>
            </footer>
        </li>
    )
}
export default EventListItem;