import React from 'react';
import featured from '../../../images/Featured.png';
const FeaturedService = () => {
    return (
        <section className="d-flex justify-content-center mt-5 pt-5 mb-5">
            <div className="row w-75 mb-5 pb-5">
                <div className="col-md-5">
                    <img src={featured} alt="" className="img-fluid"/>
                </div>
                <div className="col-md-7 mt-5">
                    <h2>Exceptional Dental <br/> Care, On Your Terms</h2>
                    <p className="secondary mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat deserunt quia perspiciatis quasi amet incidunt enim pariatur eveniet est. Veritatis sapiente possimus provident facere ipsam sit maxime, quasi aliquam distinctio praesentium ipsa! Eligendi eveniet, vel fugiat ex obcaecati explicabo eos unde quasi amet accusantium doloribus debitis quidem cumque, animi molestias, placeat enim nulla omnis fuga mollitia nisi quaerat esse. Quas ab est, nam molestiae eum dolore sunt. Porro maiores dolor sed eos. Illo minima libero odit nemo odio illum facilis quisquam! Ab eligendi maxime obcaecati, necessitatibus distinctio aperiam odio eaque velit, omnis numquam harum. Consectetur et modi repellat cum facere.</p>
                    <button className="btn btn-primary mt-3">Get Started</button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;