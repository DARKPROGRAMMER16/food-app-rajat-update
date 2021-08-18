import React, { useEffect, useState } from "react";
import App from "../common";
import { useDispatch, useSelector } from "react-redux";
import { getPageData } from "../../store/page/pageAction";

const Pages = (props) => {
    const dispatch = useDispatch();
    const slug = props.match.params.slug;
    /*const [page, setPage] = useState({
    title: "Terms and Conditions",
    body: "This is body",
  });*/
    const page = useSelector((state) => state.page.data);
    useEffect(() => {
        dispatch(getPageData(slug));
    }, [slug]);

    return (
        <App>
            <section className="pt-5 pb-5 homepage-search-block position-relative">
                <div className="banner-overlay" />
                <div className="container">
                    <h3>{page?.slug?.toString().toUpperCase()}</h3>
                    <p>{page?.slug}</p>
                    {/*<div  dangerouslySetInnerHTML={page.body} />*/}
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Illum, laudantium, molestias! Aliquid amet
                            architecto asperiores iste nulla quasi quod repellat
                            tempore temporibus voluptate! Animi debitis delectus
                            dolorum facilis magni modi perferendis quae ut
                            voluptates? A ab accusamus aliquid, blanditiis
                            consequuntur enim, est harum nobis officia quae quas
                            quidem quisquam tenetur.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Accusantium, aliquam doloribus eligendi ipsa
                            labore maiores nesciunt obcaecati. Ad deserunt dolor
                            eveniet facere in ipsum itaque iure nam nihil sit
                            veritatis, vitae voluptatibus? Aperiam atque
                            blanditiis ex harum libero modi necessitatibus
                            officiis reprehenderit ullam voluptatibus. Animi
                            architecto atque dolorem doloribus earum enim esse
                            impedit iste iusto minima modi, nihil officia
                            officiis praesentium quaerat quasi rerum saepe
                            sapiente sequi tenetur ullam unde vel voluptatibus?
                            Alias aspernatur consectetur eveniet, excepturi
                            libero molestiae obcaecati officiis repudiandae
                            tempore voluptatem! Aliquid aspernatur consequuntur
                            eius illo praesentium quasi sit unde! Consequatur
                            dolorem doloribus ex explicabo fugiat numquam?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Aspernatur dolorem eligendi eos fugiat illo
                            incidunt iste, maxime molestias quis sequi similique
                            tempora tempore vel veritatis vitae voluptas
                            voluptates! Aliquid consequuntur culpa deserunt
                            inventore ipsam maiores perspiciatis possimus quae
                            sint voluptatem!
                        </p>
                    </div>{" "}
                </div>
            </section>
        </App>
    );
};

export default Pages;
