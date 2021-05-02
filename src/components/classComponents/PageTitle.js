import React, { Component } from 'react';
import {Container,Row,Col} from 'reactstrap';

class PageTitle extends Component{
    render() {
        return (
            <>
            <Container>
            <h5 className={'text-left'} style={{ color:'#4591EE', fontWeight: 'bold',paddingTop:'15px'}}>{this.props.title}</h5>
            </Container>
            <Container fluid={true}>
            <hr></hr>
            </Container>
            </>
        )
    }
}
export default PageTitle;