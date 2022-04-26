import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import  { useState } from 'react';
import swal from 'sweetalert';
import Button from '@material-ui/core/Button';


const login = () => {

  const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
    },
    image: {
      backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundSize: 'cover',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  async function loginUser(credentials) { 
    return fetch('http://localhost:4200/login', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [username, setUserName] = useState();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    // eslint-disable-next-line no-undef
    const response = await loginUser({
      username,
      password
    });
    const result = response['data'];
    if ('token' in result) {
      swal("Success", response.message, "success", {
        buttons: false,
        timer: 2000,
      })
      .then((value) => {
        localStorage.setItem('token', result['token']);
        localStorage.setItem('user', JSON.stringify(result['user']));
        window.location.href = "/patients";
      });
    } else {
      swal("Failed", response.message, "error");
    }
  }

  return (
    <div>
      <Container>
        <Row className="align-items-center mt-5">
          <Col md={6} className="mx-auto">
            <Card className="text-center">
              <Card.Body>
                <img className="img-fluid" src="/logo.png" alt="logo" />
              </Card.Body>
              <Card.Footer> 
                <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              name="email"
              label="Email Address"
              onChange={e => setUserName(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              onChange={e => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Log in
            </Button>
          </form>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default login;
