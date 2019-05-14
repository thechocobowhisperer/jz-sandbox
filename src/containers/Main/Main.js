import React, {Component} from 'react';
import Navigation from '../../components/Navbar/Navbar';
import {Button, Input} from 'reactstrap';
import Jumbo from '../../components/Jumbotron/Jumobotron';
import Foot from '../../components/Footer/Footer';
 
class Main extends Component{
    state ={name: 'Zac', clicks: 0, test: ['dog', 'cat', 'bird']}

    raiseCounter = (zac)  => {
      const newArray = this.state.test
      // this.state.test[0] = 'chipper'
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
            <Jumbo />
            <Button color="primary" onClick={(zac) => this.raiseCounter(zac)}>
              Counter
            </Button>
            <Input name='Name of Input' placeholder='Insert Name here' onChange={(cody) => this.changeName(cody)}/>
            {this.state.name} has clicked this {this.state.clicks} times
            <hr />
            <Foot />
           </div>
           
        );
    };
}

export default Main;

