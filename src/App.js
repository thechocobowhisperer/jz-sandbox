import React, {Component} from 'react';
import Navigation from './components/Navbar/Navbar';
import Button from './components/Button/Button';
import Jumbo from './components/Jumbotron/Jumobotron';
import Foot from './components/Footer/Footer';
 
class App extends Component{
    state ={}

    alertThingy = ()  => {
      alert('hello')
    }

    consoleLog = ()  => {
      console.log('test')
    }

    render() {
        return(
          <div class='container'>
            <Navigation />
            <Jumbo />
            <Button alert={this.alertThingy}>I am a button</Button>
            <hr />
            <Foot />
           </div>
           
        );
    };
}

export default App;