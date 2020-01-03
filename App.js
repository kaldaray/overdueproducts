import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


import { render } from '@testing-library/react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          pageTitle: ''
        };
      }

    handleInput = (event) => {
        let date = new Date();

        let newDate = new Date(date.setTime(date.getTime() + event.target.value * 86400000 ));
         this.setState({    
            pageTitle: newDate.toLocaleDateString()
        })
    }

    render() {
        return (
            <div className="text-center mb-4">          
                <div className="top-name center-block text-center">
                    <input type='number' autofocus="" required='' className='form-control' onChange={this.handleInput}/>
                </div>                      
                <h1 className="h3 mb-3 font-weight-normal">Дата просрочки - {this.state.pageTitle}</h1>
            </div>
        )
    }
}

export default App;