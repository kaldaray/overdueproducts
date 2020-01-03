import React, {Component} from 'react';

class EnterData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            pageTitleFirst: '',
        };
      }

    handleInputFirst = (event) => {
        let date  = document.getElementById("date-input").value;

        var dateEntered = new Date(date);

      let newDate = new Date(dateEntered.setTime(dateEntered.getTime() + event.target.value * 86400000 ));
      this.setState({    
            pageTitleFirst: newDate.toLocaleDateString()
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row margin-row">                   
                    <div className="col-md-2">
                        <p className="lead">Дата</p>
                    </div>
                    <div className="col-md-10">
                        <input className="form-control" type="date" id="date-input"/>
                    </div>
                </div>
                <div className="row margin-row">
                    <div className="col-md-12">
                        <div className="text-center">  
                                <div className="top-name center-block text-center">
                                    <input type='number' autofocus="" required='' className='form-control' onChange={this.handleInputFirst}/>
                                </div>              
                                <h1 className="h3  font-weight-normal">Дата просрочки - {this.state.pageTitleFirst}</h1>
                        </div>
                    </div>
                </div>
            </div>        
            )
    }
}

export default EnterData;