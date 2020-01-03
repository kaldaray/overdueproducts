import React, {Component} from 'react';

class Today extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            pageTitleFirst: '',
            pageTitleSecond: '',
        };
      }

    handleInputSecond = (event) => {
        let date = new Date();

        let newDate = new Date(date.setTime(date.getTime() + event.target.value * 86400000 ));
         this.setState({    
            pageTitleSecond: newDate.toLocaleDateString()
        })
    }

    render() {
        return (
            <div className="container">
                <h1>Ввод для сегодняшнего дня</h1>
                <div className="row margin-row">
                    <div className="col-md-12">
                        <div className="text-center">  
                                <div className="top-name center-block text-center">
                                    <input type='number' autofocus="" required='' className='form-control' onChange={this.handleInputSecond}/>
                                </div>              
                                <h1 className="h3 font-weight-normal">Дата просрочки - {this.state.pageTitleSecond}</h1>
                        </div>
                    </div>
                </div>
            </div>            
        )
    }
}

export default Today;