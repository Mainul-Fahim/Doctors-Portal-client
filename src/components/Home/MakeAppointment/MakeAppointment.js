import React from 'react';
import appointment from '../../../images/appointment.png';
import './MakeAppointment.css';
const MakeAppointment = () => {
    return (
        <section className="ms-5 d-flex justify-content-center">
            <div className="make-appointment ms-5 mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <img src={appointment} alt=""/>
                    </div>
                    <div className="col-md-7 text-white py-5 right">
                        <h5 className="text-primary text-uppercase ">Appointment</h5>
                        <h1 className="my-4">Make an Appointment <br/> Today</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque magnam ad consequuntur assumenda saepe hic amet nemo ea facere a!</p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
};

export default MakeAppointment;