import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import InfoCard from '../InfoCard/InfoCard';

const infoData=[
    {
        title: 'Opening Hours',
        description: 'We are open 7 days',
        icon: faClock,
        background_color: 'primary'
    },
    {
        title: 'Visit Our Location',
        description: 'Brooklyn,Ny 10003 USA',
        icon: faMapMarker,
        background_color: 'dark'
    },
    {
        title: 'Call us Now',
        description: '+15678900929',
        icon: faPhone,
        background_color: 'primary'
    }
]
const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center">
            <div className="w-75 row">
            {
                infoData.map(info=><InfoCard info={info}></InfoCard>)
            }
            </div>
        </section>
    );
};

export default BusinessInfo;