import React from 'react'

function NavBar() {
    return (
        <>
            {/* Navbar Start */}
            <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
                <a
                    href="index.html"
                    className="navbar-brand d-flex align-items-center px-4 px-lg-5"
                >
                    <h2 className="m-0 text-primary">
                        
                        RubyLounge
                    </h2>
                </a>
                <button
                    type="button"
                    className="navbar-toggler me-4"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <a href="index.html" className="nav-item nav-link active">
                            Home
                        </a>
                        <a href="about.html" className="nav-item nav-link">
                            About
                        </a>
                        <a href="service.html" className="nav-item nav-link">
                            Services
                        </a>
                       
                        <a href="contact.html" className="nav-item nav-link">
                            Contact
                        </a>
                    </div>
                    <a href="" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">
                       Book Your Slot
                        <i className="fa fa-arrow-right ms-3" />
                    </a>
                </div>
            </nav>
            {/* Navbar End */}
        </>

    )
}

export default NavBar