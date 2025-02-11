import React, { Component } from "react";
import Link from "../../utils/ActiveLink";
import { FaHeadset } from "react-icons/fa";
import Router from "next/router";
import Head from "next/head";

class Navbar extends Component {
  // Navbar
  _isMounted = false;
  state = {
    display: false,
    collapsed: true,
  };
  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  componentDidMount() {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);

    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init("871703863421050");
        ReactPixel.pageView();

        Router.events.on("routeChangeComplete", () => {
          ReactPixel.pageView();
        });
      });
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { collapsed } = this.state;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";

    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Flyweis Technology</title>
          <meta
            name="keywords"
            content="Flyweis Services Pvt.Ltd, Flyweis Services, Flyweis, Flyweis Group, Flyweis Technology, Flyweis Services Private Limited"
          />
          <meta
            name="description"
            content="Flyweis Technology Provides Complete IT Solutions to Businesses, Services Related to APP Development, Website Development, Artificial Intelligence, Cyber Secuirity, etc"
          />
        </Head>
        <div id="navbar" className="navbar-area fixed-top">
          <nav className="navbar navbar-expand-md navbar-light">
            <div className="container">
              <Link href="/">
                <span className="navbar-brand">
                  <img loading="lazy"   src="/images/flyweis_logo.png" alt="logo"  />
                </span>
              </Link>

              <button
                onClick={this.toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav m-auto">
                  <li className="nav-item">
                    <Link href="/" activeClassName="active">
                      <span className="nav-link">
                        Home
                        {/* <i className='bx bx-chevron-down'></i> */}
                      </span>
                    </Link>

                    {/* <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/" activeClassName="active">
                                                    <span className="nav-link">Home One</span>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/index-2" activeClassName="active">
                                                    <span className="nav-link">Home Two</span>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/index-3" activeClassName="active">
                                                    <span className="nav-link">Home Three</span>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/index-4" activeClassName="active">
                                                    <span className="nav-link">Home Four</span>
                                                </Link>
                                            </li>
                                            
                                            <li className="nav-item">
                                                <Link href="/index-5" activeClassName="active">
                                                    <span className="nav-link">Home Five</span>
                                                </Link>
                                            </li>
                                        </ul> */}
                  </li>

                  <li className="nav-item">
                    <Link href="/about-us">
                      <span className="nav-link">
                        About
                        {/* <i className='bx bx-chevron-down'></i> */}
                      </span>
                    </Link>

                    {/* <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/about-1" activeClassName="active">
                                                    <span className="nav-link">About Style One</span>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/about-2" activeClassName="active">
                                                    <span className="nav-link">About Style Two</span>
                                                </Link>
                                            </li>
                                        </ul> */}
                  </li>

                  <li className="nav-item">
                    <Link href="/services" activeClassName="active">
                      <span className="nav-link">
                        Services
                        {/* <i className='bx bx-chevron-down'></i> */}
                      </span>
                    </Link>

                    {/* <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/services" activeClassName="active">
                                                    <span className="nav-link">Services Style One</span>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/services-2" activeClassName="active">
                                                    <span className="nav-link">Services Style Two</span>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/services-3" activeClassName="active">
                                                    <span className="nav-link">Services Style Three</span>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/services-4" activeClassName="active">
                                                    <span className="nav-link">Services Style Four</span>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/service-details" activeClassName="active">
                                                    <span className="nav-link">Service Details</span>
                                                </Link>
                                            </li>
                                        </ul> */}
                  </li>

                  {/* <li className="nav-item"> */}
                  {/* <Link href="/">
                                            <span className="nav-link" onClick={e => e.preventDefault()}>
                                                Pages <i className='bx bx-chevron-down'></i>
                                            </span>
                                        </Link> */}

                  {/* <ul className="dropdown-menu"> */}
                  {/* <li className="nav-item">
                                                <Link href="/pricing" activeClassName="active">
                                                    <span className="nav-link">Pricing</span>
                                                </Link>
                                            </li> */}

                  {/* <li className="nav-item">
                                                <Link href="/team" activeClassName="active">
                                                    <span className="nav-link">Team</span>
                                                </Link>
                                            </li> */}
                  {/* 
                                            <li className="nav-item">
                                                <Link href="/testimonials" activeClassName="active">
                                                    <span className="nav-link">Testimonials</span>
                                                </Link>
                                            </li> */}

                  {/* <li className="nav-item">
                                                <Link href="/faq" activeClassName="active">
                                                    <span className="nav-link">Faq</span>
                                                </Link>
                                            </li> */}

                  {/* <li className="nav-item">
                                                <Link href="/">
                                                    <span className="nav-link" onClick={e => e.preventDefault()}>
                                                        User <i className='bx bx-chevron-down'></i>
                                                    </span>
                                                </Link>

                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link href="/login" activeClassName="active">
                                                            <span className="nav-link">Login</span>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/sign-up" activeClassName="active">
                                                            <span className="nav-link">Sign Up</span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li> */}

                  {/* <li className="nav-item">
                                                <Link href="/terms-conditions" activeClassName="active">
                                                    <span className="nav-link">Terms & Conditions</span>
                                                </Link>
                                            </li>  */}

                  {/* <li className="nav-item">
                                                <Link href="/privacy-policy" activeClassName="active">
                                                    <span className="nav-link">Privacy Policy</span>
                                                </Link>
                                            </li> */}

                  {/* <li className="nav-item">
                                                <Link href="/coming-soon" activeClassName="active">
                                                    <span className="nav-link">Coming Soon</span>
                                                </Link>
                                            </li> */}

                  {/* <li className="nav-item">
                                                <Link href="/login" activeClassName="active">
                                                    <span className="nav-link">Log In</span>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/sign-up" activeClassName="active">
                                                    <span className="nav-link">Sign Up</span>
                                                </Link>
                                            </li>  */}

                  {/* <li className="nav-item">
                                                <Link href="/404" activeClassName="active">
                                                    <span className="nav-link">404 error</span>
                                                </Link>
                                            </li> */}
                  {/* </ul>
                                    </li> */}

                  <li className="nav-item">
                    <Link href="/blog" activeClassName="active">
                      <span className="nav-link">
                        BLOG
                        {/* <i className='bx bx-chevron-down'></i> */}
                      </span>
                    </Link>

                    {/* <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/news-grid" activeClassName="active">
                                                    <span className="nav-link">News Grid</span>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/news-right-sidebar" activeClassName="active">
                                                    <span className="nav-link">News Right Sidebar</span>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/news-details" activeClassName="active">
                                                    <span className="nav-link">News Details</span>
                                                </Link>
                                            </li>
                                        </ul> */}
                  </li>

                  <li className="nav-item">
                    <Link href="/portfolio">
                      <span className="nav-link">
                        PORTFOLIO
                        {/* <i className='bx bx-chevron-down'></i> */}
                      </span>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/contact">
                      <span className="nav-link">
                        Contact
                        {/* <i className='bx bx-chevron-down'></i> */}
                      </span>
                    </Link>

                    {/* <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/contact" activeClassName="active">
                                                    <span className="nav-link">Contact Style One</span>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/contact-2" activeClassName="active">
                                                    <span className="nav-link">Contact Style Two</span>
                                                </Link>
                                            </li>
                                        </ul> */}
                  </li>
                </ul>

                <div className="others-options">
                  <Link href="https://flyweis.technology/thankingyou?id=Information">
                    <span className="default-btn">SUPPORT</span>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </>
    );
  }
}

export default Navbar;
