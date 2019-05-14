import React, {Component} from 'react';
import Navigation from '../../components/Navbar/Navbar';
import Foot from '../../components/Footer/Footer';
 
class Soundtrack extends Component{
    state ={name: 'Zac', clicks: 0, test: ['dog', 'cat', 'bird']}


    render() {
        return(
          <div className='container'>
            <Navigation />
            <div className='d-flex justify-content-center'>
                <iframe src="https://open.spotify.com/embed/user/7nuzg0h0r6660ajs8j07phpqe/playlist/5mf3GZeiiO0AEFQAtmYnMK" 
                        width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media">
                </iframe>
            </div>
            <hr />
            <Foot />
           </div>
           
        );
    };
}

export default Soundtrack;
