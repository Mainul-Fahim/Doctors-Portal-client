import React from 'react';
import flouride from '../../../images/flouride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import ServicesDetail from '../ServicesDetail/ServicesDetail';
const servicesData=[
    {
        name: 'Flouride Treatment',
        image: flouride
    },
    {
        name: 'Cavity Filling',
        image: cavity
    },
    {
        name: 'Teeth Whitening',
        image: whitening
    }
]
const Services = () => {
    return (
        <section>
            <div className="text-center mt-5">
                <h5>Our Services</h5>
                <h2>Services we provide</h2>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5">
            {
                servicesData.map(service =><ServicesDetail service={service}></ServicesDetail>)
            }
            </div>
        </div>
        </section>
    );
};

export default Services;