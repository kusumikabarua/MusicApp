import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,

  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Card({title,songUrl}) {
  return (
    <MDBCard>
      <MDBCardImage src={songUrl} position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>{title}</MDBCardTitle>
        
        <MDBBtn href='#'>Play</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
}