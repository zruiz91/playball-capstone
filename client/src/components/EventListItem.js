
const EventListItem = ({ event, onUpdateEvent, onDeleteEvent }) => {

    // function handleDeleteClick() {
    //     fetch(`/events/${id}`, {
    //         method: "DELETE",
    //     }).then((r) => {
    //         if (r.ok) {
    //             onDeleteEvent(event);
    //         }
    //     });
    // }



    return (
        <li>
            <section>
                <h4>Event: {event.name} </h4>
                <h5>Location: {event.park.name}</h5>
                <h5>Oranizer: {event.user.name}</h5>
                <p>Details: {event.info}</p>
            </section>
            {/* <footer>
                <button onClick={handleDeleteClick}>
                    Donate to GoodWill
                </button>
            </footer> */}
        </li>
    )
}
export default EventListItem;