import React from "react";
import { Navbar, Container, Nav, Image } from 'react-bootstrap';
import backgroundImage from '../../../public/assets/images/bg-global.png'



export default function PublicHeader() {
    return (

            <Navbar
                className="navbar navbar-expand-lg d-flex custom-bg-transition m-0 p-0"
                style={{
                    height: '80px',
                    backgroundColor: "#09253B",
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: "center center"

                }}
            >
            </Navbar>




    );
}
