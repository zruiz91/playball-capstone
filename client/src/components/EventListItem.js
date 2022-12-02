import { Link } from 'react-router-dom'

const EventListItem = ({ event, onDeleteEvent }) => {

    function handleDeleteClick() {
        fetch(`/events/${event.id}`, {
            method: "DELETE",
        }).then((r) => {
            if (r.ok) {
                onDeleteEvent(event);
            }
        });
    }



    return (
        <li>
            <section>
                <Link to={`/events/${event.id}`}> <h2> {event.name}</h2></Link>
                <h5>Location: {event.park.name}</h5>
                <h5>Oranizer: {event.user.name}</h5>
                <p>Details: {event.info}</p>

            </section>
            <footer>
                <button onClick={handleDeleteClick}>
                    Get that shit outta here {event.user.name}
                </button>
            </footer>
        </li>
    )
}
export default EventListItem;