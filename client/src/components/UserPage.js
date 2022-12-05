import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


function UserPage() {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    const [errors, setErrors] = useState(false)

    const params = useParams()
    const { id } = params
    useEffect(() => {
        fetch(`/users/${id}`)
            .then(res => {
                if (res.ok) {
                    res.json().then(user => {
                        setUser(user)
                        console.log(user.events)
                        setLoading(false)
                    })
                } else {
                    res.json().then(data => setErrors(data.error))
                }
            })

    }, [])

    // const userEventsListItems = user.events.map((event) => {
    //     return <li>{event.name}</li>
    // })

    if (loading) return <h1>One</h1>
    if (errors) return <h1>{errors}</h1>
    return (
        <div>
            <h1>{user.name}</h1>
            <ul>
                {/* <li>{user.events[0]}</li> */}
                {/* {userEventsListItems} */}
            </ul>
        </div>
    )
}

export default UserPage