import React, {Component} from 'react';
import Navigation from '../../components/Navbar/Navbar';
import Foot from '../../components/Footer/Footer';
 
class Inspiration extends Component{


    render() {
        return(
          <div className='container'>
            <Navigation />
            <hr/>
            <div  className='container contentTitle'>
                <h1>Artists that inspire and motivate me:</h1>
            </div>
            <div className='container content'>
                <ul>
                    <li><a href='https://www.twitch.tv/cnotbusch'>cnotbusch</a></li>
                    <li><a href='https://www.twitch.tv/mocha_minis'>Mocha_Minis</a></li>
                    <li><a href='https://www.twitch.tv/pixologic'>Pixologic (Zbrush)</a></li>
                </ul>
            </div>
                
            <hr />
            <Foot />
           </div>
           
        );
    };
}

export default Inspiration;