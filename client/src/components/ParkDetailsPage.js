import { Link, useParams, useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'


const ParkDetailsPage = () => {
    const [park, setPark] = useState({})
    const [errors, setErrors] = useState(false);

    const [loading, setLoading] = useState(true)

    const params = useParams()
    const history = useHistory()


    useEffect(() => {
        fetch(`/parks/${params.id}`)
            .then(res => {
                if (res.ok) {
                    res.json().then(data => {
                        setPark(data)
                        setLoading(false)
                    })
                } else {
                    console.log('error')
                    res.json().then(data => setErrors(data.error))
                }
            })
    }, [])
    const { id, name, address, amenities } = park
    return (
        <li>
            <section>
                <h4> {id}</h4>
                <h4> {name}</h4>
                <h4> {address}</h4>
                <ul>
                    {amenities.map(amenity => <li>{amenity}</li>)}
                </ul>
            </section>
            <footer>
                <button>Favorite</button>
            </footer>
        </li>
    )
}
export default ParkDetailsPage;