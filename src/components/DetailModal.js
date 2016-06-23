import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';

class DetailModal extends Component {
    render() {
        let {Header, Title, Body, Footer} = Modal;
        let {title} = this.props.data;

        return (
            <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
            <Header closeButton>
                <Title id="contained-modal-title-lg">{title}</Title>
            </Header>
            <Body>
            <h4>Wrapped Text</h4>
            <p>Cras mattis consectetur purus sit amet fermentum.Cras justo odio, dapibus ac
            facilisis in , egestas eget quam.Morbi leo risus,
             porta ac consectetur ac, vestibulum at eros. </p>
             <p> Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
             Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. </p>
             <p> Aenean lacinia bibendum nulla sed consectetur.
             Praesent commodo cursus magna, vel scelerisque nisl consectetur et.Donec sed odio dui.
             Donec ullamcorper nulla non metus auctor fringilla. </p>
             <p> Cras mattis consectetur purus sit amet fermentum.
             Cras justo odio, dapibus ac facilisis in , egestas eget
             quam.Morbi leo risus, porta ac consectetur ac, vestibulum at eros. </p>
             <p> Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
             Vivamus sagittis lacus vel augue laoreet rutrum faucibus
             dolor auctor. </p>
             <p> Aenean lacinia bibendum nulla sed consectetur.
             Praesent commodo cursus magna, vel scelerisque nisl consectetur et
             .Donec sed odio dui.Donec ullamcorper nulla non metus auctor
              fringilla. </p>
              <p> Cras mattis consectetur purus sit amet fermentum.Cras justo odio, dapibus ac facilisis in ,
              egestas eget quam.Morbi leo risus, porta ac consectetur ac, vestibulum at eros. </p>
              <p> Praesent commodo cursus magna, vel scelerisque nisl consectetur et.Vivamus sagittis lacus vel augue
              laoreet rutrum faucibus dolor auctor. </p>
              </Body>
              <Footer>
                <Button onClick = {this.props.onHide}>Close</Button>
                </Footer>
            </Modal>
        );
    }
}

export default DetailModal;
