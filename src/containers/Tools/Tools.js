import React, {Component} from 'react';
import Navigation from '../../components/Navbar/Navbar';
import Foot from '../../components/Footer/Footer';
 
class Tools extends Component{
    state ={name: 'Zac', clicks: 0, test: ['dog', 'cat', 'bird']}

    raiseCounter = (zac)  => {
      const newArray = this.state.test
      const newClicks = this.state.clicks += 1

      this.setState({clicks:newClicks, test: newArray})
    }

    changeName = (event)  => {
      console.log(event.target.value)
      const newName = event.target.value 
      this.setState({ name: newName })
    }

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