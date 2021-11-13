import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  updateProfile,
} from "@firebase/auth";

import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import useAuth from "../../contexts/useAuth";
import initializeAuthentication from "./Firebase/Firebase.init";
import { Col, Container } from "react-bootstrap";
import { Row } from "react-bootstrap";

initializeAuthentication();

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/";

  const auth = getAuth();

  const { signinWithGoogle } = useAuth();

  const handleGoogleSignIn = () => {
    signinWithGoogle().then((result) => {
      const user = result.user;
      console.log(user);
      saveUser(user.email, user.displayName, "PUT");
      history.push(redirect_uri);
    });
  };

  const toggleLogin = (e) => {
    setIsLogin(e.target.checked);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    // console.log(email, password);
    if (password.length < 6) {
      setError("Password must be at least 6 character long");
      return;
    }

    isLogin ? processLogin(email, password) : createNewUser(email, password);
  };

  const processLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        history.push(redirect_uri);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const createNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        history.push(redirect_uri);
        setError("");
        // save user to the database
        saveUser(email, name, "POST");
        verifyEmail();
        setUserName();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name }).then((result) => { });
  };

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then((result) => {
      console.log(result);
    });
  };

  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email).then((result) => { });
  };

  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };

    fetch("http://localhost:5000/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  return (
    <div className="m-5">
      <Container>
        <Row>
          <Col md={4}></Col>
          <Col md={4}>
            <form onSubmit={handleRegistration}>
              <h3 className="text-black">
                Please {isLogin ? "Login" : "Register"}
              </h3>
              {!isLogin && (
                <div className="row mb-3">
                  <label
                    htmlFor="inputName"
                    className="col-sm-2 col-form-label"
                  >
                    Name
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      onBlur={handleNameChange}
                      className="form-control"
                      id="InputName"
                      placeholder="Your Name"
                    />
                  </div>
                </div>
              )}
              <div className="row mb-3">
                <label
                  htmlFor="inputEmail3"
                  className="col-sm-2 col-form-label"
                >
                  Email
                </label>
                <div className="col-sm-10">
                  <input
                    onChange={handleEmailChange}
                    type="email"
                    placeholder="Your Email"
                    className="form-control"
                    id="inputEmail3"
                    label="Input Your Email"
                    required
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label
                  htmlFor="inputPassword3"
                  className="col-sm-2 col-form-label"
                >
                  Password
                </label>
                <div className="col-sm-10">
                  <input
                    onBlur={handlePasswordChange}
                    type="password"
                    className="form-control"
                    id="inputPassword3"
                    placeholder="Input Password"
                    required
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-sm-10 offset-sm-2">
                  <div className="form-check">
                    <input
                      onChange={toggleLogin}
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheck1"
                    />
                    <label className="form-check-label" htmlFor="gridCheck1">
                      Already Registered?
                    </label>
                  </div>
                </div>
              </div>
              <div className="row mb-3 text-danger">{error}</div>
              <button type="submit" className="btn btn-global-color">
                {isLogin ? "Login" : "Register"}
              </button>
              <br />
              <br />
              <button
                onClick={handleResetPassword}
                type="button"
                className="btn btn-sm btn-global-color"
              >
                Reset Password
              </button>
            </form>
            <br />
            <div>---------Please Sign In Different Way--------</div>
            <br />
            <button
              className="btn btn-global-color"
              onClick={handleGoogleSignIn}
            >
              Google Sign In
            </button>
          </Col>
          <Col md={4}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
