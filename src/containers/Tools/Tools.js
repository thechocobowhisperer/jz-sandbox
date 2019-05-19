import React, {Component} from 'react';
import Navigation from '../../components/Navbar/Navbar';
import Foot from '../../components/Footer/Footer';
 
class Tools extends Component{
   
    render() {
        return(
          <div className='container'>
            <Navigation />
            
            <hr />
            <Foot />
           </div>
           
        );
    };
}

export default Tools;