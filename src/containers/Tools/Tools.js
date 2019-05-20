import React, {Component} from 'react';
import Navigation from '../../components/Navbar/Navbar';
import Foot from '../../components/Footer/Footer';
 
class Tools extends Component{
   
    render() {
        return(
          <div className='container'>
            <Navigation />
            <hr/>
            <div className='contentTitle'>
                <h1>Tools/programs I use in various steps of the creative process:</h1>
            </div>
            <div className='container content'>
                <div className='row'>
                    <ul className='col-md-6'>
                        <h3>Digital Tools</h3>
                        <li><a href='https://www.blender.org'>Blender</a></li>
                        <li><a href='https://krita.org/en/'>Krita</a></li>
                        <li><a href='https://sourceforge.net/projects/freemind/'>Freemind</a></li>
                    </ul>
                    
                    <ul className='col-md-6'>
                        <h3>Analog Tools</h3>
                        <li><a href='https://www.thearmypainter.com/'>Army Painter Paints</a></li>
                    </ul>
                </div>
            </div>
            <hr />
            <Foot />
           </div>
           
        );
    };
}

export default Tools;