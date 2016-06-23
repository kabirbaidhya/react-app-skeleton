import React, {Component} from 'react';

class ShortInfo extends Component {

    render() {
        const {price} = this.props;

        return (
            <div className="price-tag pull-right">
                <span className="currency">USD </span>
                <span className="price">{price}</span>
            </div>
        );
    }
}

export default ShortInfo;
