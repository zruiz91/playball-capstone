import { Link, useParams, useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'


const ParkDetailsPage = () => {
    const [park, setPark] = useState({})
    const [errors, setErrors] = useState();

    const [loading, setLoading] = useState(true)

    const params = useParams()
    const history = useHistory()


    useEffect(() => {
        fetch("/parks/parks.id")
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

    return (
        <li>
            <section>
                <h4> {park.name}</h4>

            </section>
            <footer>
                <button>Favorite</button>
            </footer>
        </li>
    )
}
export default ParkDetailsPage;