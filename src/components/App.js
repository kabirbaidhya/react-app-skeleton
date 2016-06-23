import React, {Component} from 'react';
import ListView from './grid/ListView';
import {apartments}  from '../temp/data';
import DetailModal from './DetailModal';

const initialState = () => ({
    modal: {
        show: false,
        data: {}
    }
});

class App extends Component {

    constructor(props) {
        super(props);

        this.state = initialState();
    }

    showModal(data) {
        this.setState({
            modal: {
                show: true,
                data,
                onHide: () => this.setState(initialState())
            }
        });
    }

    hideModal() {
        this.setState(initialState());
    }

    render() {
        let {modal} = this.state;

        return (
            <div>
                <h1>Apartments Available</h1>
                <ListView list={apartments} showModal={this.showModal.bind(this)}/>
                <DetailModal {...modal}/>
            </div>
        );
    }
}

export default App;
