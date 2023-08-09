import ParksContainer from "./ParksContainer";

const Home = () => {
    return (
        // <div class="page">
        //     <h1>Lets Play With Your Balls</h1>

        // </div>

        <div>

            <section id="title">


                <div class="container-fluid mt-5 mb-0">


                    {/* <!-- Nav Bar --> */}
                    {/* <nav class="navbar navbar-expand-lg navbar-dark">

                        <a class="navbar-brand" href="">PlayBall</a>

                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">

                            <ul class="navbar-nav ms-auto" id="navbarSupportedContent">
                                <li class="nav-item">
                                    <a class="nav-link" href="#footer">Contact</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#pricing">Pricing</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#cta">Download</a>
                                </li>
                            </ul>

                        </div>
                    </nav> */}



                    {/* <!-- Title --> */}
                    <div class="row">

                        <div class="col-lg-6">
                            <h1 class="big-heading">Find the Park thats right for you.</h1>
                            <button type="button" class="btn btn-dark btn-lg download-button"><i class="fa-brands fa-apple"></i> Download</button>
                            <button type="button" class="btn btn-dark btn-lg download-button"><i class="fa-brands fa-android"></i> Download</button>
                        </div>

                        <div class="col-lg-6">
                            {/* <img src="images/iphone6.png" alt="iphone-mockup" class="title-image"> */}
                        </div>

                    </div>

                </div>
            </section>


            {/* <!-- Features --> */}

            <section id="features">

                <div class="container-fluid">
                    <div class="row">
                        <div class="feature-box col-lg-4 col-md-12">
                            <i class="feature-icon fa-sharp fa-solid fa-circle-check fa-4x"></i>
                            <h3 class="feature-title">Easy to use.</h3>
                            <p>So easy to use, even your park could do it.</p>
                        </div>
                        <div class="feature-box col-lg-4 col-md-12">
                            <i class="feature-icon fa-solid fa-bullseye fa-4x"></i>
                            <h3 class="feature-title">Elite Clientele</h3>
                            <p>We have all the parks, the greatest parks.</p>
                        </div>
                        <div class="feature-box col-lg-4 col-md-12">
                            <i class="feature-icon fa-solid fa-heart fa-4x"></i>
                            <h3 class="feature-title">Guaranteed to work.</h3>
                            <p>Find the love of your park's life or your money back.</p>
                        </div>
                    </div>
                </div>
            </section>


            {/* <!-- Testimonials --> */}

            <section id="testimonials">

                <div id="carouselExample" class="carousel slide" data-bs-ride="false">
                    <div class="carousel-inner">
                        <div class="carousel-item container-fluid active">
                            <h2 class="testimonial-text">I no longer have to search other parks for events. I've found the hottest event on
                                PlayBall. Woof.</h2>
                            {/* <img class="testimonial-img" src="images/park-img.jpg" alt="park-profile"> */}
                            <em>Pebbles, New York</em>
                        </div>
                        <div class="carousel-item container-fluid">
                            <h2 class="testimonial-text">My park used to be so lonely, but with PlayBall's help, they've found the love of
                                their life. I think.</h2>
                            {/* <img class="testimonial-img" src="images/lady-img.jpg" alt="lady-profile"> */}
                            <em>Beverly, Illinois</em>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>





            </section>


            {/* <!-- Press --> */}

            <section id="press">
                {/* <!-- <div class="container-fluid"> --> */}
                <div class="row">
                    <div class="col">
                        {/* <img class="press-logo" src="images/techcrunch.png" alt="tc-logo"> */}
                    </div>

                    <div class="col">
                        {/* <img class="press-logo" src="images/tnw.png" alt="tnw-logo"> */}
                    </div>

                    <div class="col">
                        {/* <img class="press-logo" src="images/bizinsider.png" alt="biz-insider-logo"> */}
                    </div>

                    <div class="col">
                        {/* <img class="press-logo" src="images/mashable.png" alt="mashable-logo"> */}
                    </div>


                </div>

                {/* <!-- </div> --> */}

            </section>


            {/* <!-- Pricing --> */}

            <section id="pricing">
                {/* <!-- <div class="container-fluid"> --> */}

                <h2 class="section-heading">A Plan for Every park's Needs</h2>
                <p>Simple and affordable price plans for your and your park.</p>

                <div class="row">

                    <div class="price-tier col-lg-4 col-md-6 col-sm-12">
                        <div class="card">
                            <div class="card-header">
                                <h3>Basic</h3>
                            </div>
                            <div class="card-body">
                                <h2 class="pricing-text">Free</h2>
                                <p>5 Matches Per Day</p>
                                <p>10 Messages Per Day</p>
                                <p>Unlimited App Usage</p>
                                <div class="d-grid col-8 mx-auto">
                                    <button class="btn btn-outline-dark" type="button">Sign Up</button>
                                </div>
                                {/* <!-- <button type="button" class="btn btn-outline-dark">Sign Up</button> --> */}
                            </div>
                        </div>
                    </div>

                    <div class="price-tier col-lg-4 col-md-6 col-sm-12">
                        <div class="card">
                            <div class="card-header">
                                <h3>Plus</h3>
                            </div>
                            <div class="card-body">
                                <h2 class="pricing-text">$49 / mo</h2>
                                <p>Unlimited Matches</p>
                                <p>Unlimited Messages</p>
                                <p>Unlimited App Usage</p>
                                <div class="d-grid col-8 mx-auto">
                                    <button class="btn btn-dark" type="button">Sign Up</button>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div class="price-tier col-lg-4 col-md-12">
                        <div class="card">
                            <div class="card-header">
                                <h3>Premium</h3>
                            </div>
                            <div class="card-body">
                                <h2 class="pricing-text">$99 / mo</h2>
                                <p>Pirority Listing</p>
                                <p>Unlimited Matches</p>
                                <p>Unlimited Messages</p>
                                <p>Unlimited App Usage</p>
                                <div class="d-grid col-8 mx-auto">
                                    <button class="btn btn-dark" type="button">Sign Up</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* <!-- </div> --> */}

            </section>


            {/* <!-- Call to Action --> */}

            <section id="cta">
                <div class="container-fluid">
                    <h3 class="big-heading">Find the Park thats right for you.</h3>
                    <button type="button" class="btn btn-dark btn-lg download-button"><i class="fa-brands fa-apple"></i>
                        Download</button>
                    <button type="button" class="btn btn-light btn-lg download-button"><i class="fa-brands fa-google-play"></i>
                        Download</button>

                </div>
            </section>


            {/* <!-- Footer --> */}

            <footer id="footer">
                <div class="container-fluid">
                    <i class="social-icon fa-brands fa-facebook-f"></i>
                    <i class="social-icon fa-brands fa-twitter"></i>
                    <i class="social-icon fa-brands fa-instagram"></i>
                    <i class="social-icon fa-regular fa-envelope"></i>
                    <p>© Copyright PlayBall</p>
                </div>

            </footer>
        </div>









    )
}



export default Home;



