import React, {Component} from 'react';
import './App.css';

import EnterData from './components/EnterData';
import Today from './components/Today';

class App extends Component {
    render() {
        return (
            <div className='container'>
                <EnterData/>    
                <Today/>
            </div>
        )
 
    }
}

export default App;