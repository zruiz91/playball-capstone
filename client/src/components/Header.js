import { useHistory, Link } from 'react-router-dom'
import NavBar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";


const Header = ({ currentUser, setCurrentUser }) => {


    const history = useHistory()
    //function to handle logout that calls a delete fetch request and then sets currentuser to false and redirects user to home
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
        // <NavBar>

        //     <h1>
        //         PlayBall
        //     </h1>
        //     {/* ternary to that displays different header options dependingon whether or not user is signed in. each is a link to a different page */}
        //     {!currentUser ?
        //         <div>
        //             <button><Link to='/login'>Log In</Link></button>
        //             <button><Link to='/users/new'>Sign Up</Link></button>
        //         </div>
        //         :
        //         <div>
        //             <button><Link to='/parks'>Parks</Link></button>
        //             <button><Link to='/events'>Events</Link></button>
        //             <button><Link to='/users/:id'>{currentUser.name}</Link></button>
        //             <button onClick={handleLogOut}>Log Out</button>
        //         </div>
        //     }
        // </NavBar>
        <nav class="navbar navbar-expand-lg navbar-light top-nav text-muted border rounded fixed ">
            <div class="container-fluid">
                <div class="navbar-brand top-nav-font">PlayBall</div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    {/* <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <Link to='/users/new' class="nav-link active">Sign Up</Link>
                        </li>
                        <li class="nav-item">
                        <Link to='/login' class="nav-link active">Log In</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/parks' class="nav-link">Parks</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/events' class="nav-link">Events</Link>
                        </li> */}

                        {!currentUser ?
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link to='/users/new' class="nav-link active top-nav-font">Sign Up</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/login' class="nav-link active top-nav-font">Log In</Link>
                        </li>
                    </ul>
                        :
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to='/parks' class="nav-link top-nav-font">Parks</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/events' class="nav-link top-nav-font">Pick-Ups</Link>
                            </li>
                        </ul>
                    }


                        {/* <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link class="dropdown-item" to='/parks'>Parks</Link></li>
                                <li><Link class="dropdown-item" to='/events'>Events</Link></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li> */}
                        {/* <li class="nav-item">
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li> */}
                    {/* </ul> */}
                    {currentUser?<Link to='/users/:id' class="text-decoration-none top-nav-font nav-link active m-1" >{currentUser.name}</Link>:null}
                    {currentUser?<button class="btn top-nav-font border m-1" onClick={handleLogOut}>Log Out</button>:null}
                </div>
            </div>
        </nav>
    )
}

export default Header;