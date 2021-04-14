import React from 'react';
import Chair from '../../../images/chair.png';

const HeaderMain = () => {
    return (
        <main style={{height: '600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1>Your new smile <br/> Starts here</h1>
                <p className="text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam saepe totam magni ducimus nesciunt nostrum!</p>
                <div className="btn btn btn-primary">Get Appoinment</div>
            </div>
            <div className="col-md-6">
                <img src={Chair} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;