import React, {Component} from 'react';
import {Grid, Row, Col, Thumbnail, Button} from 'react-bootstrap';
import Item from './Item';

class ListView extends Component {
    render() {
        let {list, showModal} = this.props;

        return (
            <Row className="apartments">
                {list.map(
                    (data, index) => <Item key={index} {...data} showModal={showModal} />
                )}
            </Row>
        );
    }
}

export default ListView;
