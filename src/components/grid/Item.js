import React, {Component} from 'react';
import {Grid, Row, Col, Thumbnail, Button} from 'react-bootstrap';
import PriceTag from './PriceTag';
import ShortInfo from './ShortInfo';

class Item extends Component {

    handleClick(e) {
        // TODO: Need to use this logic using the route
        let {showModal} = this.props;

        showModal(this.props);
    }

    render() {
        let {id, title, image, price, description} = this.props;

        return (
            <Col s={6} md={3} className="item">
                <a href={`#/apartments/${id}`} onClick={this.handleClick.bind(this)}>
                    <Thumbnail src={image} alt={title}>
                        <h3>{title}</h3>

                        <div className="bottom-text clearfix">
                            <PriceTag price={price} />
                        </div>
                    </Thumbnail>
                    <ShortInfo text={description} />
                </a>
            </Col>
        );
    }
}

export default Item;
