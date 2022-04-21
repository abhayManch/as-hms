import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Container, Row, Col, Button, FormControl } from "react-bootstrap";
import {
  FiUser,
  FiHeart,
  FiHelpCircle,
  FiSearch,
  FiFacebook,
  FiInstagram,
  FiTwitter,
} from "react-icons/fi";
import { GoSettings } from "react-icons/go";

const Header = () => {
  const Headers = styled.div`
    background-color: #fff !important;
    box-shadow: 1px 1px 30px rgba(0, 0, 0, 0.12);
    position: relative;
    width: 100%;
    .btn-info {
      svg {
        font-size: 20px;
      }
    }
  `;
  const Topheader = styled.div`
    width: 100%;
  `;
  const HeaderIcon = styled.div`
    display: flex;
    align-items: center;
    span {
      display: flex;
      flex-direction: column;
      font-size: 14px;
    }
    svg {
      font-size: 30px;
      flex: 0 0 auto;
      width: 46px;
    }
  `;

  return (
    <Headers>
      <Topheader>
        <Container fluid>
          <Row className="align-items-center">
            <Col md={4}>
              <Navbar.Brand href="#home">
                <img src="/logo.png" alt="logo" />
              </Navbar.Brand>
            </Col>
            <Col md={5} className="ml-auto rightheaders">
              <Row className="align-items-center justify-content-end">
                <Col className="ml-auto">
                  <img src="/east-valley.png" alt="east-valley" />
                </Col>
                <Col>
                  <div className="text-center">
                    <img src="/user.png" alt="east-valley" />
                  </div>
                </Col>
                <Col>
                  <HeaderIcon>
                    <GoSettings />
                    <span className="nowrap ml-2">User Settings</span>
                  </HeaderIcon>
                </Col>
                <Col>
                  <HeaderIcon>
                    <FiHelpCircle />
                    <span className="ml-2">Help</span>
                  </HeaderIcon>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Topheader>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="w-100">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link pl-0" to="/home">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/patients">
                    Patients
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/appointment">
                    Appointment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Schedule
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Overview
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Insurance
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Billing
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Reporting
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Setup
                  </Link>
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Headers>
  );
};

export default Header;
