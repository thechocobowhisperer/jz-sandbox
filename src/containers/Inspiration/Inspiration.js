import React, {Component} from 'react';
import Navigation from '../../components/Navbar/Navbar';
import Foot from '../../components/Footer/Footer';
 
class Inspiration extends Component{
    state ={name: 'Zac', clicks: 0, test: ['dog', 'cat', 'bird']}


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

export default Inspiration;