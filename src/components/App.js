import React, {Component} from 'react';
import Apartments from './Apartments';

const apartments = [
    {
        id: 1,
        title: 'Apartment 101',
        image: '/images/thumbnaildiv.png',
        description: 'lorem impsum dolor',
    },
    {
        id: 2,
        title: 'Apartment 233',
        image: '/images/thumbnaildiv.png',
        description: 'lorem impsum dolor',
    },
    {
        id: 3,
        title: 'BC 123',
        image: '/images/thumbnaildiv.png',
        description: 'lorem impsum dolor',
    },
    {
        id: 4,
        title: 'ggs 77',
        image: '/images/thumbnaildiv.png',
        description: 'lorem impsum dolor',
    },
    {
        id: 5,
        title: 'sdf 2443',
        image: '/images/thumbnaildiv.png',
        description: 'dfsd slkdfj',
    },
];

class App extends Component {
    render() {
        return (
            <div>
                <h1>Apartments</h1>
                <Apartments list={apartments}/>
            </div>
        );
    }
}

export default App;
