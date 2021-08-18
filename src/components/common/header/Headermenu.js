import React from "react";
import { Link } from "react-router-dom";
import { Form, Nav, Navbar, NavDropdown, NavLink } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../store/user/userAction";
import "./header.css";
import { APP_NAME } from "../../../config";

const Headermenu = () => {
    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch();

    const onLogout = (event) => {
        event.preventDefault();
        dispatch(logout());
    };
    /*
  useEffect(() => {
    //
    console.log(user);
  }, []);*/

    return (
        <>
            <Navbar bg="white" expand="lg" className="food-nav shadow">
                <div className="container py-2">
                    <Navbar.Brand>
                        <Link to="/" className="Linkweb">
                            {APP_NAME}
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="my-2 my-lg-0" navbarScroll>
                            <NavLink>
                                <Link to="/" className="menu-btn">
                                    Home
                                </Link>
                            </NavLink>
                            <NavLink>
                                <Link to={"#"} className="menu-btn">
                                    Menu{" "}
                                </Link>
                            </NavLink>
                            <NavLink>
                                <Link to={"#"} className="menu-btn">
                                    Features
                                </Link>
                            </NavLink>
                            <NavLink>
                                <Link to={"#"} className="menu-btn">
                                    Blog
                                </Link>
                            </NavLink>
                            <NavLink>
                                <Link to={"#"} className="menu-btn">
                                    Contact Us
                                </Link>
                            </NavLink>
                            {/*<NavLink href="/offers">
              <i className="icofont icofont-sale-discount" /> Offers
              <span className="badge badge-danger">New</span>
            </NavLink>*/}
                        </Nav>

                        <Form inline className="mx-auto my-2 my-lg-0">
                            {/*<div className="d-flex">
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </div>*/}
                        </Form>

                        <Nav
                            className="ml-auto my-2 my-lg-0"
                            // style={{ maxHeight: "100px" }}
                            navbarScroll
                        >
                            {user?.userId !== undefined ? (
                                <NavDropdown
                                    title={
                                        <div className="d-inline-block">
                                            <img
                                                alt="user"
                                                src="http://via.placeholder.com/300"
                                                className="nav-Food-pic rounded-pill mr-3"
                                                style={{ height: "25px" }}
                                            />
                                            My Account
                                        </div>
                                    }
                                    id="navbarScrollingDropdown"
                                >
                                    <NavDropdown.Item
                                        href={`/${user.role}/dashboard`}
                                    >
                                        <i className="icofont icofont-dashboard" />{" "}
                                        Dashboard
                                    </NavDropdown.Item>
                                    {/*<NavDropdown.Item href="/profileEmployee">
                  <i className="icofont icofont-dashboard" /> Profile Employee
                </NavDropdown.Item>
                <NavDropdown.Item href="/profileStudent">
                  <i className="icofont icofont-dashboard" /> Profile Student
                </NavDropdown.Item>*/}
                                    <NavDropdown.Item
                                        onClick={(event) => onLogout(event)}
                                    >
                                        <i className="icofont icofont-sign-out" />{" "}
                                        Logout
                                    </NavDropdown.Item>
                                </NavDropdown>
                            ) : (
                                <>
                                    <NavLink>
                                        <Link
                                            to="/guestuser"
                                            className="menu-btn"
                                        >
                                            Guest Login
                                        </Link>
                                    </NavLink>
                                    <NavLink>
                                        <Link to="/login" className="menu-btn">
                                            Login
                                        </Link>
                                    </NavLink>

                                    <NavLink className="signup-btn">
                                        <Link to={"/signup"}>Signup</Link>
                                    </NavLink>
                                </>
                            )}
                            <NavLink>
                                <Link to={"/cart"} className="menu-btn">
                                    Cart
                                </Link>
                            </NavLink>
                            <Nav.Link>
                                <Link to={"/profile"} className="menu-btn">
                                    User
                                </Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </>
    );
};

export default Headermenu;
