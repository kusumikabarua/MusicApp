import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,

  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Card({title}) {
  return (
    <MDBCard style={{ width: '12rem' }}>
      <MDBCardImage src={require('../../assets/images/music.png')}  position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>{title}</MDBCardTitle>
        
        <MDBBtn href='#'>Play</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
}