import { Link } from 'react-router-dom'
import Card from "react-bootstrap/Card";

const EventListItem = ({ event, onDeleteEvent }) => {
    const { id, name, park, user, info } = event

    function handleDeleteClick() {
        fetch(`/events/${id}`, {
            method: "DELETE",
        }).then((r) => {
            if (r.ok) {
                onDeleteEvent(event);
            }
        });
    }



    return (
        <div class="col">
            <div class="card text-center" >
                <section class="card-body">
                    <Link to={`/events/${id}`}> <h5 class="card-title"> {name}</h5></Link>
                    <h6 class="card-subtitle mb-2 text-muted">Location: {park.name}</h6>
                    <h6 class="card-subtitle mb-2 text-muted">Oranizer: {user.name}</h6>
                    <p class="card-text mb-2 text-muted">Details: {info}</p>

                </section>
                <footer>
                    <Link to={`/events/${id}/edit`}> <h6 class="card-link">Edit Event</h6></Link>
                    <button class="btn btn-danger" onClick={handleDeleteClick}>
                        Get that shit outta here {user.name}
                    </button>

                </footer>
            </div>
        </div>

    )
}
export default EventListItem;