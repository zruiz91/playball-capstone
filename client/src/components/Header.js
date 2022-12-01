import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <header>

            <h1>
                {/* <button>🏀</button>
            <button>⚽️</button>
            <button>🎾</button>
            <button>⚾️</button> */}
                <button><Link to='/parks'>Parks</Link></button>
                <button><Link to='/events'>Events</Link></button>
            </h1>
            <h1>
                PlayBall
            </h1>
            <h1>
                <button><Link to='/login'>Log In</Link></button>
                <button><Link to='/signup'>Sign In</Link></button>
            </h1>
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
        //     </div>
        // </nav>
    )
}

export default Header;