import React from 'react';

const Foot = (props) => {
    return (
        <footer className='panel-footer pt-5'>
            <div className='container-fluid row'>
                <div className='col text-center'><a href="">About</a></div>
                <div className='col text-center'><a href="">Affiliates</a></div>
                <div className='col text-center'><a href="">Contact</a></div>    
            </div>
                <div className='footer-copyright text-center pt-4'>© 2019 Copyright</div>
        </footer>
    )
};

export default Foot;