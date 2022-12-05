import { useHistory, Link } from 'react-router-dom'


const Header = ({ currentUser, setCurrentUser }) => {


    const history = useHistory()

    const handleLogOut = () => {
        fetch("/logout", {
            method: "DELETE"
        })
            .then(res => {
                if (res.ok) {
                    setCurrentUser(false)
                    history.push("/")
                } else {
                    console.log("couldn't do it")
                }
            })
    }
    return (
        <header>

            {/* <button>🏀</button>
            <button>⚽️</button>
            <button>🎾</button>
            <button>⚾️</button> */}
            <h1>
                PlayBall
            </h1>
            {!currentUser ?
                <div>
                    <button><Link to='/login'>Log In</Link></button>
                    <button><Link to='/users/new'>Sign Up</Link></button>
                </div>
                :
                <div>
                    <button><Link to='/parks'>Parks</Link></button>
                    <button><Link to='/events'>Events</Link></button>
                    <button><Link to='/users/edit'>{currentUser.name}</Link></button>
                    <button onClick={handleLogOut}>Log Out</button>
                </div>
            }
        </header>
        // <nav class="navbar navbar-light bg-light">
        //     <div class="container-fluid">
        //         <h1>
        //             PlayBall
        //         </h1>
        //         <form class="d-flex">
        //             <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        //                 <button class="btn btn-outline-success" type="submit">Search</button>
        //         </form>
        //
        // </nav>
    )
}

export default Header;