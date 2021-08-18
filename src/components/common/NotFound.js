import React from "react";
import App from "./index";
import { Link } from "react-router-dom";

const NotFound = (props) => {
    return (
        <App>
            <section className="section pt-5 pb-5 Food-not-found-page">
                <div className="container">
                    <div className="row">
                        <div className="text-center pt-5 pb-5 col-md-12">
                            <img
                                src="/assets/images/we-are-working.gif"
                                alt={404}
                                className="img-fluid"
                            />
                            <h1 className="mt-2 mb-2">Page not found</h1>
                            <p>
                                Uh-oh! Looks like the page you are trying to
                                access, doesn't
                                <br />
                                exist. Please start afresh.
                            </p>
                            <Link className="btn btn-primary btn-lg" to="/">
                                GO HOME
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </App>
    );
};

export default NotFound;
