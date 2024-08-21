import React, { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";
import styles from "./MusicDashboard.module.css";
import { API_BASE_URL } from "../../config";

export default function MusicDashboard() {
 
 

  const isLoggedIn = localStorage.getItem("token") ? true : false;

  return (
    <section className={styles.gradient}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="d-flex justify-content-center align-items-center">
          <MDBCol md="12" xl="10">
            <MDBCard>
              {isLoggedIn && (
                <MDBBtn
                  style={{ position: "absolute", right: "10px", top: "10px" }}
                  color="danger"
                  onClick={() => {
                    localStorage.removeItem("token"); // Clear token from localStorage
                    window.location.reload(); // Reload the page
                  }}
                >
                  Logout
                </MDBBtn>
              )}
              <MDBCardBody className="p-4 text-black">
                <div className="text-center pt-3 pb-2">
                 
                
                </div>
                
                {!isLoggedIn && (
                  <div>
                    <h2>Welcome to the Music App</h2>
                    <p>
                      Listen  to Music and create playlist
                    </p>
                    <div>
                      <a href="/login" className="btn btn-primary mx-2">
                        Login
                      </a>
                      <a href="/register" className="btn btn-secondary mx-2">
                        Sign Up
                      </a>
                    </div>
                  </div>
                )}

                {isLoggedIn}

               
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
