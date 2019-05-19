import React, {Component} from 'react';

 
class NotFound extends Component{
    
    render() {
        return(
            <div className='container'>            
                <h1>Page not found!</h1>
                <p>Go back, check that the page you are trying to reach exists, and, try again!</p>
            </div>
           
        );
    };
}

export default NotFound;

