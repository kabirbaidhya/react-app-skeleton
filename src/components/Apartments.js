import React, {Component} from 'react';
import {Grid, Row, Col, Thumbnail, Button} from 'react-bootstrap';

class Apartments extends Component {
    render() {
        let {list} = this.props;
        let item = (data, index) => (
            <Col key={index} xs={6} md={3}>
              <Thumbnail src="/images/thumbnaildiv.png" alt="242x200">
                <h3>{data.title}</h3>
                <p>{data.description}</p>
                <p>
                  <Button bsStyle="primary">Button</Button>&nbsp;
                  <Button bsStyle="default">Button</Button>
                </p>
              </Thumbnail>
            </Col>
        );

        return (
          <Grid>
            <Row>
            {list.map(item)}
            </Row>
          </Grid>
        );
    }
}

export default Apartments;
