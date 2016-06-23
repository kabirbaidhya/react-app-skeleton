import React, {Component} from 'react';

class PriceTag extends Component {

    render() {
        const {text} = this.props;

        return (
            <div className="short-info">
                <div className="img-box text-content">
                    <p>{text}</p>
                </div>
            </div>
        );
    }
}

export default PriceTag;
